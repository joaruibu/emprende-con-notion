import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    const { pathname } = useRouter();

    return (
        // <div className={` ${pathname === '/' || pathname === '/sobre-mi' || pathname === '/suscripcion-confirmada' || pathname === '/plantillas/[id]' || pathname === '/blog/[id]' ? 'bg-stone-200' : 'bg-stone-50'}`}>

        <div className='bg-stone-200'>
            <div className='max-w-3xl mx-auto px-4 min-h-screen'>
                {pathname !== '/plantillas/[id]' && <Navbar />}
                {children}
                <Footer />

            </div>
        </div>
    )
}

export default Layout