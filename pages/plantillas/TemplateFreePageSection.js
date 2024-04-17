import React from 'react'
import SubscriptionForm from '../../components/Form';


const TemplateFreePageSection = ({ template }) => {

    const { template_body, form } = template

    return (
        <>

            <SubscriptionForm
                titleForm={form.titleForm}
                textButton={form.textButton}
                label={form.label}
                id={form.id}
                name={form.name}
            />


            {/* Body description */}
            <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                    <p className='list-disc list-inside' dangerouslySetInnerHTML={{ __html: template_body }}></p>
                </div>
            </div>

            <SubscriptionForm
                titleForm={form.titleForm}
                textButton={form.textButton}
                label={form.label}
                id={form.id}
                name={form.name}
            />
        </>
    )
}

export default TemplateFreePageSection