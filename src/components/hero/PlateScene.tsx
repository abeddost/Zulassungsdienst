"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { paintPlate, plateFont, type PlateSpec } from "./plate-art";

/**
 * The 3D licence plate: one object, lit like a product shot.
 *  - floats and leans toward the pointer
 *  - turns a full flip when the plate type changes, swapping its face mid-turn
 *  - redraws instantly while a custom number is typed
 * Plain Three.js keeps it to a single dependency. The scene pauses when off screen.
 */

type Props = {
  spec: PlateSpec;
  /** Changes when the plate should flip to a new type (not on every keystroke). */
  flipKey: string;
  /** Colour of the light on and behind the plate, as a hex string. */
  accent: string;
  onReady: () => void;
  onFail: () => void;
};

type Api = {
  show: (spec: PlateSpec, flip: boolean) => void;
  tint: (hex: string) => void;
};

// Plate size in scene units: 1 unit = 100 mm.
const W = 5.2;
const H = 1.1;
const DEPTH = 0.045;

function roundedRectShape(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

export default function PlateScene({ spec, flipKey, accent, onReady, onFail }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const api = useRef<Api | null>(null);
  const latest = useRef({ spec, accent, onReady, onFail });
  const lastFlipKey = useRef(flipKey);

  useEffect(() => {
    latest.current = { spec, accent, onReady, onFail };
  });

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const font = await plateFont();
      if (disposed) return;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        latest.current.onFail();
        return;
      }

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // The light on the plate follows the theme's accent where it is a plain hex colour.
      const themeAccent = getComputedStyle(el).getPropertyValue("--color-secondary").trim();
      if (/^#[0-9a-f]{3,8}$/i.test(themeAccent)) latest.current.accent = themeAccent;
      const coarse = window.matchMedia("(pointer: coarse)").matches;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 1.75));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      // Neutral tone mapping keeps the printed colours of the plate true (black stays black).
      renderer.toneMapping = THREE.NeutralToneMapping;
      renderer.toneMappingExposure = 1;
      renderer.domElement.style.cssText = "width:100%;height:100%;display:block";
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 100);

      // Studio lighting without any downloaded files.
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = envMap;
      scene.environmentIntensity = 0.5;

      const key = new THREE.DirectionalLight(0xffffff, 1.7);
      key.position.set(-3.5, 4, 6);
      scene.add(key);
      const accentLight = new THREE.PointLight(new THREE.Color(latest.current.accent), 13, 14, 1.6);
      accentLight.position.set(3.4, -1.6, 2.2);
      scene.add(accentLight);

      // Face artwork: colour map and height map from the same drawing.
      const faceCanvas = document.createElement("canvas");
      const bumpCanvas = document.createElement("canvas");
      paintPlate(faceCanvas, latest.current.spec, font, "colour");
      paintPlate(bumpCanvas, latest.current.spec, font, "bump");
      const faceTex = new THREE.CanvasTexture(faceCanvas);
      faceTex.colorSpace = THREE.SRGBColorSpace;
      faceTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      const bumpTex = new THREE.CanvasTexture(bumpCanvas);
      bumpTex.anisotropy = faceTex.anisotropy;

      const plate = new THREE.Group();
      scene.add(plate);

      const bodyGeo = new THREE.ExtrudeGeometry(roundedRectShape(W, H, 0.11), {
        depth: DEPTH,
        bevelEnabled: true,
        bevelThickness: 0.012,
        bevelSize: 0.012,
        bevelSegments: 3,
        curveSegments: 16,
      });
      bodyGeo.translate(0, 0, -DEPTH / 2);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0xc9ccd1, metalness: 0.9, roughness: 0.36 });
      plate.add(new THREE.Mesh(bodyGeo, bodyMat));

      const faceGeo = new THREE.ShapeGeometry(roundedRectShape(W - 0.012, H - 0.012, 0.105), 16);
      const pos = faceGeo.attributes.position;
      const uv = new Float32Array(pos.count * 2);
      for (let i = 0; i < pos.count; i++) {
        uv[i * 2] = (pos.getX(i) + W / 2) / W;
        uv[i * 2 + 1] = (pos.getY(i) + H / 2) / H;
      }
      faceGeo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
      const faceMat = new THREE.MeshPhysicalMaterial({
        map: faceTex,
        bumpMap: bumpTex,
        bumpScale: 2.2,
        roughness: 0.55,
        metalness: 0,
        clearcoat: 0.22,
        clearcoatRoughness: 0.45,
      });
      const face = new THREE.Mesh(faceGeo, faceMat);
      face.position.z = DEPTH / 2 + 0.0125;
      plate.add(face);

      // Soft coloured light behind the plate.
      const glowCanvas = document.createElement("canvas");
      glowCanvas.width = glowCanvas.height = 256;
      const g = glowCanvas.getContext("2d");
      if (g) {
        const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
        grad.addColorStop(0, "rgba(255,255,255,0.9)");
        grad.addColorStop(0.45, "rgba(255,255,255,0.22)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        g.fillStyle = grad;
        g.fillRect(0, 0, 256, 256);
      }
      const glowTex = new THREE.CanvasTexture(glowCanvas);
      const glowMat = new THREE.MeshBasicMaterial({
        map: glowTex,
        color: new THREE.Color(latest.current.accent),
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(10.5, 5.6), glowMat);
      glow.position.z = -1.6;
      scene.add(glow);

      const targetAccent = new THREE.Color(latest.current.accent);

      // --- sizing ---
      const fit = () => {
        const w = el.clientWidth || 1;
        const h = el.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        // The plate takes 84% of the width, but never more than 60% of the height,
        // so it still has room to float and flip in a short, wide canvas.
        const half = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const byWidth = W / 0.84 / (2 * half * camera.aspect);
        const byHeight = H / 0.6 / (2 * half);
        camera.position.set(0, 0, Math.max(byWidth, byHeight));
        camera.updateProjectionMatrix();
      };
      fit();
      const ro = new ResizeObserver(() => {
        fit();
        if (reduceMotion) renderer.render(scene, camera);
      });
      ro.observe(el);

      // --- state ---
      const pointer = { x: 0, y: 0, tx: 0, ty: 0, last: -10 };
      const flip = { active: false, p: 0, swapped: true, next: latest.current.spec };
      let t = 0;
      let intro = reduceMotion ? 1 : 0;

      const paint = (s: PlateSpec) => {
        paintPlate(faceCanvas, s, font, "colour");
        paintPlate(bumpCanvas, s, font, "bump");
        faceTex.needsUpdate = true;
        bumpTex.needsUpdate = true;
      };

      const pose = (dt: number) => {
        t += dt;
        const k = 1 - Math.exp(-dt * 5);
        // No pointer for a while (or a touch screen): drift on a slow figure of eight.
        if (t - pointer.last > 3) {
          pointer.tx = Math.sin(t * 0.45) * 0.55;
          pointer.ty = Math.sin(t * 0.3 + 1) * 0.35;
        }
        pointer.x += (pointer.tx - pointer.x) * k;
        pointer.y += (pointer.ty - pointer.y) * k;
        intro = Math.min(1, intro + dt / 1.1);
        const inE = 1 - Math.pow(1 - intro, 3);

        let turn = 0;
        if (flip.active) {
          flip.p = Math.min(1, flip.p + dt / 0.8);
          if (!flip.swapped && flip.p >= 0.5) {
            paint(flip.next);
            flip.swapped = true;
          }
          turn = easeInOut(flip.p) * Math.PI * 2;
          if (flip.p >= 1) flip.active = false;
        }

        plate.rotation.x = -pointer.y * 0.22 + Math.sin(t * 0.7) * 0.03 + turn;
        plate.rotation.y = pointer.x * 0.4 + Math.sin(t * 0.5) * 0.04 + (1 - inE) * -1.1;
        plate.rotation.z = Math.sin(t * 0.6) * 0.012 - 0.035;
        plate.position.y = Math.sin(t * 0.9) * 0.05 + (1 - inE) * -0.5;
        plate.scale.setScalar(0.86 + 0.14 * inE);

        accentLight.color.lerp(targetAccent, k);
        glowMat.color.lerp(targetAccent, k);
      };

      // --- loop, paused when off screen or the tab is hidden ---
      let raf = 0;
      let onScreen = true;
      let lastTime = 0;
      const tick = (now: number) => {
        raf = requestAnimationFrame(tick);
        const dt = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 0;
        lastTime = now;
        pose(dt);
        renderer.render(scene, camera);
      };
      const start = () => {
        if (reduceMotion || raf) return;
        lastTime = 0;
        raf = requestAnimationFrame(tick);
      };
      const stop = () => {
        cancelAnimationFrame(raf);
        raf = 0;
      };
      const still = () => {
        plate.rotation.set(-0.1, 0.28, -0.035);
        accentLight.color.copy(targetAccent);
        glowMat.color.copy(targetAccent);
        renderer.render(scene, camera);
      };

      const io = new IntersectionObserver(([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen && !document.hidden) start();
        else stop();
      });
      io.observe(el);
      const onVisibility = () => (document.hidden ? stop() : onScreen && start());
      document.addEventListener("visibilitychange", onVisibility);

      const area = el.closest("section") ?? el;
      const onPointer = (e: PointerEvent) => {
        const r = area.getBoundingClientRect();
        pointer.tx = THREE.MathUtils.clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
        pointer.ty = THREE.MathUtils.clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);
        pointer.last = t;
      };
      if (!reduceMotion) window.addEventListener("pointermove", onPointer, { passive: true });

      const onLost = (e: Event) => {
        e.preventDefault();
        stop();
        latest.current.onFail();
      };
      renderer.domElement.addEventListener("webglcontextlost", onLost);

      api.current = {
        show(s, withFlip) {
          if (reduceMotion || !withFlip) {
            flip.active = false;
            paint(s);
            if (reduceMotion) still();
            return;
          }
          flip.next = s;
          flip.p = 0;
          flip.swapped = false;
          flip.active = true;
        },
        tint(hex) {
          targetAccent.set(hex);
          if (reduceMotion) still();
        },
      };

      if (reduceMotion) still();
      else start();
      latest.current.onReady();

      cleanup = () => {
        stop();
        io.disconnect();
        ro.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
        window.removeEventListener("pointermove", onPointer);
        renderer.domElement.removeEventListener("webglcontextlost", onLost);
        api.current = null;
        [bodyGeo, faceGeo, glow.geometry].forEach((geo) => geo.dispose());
        [bodyMat, faceMat, glowMat].forEach((mat) => mat.dispose());
        [faceTex, bumpTex, glowTex, envMap].forEach((tex) => tex.dispose());
        pmrem.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
      if (disposed) cleanup();
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  useEffect(() => {
    const withFlip = lastFlipKey.current !== flipKey;
    lastFlipKey.current = flipKey;
    api.current?.show(spec, withFlip);
  }, [spec, flipKey]);

  useEffect(() => {
    api.current?.tint(accent);
  }, [accent]);

  return <div ref={host} aria-hidden="true" className="absolute inset-0" />;
}
