import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { pagesNoNavbar } from "../helpers/types";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  const showNavbarPage = (pathname) => {
    const hasPageNavbar = Object.values(pagesNoNavbar).includes(pathname);
    return !hasPageNavbar;
  };

  showNavbarPage(pathname);

  return (
    <div
      className={`${pathname === pagesNoNavbar.secondBrain ? " bg-stone-50 " : " bg-stone-200 "}`}
    >
      <div
        className={` ${
          [pagesNoNavbar.coversDownloasId, pagesNoNavbar.secondBrain].includes(
            pathname
          )
            ? " max-w-screen-3xl "
            : " max-w-4xl px-4 "
        } mx-auto min-h-screen relative  `}
      >
        {showNavbarPage(pathname) && <Navbar />}
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
