import Link from 'next/link'
import React from 'react'
import { getUrltTitle } from '../helpers'




const ItemBlog = ({ item }) => {

    const { title, id, post_summary, img } = item

    return (
        <Link href={`/blog/${getUrltTitle(title)}-${id}`} >
            <article key={id} className=" break-inside mb-9 flex flex-col items-start justify-between border-2 border-stone-950 rounded-md hover:shadow-dark transition-all">
                <img
                    src={img}
                    alt=""
                    className="aspect-[16/9] w-full rounded-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className=" p-3 pb-0">
                    <h3 className=" text-lg pb-3 font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={`/blog/${getUrltTitle(title)}-${id}`}>
                            {title}
                        </a>
                    </h3>
                    <p className=" text-sm leading-6 text-gray-600" dangerouslySetInnerHTML={{ __html: post_summary }}></p>
                </div>
            </article>
        </Link>
    )
}

export default ItemBlog


