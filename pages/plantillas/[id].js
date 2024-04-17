import SliderImg from '../../components/SliderImg';
import TemplateFreePageSection from '../../components/TemplateFreePageSection';
import TemplatePaidPageSection from '../../components/TemplatePaidPageSection';

import { getAllItems, getIdByUrl, getItemById, getUrltTitle } from '../../helpers';
import { DATA_TYPE } from '../../helpers/types';




const TemplateItem = ({ template }) => {

    const { title, imgs, isFree } = template

    return (
        <>

            <div className='h-6'></div>
            <div className="border-2 border-stone-950 bg-stone-50 p-4 rounded-xl ">

                {/* Image gallery */}
                <SliderImg imgs={imgs}></SliderImg>

                {/* Product info */}
                <div className=" pt-10  ">
                    <h1 className="">{title}</h1>

                    {isFree ?
                        <TemplateFreePageSection template={template}></TemplateFreePageSection>
                        :
                        <TemplatePaidPageSection template={template}></TemplatePaidPageSection>
                    }
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