import React from 'react'

const CoverPaidPageSection = ({ cover }) => {
    const { title, covers_body, isFree, price, imgs, form, stripeButton } = cover

    return (


        <div className='flex sm:flex-row flex-col sm:space-x-8 mt-6'>

            <div className='block sm:hidden border-2 border-stone-950 p-2 rounded-xl mb-6'>

                <ul className='ml-5 mb-4'>
                    <li className='p-1 font-semibold text-sm'>20 covers exclusivas.</li>
                    <li className='p-1 font-semibold text-sm'>Diseñadas para Notion.</li>
                    <li className='p-1 font-semibold text-sm'>Úsalas en todas las plantillas que quieras.</li>
                    <li className='p-1 font-semibold text-sm'>Dale un toque de diseño a tus plantillas.</li>
                    <li className='p-1 font-semibold text-sm'>Para siempre.</li>
                    <li className='p-1 font-semibold text-sm'>{price}€. Sí, muy barato.</li>
                </ul>


                <button className={` rounded-md w-full border border-stone-950 bg-yellow-300  text-sm font-sub font-semibold duration-150 hover:shadow-dark `} >
                    <a href={stripeButton.url} className='py-2.5 block text-stone-950 hover:text-stone-950'>{stripeButton.textButton}</a>
                </button>

            </div>

            {/* Body description */}
            <div className='sm:basis-4/4'>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                    <p className='list-disc list-inside' dangerouslySetInnerHTML={{ __html: covers_body }}></p>
                </div>
                <div className="space-y-6">
                    <p className='list-disc list-inside' dangerouslySetInnerHTML={{ __html: covers_body }}></p>
                </div>
                <div className="space-y-6">
                    <p className='list-disc list-inside' dangerouslySetInnerHTML={{ __html: covers_body }}></p>
                </div>
            </div>

            <div className='hidden sm:block border-2 border-stone-950 basis-3/4 p-2 rounded-xl h-fit sticky top-24'>

                <ul className='ml-5 mb-4'>
                    <li className='p-1 font-semibold text-sm'>20 covers exclusivas.</li>
                    <li className='p-1 font-semibold text-sm'>Diseñadas para Notion.</li>
                    <li className='p-1 font-semibold text-sm'>Úsalas en todas las plantillas que quieras.</li>
                    <li className='p-1 font-semibold text-sm'>Dale un toque de diseño a tus plantillas.</li>
                    <li className='p-1 font-semibold text-sm'>Para siempre.</li>
                    <li className='p-1 font-semibold text-sm'>{price}€. Sí, muy barato.</li>
                </ul>


                <button className={` rounded-md w-full border border-stone-950 bg-yellow-300  text-sm font-sub font-semibold duration-150 hover:shadow-dark `} >
                    <a href={stripeButton.url} className='py-2.5 block text-stone-950 hover:text-stone-950'>{stripeButton.textButton}
                    </a></button>

            </div>

            <div className='block sm:hidden border-2 border-stone-950 p-2 rounded-xl mb-6'>

                <ul className='ml-5 mb-4'>
                    <li className='p-1 font-semibold text-sm'>20 covers exclusivas.</li>
                    <li className='p-1 font-semibold text-sm'>Diseñadas para Notion.</li>
                    <li className='p-1 font-semibold text-sm'>Úsalas en todas las plantillas que quieras.</li>
                    <li className='p-1 font-semibold text-sm'>Dale un toque de diseño a tus plantillas.</li>
                    <li className='p-1 font-semibold text-sm'>Para siempre.</li>
                    <li className='p-1 font-semibold text-sm'>{price}€. Sí, muy barato.</li>
                </ul>


                <button className={` rounded-md w-full border border-stone-950 bg-yellow-300  text-sm font-sub font-semibold duration-150 hover:shadow-dark `} >
                    <a href={stripeButton.url} className='py-2.5 block text-stone-950 hover:text-stone-950'>{stripeButton.textButton}</a>
                </button>

            </div>
        </div>
    )
}

export default CoverPaidPageSection