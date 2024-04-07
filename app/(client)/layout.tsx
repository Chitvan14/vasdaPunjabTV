import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";
import Footer from "../components/Footer";

const recursive = Recursive({weight:["600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog With CMS - Next.js App",
  description: "Created with Next.js and Sanity.io for my YouTube channel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${recursive.className} h-full bg-white-50 text-black-950 dark:bg-black-950 dark:text-white-50 dark:selection:bg-[#100E44]`}
      >
        <Provider>
          <Navbar />
          <main className="h-full mx-auto md:p-4 p-2">{children}</main>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
