import type { ReactNode } from "react";
import "../globals.css";
import { RootShell } from "../render";

export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
