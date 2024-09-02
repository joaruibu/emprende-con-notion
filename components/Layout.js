import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const pagesNoNavbar = {
    coversId: "/notion-covers/[id]",
    coversAccesId: "/notion-covers-acceso/[id]",
    coversDownloasId: "/notion-covers-descarga/[id]",
    templatesId: "/plantillas/[id]",
    confirmSuscription: "/suscripcion-confirmada",
    lastStepSuscription: "/ultimo-paso-suscripcion",
    lasStep: "/ultimo-paso",
    tallerEmpezarUsarNotion: "/taller-empezar-en-notion-es-asi-de-facil",
    tallerEmpezarUsarNotionEstasDentro:
      "/taller-empezar-en-notion-es-asi-de-facil-estas-dentro",
    masterclass9Errores: "/masterclass-9-errores-en-notion",
    masterclass9ErroresEstasDentro:
      "/masterclass-9-errores-en-notion-estas-dentro",
  };

  const showNavbarPage = (pathname) => {
    const hasPageNavbar = Object.values(pagesNoNavbar).includes(pathname);
    return !hasPageNavbar;
  };

  showNavbarPage(pathname);

  return (
    <div className="bg-stone-200">
      <div
        className={` ${
          pathname === pagesNoNavbar.coversDownloasId
            ? " max-w-screen-2xl "
            : " max-w-3xl "
        } mx-auto px-4 min-h-screen relative  `}
      >
        {showNavbarPage(pathname) && <Navbar />}
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
