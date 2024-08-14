import CmsNavbar from "../components/CmsNavbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Vasda Punjab TV", template: "%s | Vasda Punjab TV" },
  description:
    "First on the scene, last to leave. Keeping you informed on all important topics.",
  openGraph: {
    title: "Vasda Punjab TV",
    description:
      "First on the scene, last to leave. Keeping you informed on all important topics.",
    url: "https://vasdapunjab.in/",
    siteName: "Vasda Punjab TV",
    images: [],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <CmsNavbar />
          {children}
      </body>
    </html>
  );
}
