import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getItemById } from '../../helpers';
import { DATA_TYPES } from '../../helpers/types';



const TemplateItem = () => {
    const { isReady, query: { id } } = useRouter();
    const [template, setTemplate] = useState({})

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);


    useEffect(() => {
        if (isReady) {
            const item = getItemById(DATA_TYPES.templates, id);
            console.log(item)
            setTemplate(item)
        }
    }, [isReady]);

    const { title, template_body, imgs, tags } = template



    return (
        <>

            {domLoaded &&

                <div className="pt-6">

                    {/* Image gallery */}

                    <div className=" sm:overflow-hidden sm:rounded-2xl">
                        <img
                            src={imgs[2]}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>


                    {/* Product info */}
                    <div className="mx-auto max-w-2xl pb-16 pt-10  lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">GRATIS</p>


                            <form className="mt-10">

                                <input className='border-2 border-black w-full rounded-lg p-1' placeholder='Tu email'></input>
                                <button
                                    type="submit"
                                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-terracotta px-8 py-3 text-base font-medium text-white hover:shadow-dark focus:outline-none transition-all"
                                >
                                    Suscribete
                                </button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900" dangerouslySetInnerHTML={{ __html: template_body }}></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default TemplateItem





