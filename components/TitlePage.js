import React from 'react'

const TitlePage = ({ subtitle, children }) => {

    return (
        <header className='my-12'>
            <h1 className='font-sub text-5xl  sm:text-7xl  mb-8'>{children}</h1>
            <h4 className='text-2xl text-gray-900 font-montserrat font-semibold'>{subtitle}</h4>
        </header>
    )
}

export default TitlePage