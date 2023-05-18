import Link from 'next/link'
import React from 'react'
import { getUrltTitle } from '../helpers/index';




const ItemTemplate = ({ item }) => {

    const { title, id, imgs, tags } = item


    return (
        <Link href={`/templates/${getUrltTitle(title)}-${id}`}>
            <article key={id} className=" mb-8 relative isolate border-2 border-stone-950 rounded-md hover:shadow-dark transition-all">

                <img
                    src={imgs[0]}
                    alt=""
                    className=" w-full object-cover rounded-md object-center"
                />

                <div>
                    <div className='flex items-center justify-between mt-4 mr-3'>

                        <h3 className=" ml-3">
                            <a href={`/templates/${getUrltTitle(title)}-${id}`}>
                                {title}
                            </a>
                        </h3>
                    </div>

                    <div className="flex items-center gap-x-4 mt-2">
                        {
                            tags.map((tag, index) => {
                                return <h
                                    key={index}
                                    href={''}
                                    className="px-3 py-1.5 text-terracotta text-xs"
                                >
                                    {tag}
                                </h>
                            })
                        }
                    </div>

                    <div className='h-11 w-11 bg-yellow-300 absolute top-2 rounded-full left-2 grid place-content-center'>
                        <h5 className='text-xs -rotate-6'>Gratis
                        </h5>
                    </div>
                </div>
            </article>




        </Link>
    )


}

export default ItemTemplate
