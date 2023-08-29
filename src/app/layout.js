import Banner from "@/components/Banner";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "হবিগঞ্জ পলিটেকনিক ইন্সটিটিউট",
  description: "A Govt college site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
