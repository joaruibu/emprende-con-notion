import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    const { pathname } = useRouter();
    const pagesNoNavbar = {
        coversId: '/notion-covers/[id]',
        coversAccesId: '/notion-covers-acceso/[id]',
        coversDownloasId: '/notion-covers-descarga/[id]',
        templatesId: '/plantillas/[id]',
        confirmSuscription: '/suscripcion-confirmada',
        lastStepSuscription: '/ultimo-paso-suscripcion',
        lasStep: '/ultimo-paso'
    }

    const showNavbarPage = (pathname) => {
        const hasPageNavbar = Object.values(pagesNoNavbar).includes(pathname)
        return !hasPageNavbar
    }

    showNavbarPage(pathname)

    return (

        <div className='bg-stone-200'>

            <div className={` ${pathname === pagesNoNavbar.coversDownloasId ? ' max-w-screen-2xl ' : ' max-w-3xl '} mx-auto px-4 min-h-screen relative  `} >
                {showNavbarPage(pathname) && <Navbar />}
                {children}
                <Footer />

            </div>
        </div >
    )
}

export default Layout