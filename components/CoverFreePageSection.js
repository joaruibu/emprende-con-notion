import React from 'react';
import SubscriptionForm from './Form';


const CoverFreePageSection = ({ cover }) => {
    const { covers_body, form } = cover
    console.log(cover)


    return (

        <>
            <SubscriptionForm
                titleForm={form.titleForm}
                textButton={form.textButton}
                id={form.id}
                name={form.name} />

            {/* Body description */}
            <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                    <p className='list-disc list-inside' dangerouslySetInnerHTML={{ __html: covers_body }}></p>
                </div>
            </div>

            <SubscriptionForm
                titleForm={form.titleForm}
                textButton={form.textButton}
                id={form.id}
                name={form.name} />
        </>

    )
}

export default CoverFreePageSection