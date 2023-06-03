import SliderImg from '../../components/SliderImg';

import { getAllItems, getIdByUrl, getItemById, getUrltTitle } from '../../helpers';
import { DATA_TYPE } from '../../helpers/types';
import SubscriptionForm from '../../components/Form';



const TemplateItem = ({ template }) => {

    const { title, template_body, imgs, tags, form } = template

    return (
        <>

            <div className='h-6'></div>
            <div className="border-2 border-stone-950 bg-stone-50 p-4 rounded-xl ">

                {/* Image gallery */}

                {/* <div className=" sm:overflow-hidden sm:rounded-xl">
                        <img
                        src={imgs[2]}
                        className="h-full w-full object-cover object-center"
                        />
                    </div> */}
                <SliderImg imgs={imgs}></SliderImg>

                {/* Product info */}
                <div className=" pb-16 pt-10  ">
                    <h1 className="">{title}</h1>


                    <SubscriptionForm
                        type={form.type}
                        titleForm={form.titleForm}
                        textButton={form.textButton}
                        code={form.code}
                        trackerId={form.trackerId}
                    ></SubscriptionForm>

                    {/* Description and details */}
                    <div>
                        <h3 className="sr-only">Description</h3>
                        <div className="space-y-6">
                            <p dangerouslySetInnerHTML={{ __html: template_body }}></p>
                        </div>
                    </div>
                    <p>esto es clarotio<b>y esyo negrita</b></p>

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