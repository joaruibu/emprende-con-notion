import Link from 'next/link'
import React from 'react'
import { getUrltTitle } from '../helpers/index';




const ItemTemplate = ({ item }) => {

    const { title, id, imgs, tags } = item


    return (
        <Link href={`/template/${getUrltTitle(title)}-${id}`}>
            <article key={id} className=" mb-8 relative isolate border-2 border-stone-950 rounded-md hover:shadow-dark transition-all">
                <img
                    src={imgs[0]}
                    alt=""
                    className=" w-full object-cover rounded-md object-center"
                />

                <div>
                    <div className='flex items-center justify-between mt-4 mr-3'>

                        <h4 className=" ml-3">
                            <a href={`/template/${getUrltTitle(title)}-${id}`}>
                                {title}
                            </a>
                        </h4>
                        {/* <span className='text-terracotta font-bold '>Gratis</span> */}
                    </div>

                    <div className="flex items-center gap-x-4 mt-2">
                        {
                            tags.map((tag, index) => {
                                return <h7
                                    key={index}
                                    href={''}
                                    className="relative text-xs rounded-full bg-gray-50 px-3 py-1.5 font-normal text-gray-600 "
                                >
                                    {tag}
                                </h7>
                            })
                        }
                    </div>

                    <div className='h-10 w-10 bg-yellow-300 absolute top-2 rounded-full left-2 grid place-content-center'>
                        <h5 >Gratis
                        </h5>
                    </div>
                </div>
            </article>




        </Link>
    )


}

export default ItemTemplate
