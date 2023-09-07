"use client";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

//export is remove here for a begin. check for better solution.
const metadata: Metadata = {
  title: "Ongchen Sherpa",
  description: "Nextjs personal portfolio website powered by vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        {/* {icon not working, need to fix later} */}
        {/* <link rel='icon' href={logo}/> */}
      </head>
      <body className="font-bodyFont w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60"> {/* the scrollbar is from the tailwind plugin tailwind scrollbar from npm, read documentation to see it's property and classes */}
        <Navbar />
        <div className="items-center w-full h-[88vh] xl:flex gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] mx-auto w-full p-4 ">
            <Banner />
            <About />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
            <RightSide />
          </motion.div>
        </div>
        {children}
      </body>
    </html>
  );
}
