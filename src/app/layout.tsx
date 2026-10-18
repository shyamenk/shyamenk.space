import type { Metadata } from "next";
import { Bebas_Neue, Orbitron, Outfit, Permanent_Marker } from "next/font/google";
import { Interactions } from "@/components/interactions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ variable: "--font-bebas-neue", weight: "400", subsets: ["latin"] });
const orbitron = Orbitron({ variable: "--font-orbitron", subsets: ["latin"] });
const permanentMarker = Permanent_Marker({ variable: "--font-permanent-marker", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shyamenk.space"),
  title: { default: "Shyam Kumar · Cloud & Backend Engineer", template: "%s · Shyam Kumar" },
  description:
    "Cloud and backend engineer in Kochi. Turning production outages into practical lessons on AWS, Linux, Kubernetes and system design.",
  openGraph: {
    title: "Shyam Kumar · Cloud & Backend Engineer",
    description: "Turning production outages into practical lessons.",
    url: "https://www.shyamenk.space",
    images: ["/images/me.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bebasNeue.variable} ${orbitron.variable} ${permanentMarker.variable} antialiased`}
    >
      <body className="font-sans">
        <a
          href="#content"
          className="sr-only z-50 rounded-full bg-lava px-4 py-2 text-void focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="content">{children}</div>
        <SiteFooter />
        <Interactions />
      </body>
    </html>
  );
}
