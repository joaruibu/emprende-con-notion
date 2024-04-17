import Link from 'next/link'
import React from 'react'
import { getUrltTitle } from '../helpers/index';




const ItemCover = ({ item }) => {

    const { title, id, isFree, price, previewCovers } = item


    return (
        <Link className='block' href={`/notion-covers/${getUrltTitle(title)}-${id}`}>
            <article key={id} className="break-inside mb-9 relative isolate border-2 border-stone-950 bg-white rounded-md hover:shadow-dark transition-all">
                <img
                    src={previewCovers[0]}
                    alt=""
                    className=" w-full object-cover rounded-md object-center"
                />

                <div className='flex items-center justify-between my-4 mr-3'>
                    <h4 className=" ml-3">
                        <a className='text-gray-900 text-2xl leading-5 hover:text-gray-800 font-montserrat font-bold no-underline' href={`/templates/${getUrltTitle(title)}-${id}`}>
                            {title}
                        </a>
                    </h4>

                    {
                        !isFree &&
                        <span className='text-xl font-bold  bg-yellow-300 text-gray-900 px-4 py-1 rounded-xl'>{price} €</span>
                    }
                </div>

                {
                    isFree &&
                    <div className='h-20 w-20 bg-yellow-300 text-black absolute top-2 rounded-full right-2 grid place-content-center'>
                        <h5 className='text-lg -rotate-12'>Gratis
                        </h5>
                    </div>
                }

            </article>
        </Link>
    )


}


export default ItemCover
