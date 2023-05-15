import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    const { pathname } = useRouter();

    return (
        <div className='max-w-3xl mx-auto px-4  min-h-screen'>
            {pathname !== '/templates' || pathname !== '' && <Navbar />}
            {children}
            <Footer />

        </div>
    )
}

export default Layout