import type { Metadata } from "next";
import "./globals.css";
import { NotFoundPage, RootShell } from "./render";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Page not found",
  robots: { index: false },
};

/** Shown for any URL that matches no page. German is the site's default language. */
export default function GlobalNotFound() {
  return (
    <RootShell lang="de">
      <NotFoundPage lang="de" />
    </RootShell>
  );
}
