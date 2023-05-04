import React from 'react'

const TitlePage = ({ subtitle, children }) => {

    return (
        <header className='my-16 text-center'>
            <h1 className='font-sub text-5xl  sm:text-7xl  mb-4'>{children}</h1>
            <h4 className='text-2xl text-gray-600'>{subtitle}</h4>
        </header>
    )
}

export default TitlePage