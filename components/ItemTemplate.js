import Link from 'next/link'
import React from 'react'
import { getUrltTitle } from '../helpers/index';




const ItemTemplate = ({ item }) => {

    const { title, id, template_summary, imgs, tags } = item

    console.log(title)
    return (
        <Link href={`/templates/${getUrltTitle(title)}-${id}`} >
            <article key={id} className=" break-inside mb-9 flex flex-col items-start justify-between border border-stone-950 rounded-md hover:shadow-dark transition-all">
                <div className="relative w-full">

                    <img
                        src={imgs[0]}
                        alt=""
                        className="aspect-[16/9] w-full rounded-t-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">

                        {
                            tags.map((tag, index) => {
                                return <a
                                    key={index}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {tag}
                                </a>
                            })

                        }
                    </div>
                    <div className="group relative p-3">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href={''}>
                                <span className="absolute inset-0" />
                                {title}
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" dangerouslySetInnerHTML={{ __html: template_summary }}></p>


                    </div>

                </div>
            </article>
        </Link>
    )
}

export default ItemTemplate
