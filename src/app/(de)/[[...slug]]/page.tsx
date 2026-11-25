import type { Metadata, Viewport } from "next";
import { pageMetadata, RenderPage, staticParams } from "../../render";

export const dynamicParams = false;

export const viewport: Viewport = { themeColor: "#fbfaf7", colorScheme: "light" };

export function generateStaticParams() {
  return staticParams("de");
}

type Props = { params: Promise<{ slug?: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata("de", (await params).slug);
}

export default async function Page({ params }: Props) {
  return <RenderPage lang="de" slug={(await params).slug} />;
}
