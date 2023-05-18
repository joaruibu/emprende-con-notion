import React from 'react'

const navigation = {
    main: [
        { name: 'legal', href: '/legal' },
        { name: 'privacidad', href: '/privacidad' },
    ],
}


const Footer = () => {
    return (
        <footer >
            <div className="mx-auto max-w-7xl overflow-hidden px-4">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer" >
                    {
                        navigation.main.map((item) => (
                            <div key={item.name} className="">
                                <a href={item.href} className="text-sm leading-6 font-light text-real-stone hover:text-light-terracota">
                                    {item.name}
                                </a>
                            </div>
                        ))
                    }
                </nav>
                <p className="mt-8 text-center text-xs leading-5 font-light text-real-stone"> &copy; {new Date().getFullYear()}  Emprende con Notion, Inc. All rights reserved.</p>
            </div>
        </footer >
    )
}

export default Footer
