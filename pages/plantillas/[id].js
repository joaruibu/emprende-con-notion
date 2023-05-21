import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SliderImg from '../../components/SliderImg';

import { getIdByUrl, getItemById } from '../../helpers';
import { DATA_TYPE, FORM_TYPE } from '../../helpers/types';
import SubscriptionForm from '../../components/Form';



const TemplateItem = () => {
    const { isReady, query: { id: url } } = useRouter();

    const [template, setTemplate] = useState({})
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        if (isReady) {
            setDomLoaded(true);
            const item = getItemById(DATA_TYPE.templates, getIdByUrl(url));
            setTemplate(item)
        }
    }, [isReady]);

    const { title, template_body, imgs, tags, form } = template

    console.log(form)
    return (
        <>

            {domLoaded &&
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
                                type={FORM_TYPE.form}
                                titleForm={form.titleForm}
                                textButton={form.textButton}
                                code={form.code}
                                trakerId={form.trakerId}
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
            }

        </>
    )
}

export default TemplateItem





