import type { Metadata, Viewport } from "next";
import { pageMetadata, RenderPage, staticParams } from "../../../render";

export const dynamicParams = false;

export const viewport: Viewport = { themeColor: "#0a1647", colorScheme: "light" };

export function generateStaticParams() {
  return staticParams("en");
}

type Props = { params: Promise<{ slug?: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata("en", (await params).slug);
}

export default async function Page({ params }: Props) {
  return <RenderPage lang="en" slug={(await params).slug} />;
}
