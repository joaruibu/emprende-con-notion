
import { useState, useEffect } from 'react';
import templates from '../data/templates';
import { getFilterByTags } from '../helpers';
import { TAG_TEMPLATES_TYPE, DATA_TYPE, TAG_POSTS_TYPE } from '../helpers/types';


const FiltersByTags = ({ tags, setTags, setItems, type }) => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
        const arrayFromTags = Object.values(type === DATA_TYPE.templates ? TAG_TEMPLATES_TYPE : TAG_POSTS_TYPE).map((item) => {
            return { name: item, selected: false }
        })
        setTags(arrayFromTags)
        console.log(55554, arrayFromTags)
    }, [type, setTags])


    const onClickTag = (index) => {
        console.log(2345, type)
        const newTags = [...tags];
        newTags[index].selected = !newTags[index].selected;
        setTags(newTags)
        setItems(getFilterByTags(tags, type))
    }

    console.log(3232323, type, tags)

    return (
        <div className='border-2 border-stone-950 rounded-md p-2 mt-2 min-w-full flex-none overflow-x-scroll'>
            {/* <p>{type === DATA_TYPE.posts ? 'Filtra las entradas:' : 'Filtra tus plantillas:'}</p> */}
            {domLoaded &&
                <div className='flex gap-2'>
                    {
                        tags.map((tag, index) => {
                            return <h4 key={index} onClick={() => onClickTag(index)} className={`inline-flex items-center rounded px-4 py-1 text-xs font-medium border border-stone-50 hover:border hover:border-stone-950 cursor-pointer transition-all ${tag.selected && ' border-stone-900 '}`}>
                                {tag.name}
                            </h4>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default FiltersByTags