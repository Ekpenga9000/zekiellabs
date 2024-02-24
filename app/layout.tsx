import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "./components/Nav";
import "@styles/globals.css";
import Footer from "./components/Footer";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zekiel Labs - Software Development Company and Digital Solutions Agency",
  description:
    "Welcome to Zekiel Labs, where creativity meets innovation in the digital world! Explore our comprehensive suite of services tailored to elevate your online presence. From bespoke software solutions development to cutting-edge digital marketing strategies and expert SEO services, we're your one-stop destination for all things web. Whether you're seeking captivating websites, engaging landing pages, or robust social media management, our team is dedicated to crafting solutions that resonate with your audience and drive tangible results. Let's embark on a journey to unlock your digital potential together! Connect with us today and watch your online presence soar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="./favicon.ico"
        />
      </head>
      <body className={poppins.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
