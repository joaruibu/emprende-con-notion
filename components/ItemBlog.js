import Link from 'next/link'
import React from 'react'
import { getUrltTitle } from '../helpers'




const ItemBlog = ({ item }) => {
    console.log(55555, item)

    const { title, id, post_summary, date, imgs, tags } = item


    return (
        <Link href={`/blog/${getUrltTitle(title)}-${id}`}>
            <article key={id} className=" mb-9 relative isolate flex flex-col gap-8 lg:flex-row border border-stone-950 rounded-md hover:shadow-dark transition-all">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                        src={imgs[0]}
                        alt=""
                        className="absolute inset-0 h-full w-full rounded-t-md bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={date} className="text-gray-500">
                            {date}
                        </time>
                        {
                            tags.map((tag, index) => {
                                return <a
                                    key={index}
                                    href={''}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {tag}
                                </a>
                            })
                        }

                    </div>
                    <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href={`/blog/${id}`}>
                                <span className="absolute inset-0" />
                                {title}
                            </a>
                        </h3>
                        <p className="mt-5 text-sm leading-6 text-gray-600" dangerouslySetInnerHTML={{ __html: post_summary }}></p>
                    </div>

                </div>
            </article>




        </Link>
    )
}

export default ItemBlog


