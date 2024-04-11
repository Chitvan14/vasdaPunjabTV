import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const recursive = Recursive({ weight: ["600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vasda Punjab TV",
  description:
    "First on the scene, last to leave. Keeping you informed on all important topics.",
    openGraph: {
      title: "Vasda Punjab TV",
      description:
      "First on the scene, last to leave. Keeping you informed on all important topics.",
      url: "https://vasdapunjab.com/",
      siteName: "Vasda Punjab TV",
      images: [
        // {
        //   url: "https://pinkskyclub.com/800x600.jpg",
        //   width: 800,
        //   height: 600,
        // },
        // {
        //   url: "https://pinkskyclub.com/1800x1600.jpg",
        //   width: 1800,
        //   height: 1600,
        //   alt: "pinksky-website",
        // },
      ],
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
      <body
        className={`${recursive.className} h-full bg-white-50 text-black-950`}
      >
          <Navbar />
          <main className="h-full mx-auto md:p-4 p-2">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
