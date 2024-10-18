import React from "react";
import TransitionProvider from "../TransitionProvider/transitionProvider";
import Navbar from "../Navbar/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
}); 

const Layout = ({ children, className = "" }) => {
  return (
    <TransitionProvider
      className={`w-full h-full inline-block z-0 bg-gradient-to-b from-blue-50 to-red-100 p-32 ${className}`}
    >
      {children}
    </TransitionProvider>
  );
};

export default Layout;
