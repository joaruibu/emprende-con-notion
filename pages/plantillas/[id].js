import SliderImg from '../../components/SliderImg';

import { getAllItems, getIdByUrl, getItemById, getUrltTitle } from '../../helpers';
import { DATA_TYPE } from '../../helpers/types';
import SubscriptionForm from '../../components/Form';



const TemplateItem = ({ template }) => {

    const { title, template_body, imgs, form } = template

    return (
        <>

            <div className='h-6'></div>
            <div className="border-2 border-stone-950 bg-stone-50 p-4 rounded-xl ">

                {/* Image gallery */}
                <SliderImg imgs={imgs}></SliderImg>

                {/* Product info */}
                <div className=" pt-10  ">
                    <h1 className="">{title}</h1>

                    <SubscriptionForm
                        titleForm={form.titleForm}
                        textButton={form.textButton}
                        id={form.id}
                        name={form.name} />

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
                        id={form.id}
                        name={form.name} />
                </div>
            </div>
        </>
    )
}

export default TemplateItem

export async function getStaticProps({ params }) {

    return {
        props: {
            template: getItemById(DATA_TYPE.templates, getIdByUrl(params.id))
        }
    }
}

export async function getStaticPaths() {
    const allTemplates = getAllItems(DATA_TYPE.templates)

    const paths = allTemplates.map(template => {
        return {
            params: { id: `${getUrltTitle(template.title)}-${template.id}` }
        }
    })

    return {
        paths,
        fallback: false
    }

}