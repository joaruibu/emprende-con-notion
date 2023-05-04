import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className='max-w-3xl mx-auto px-4  min-h-screen'>
            <Navbar />
            {children}
            <Footer />

        </div>
    )
}

export default Layout