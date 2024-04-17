import React from 'react'

const TemplatePaidPageSection = ({ template }) => {
    const { template_body, stripeButton, price } = template

    return (
        <>
            {template_body.map((text, index) => {
                return <>
                    <button key={index} className={`my-6 rounded-md w-full border border-stone-950 bg-yellow-300  text-lg font-sub font-semibold duration-150 hover:shadow-dark `} >
                        <a href={stripeButton.url} className='py-3 block text-stone-950 hover:text-stone-950'>{stripeButton.textButton} por {price}€</a>
                    </button>

                    <p key={index} className='list-disc list-inside' dangerouslySetInnerHTML={{ __html: text }}></p>
                </>
            })}

            <button className={`my-6 rounded-md w-full border border-stone-950 bg-yellow-300  text-lg font-sub font-semibold duration-150 hover:shadow-dark `} >
                <a href={stripeButton.url} className='py-3 block text-stone-950 hover:text-stone-950'>{stripeButton.textButton} por {price}€</a>
            </button>
        </>

    )
}

export default TemplatePaidPageSection