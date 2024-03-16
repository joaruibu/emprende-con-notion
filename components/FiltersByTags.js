
import { useState, useEffect } from 'react';

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
    }, [type, setTags])


    const onClickTag = (index) => {
        const newTags = [...tags];
        newTags[index].selected = !newTags[index].selected;
        setTags(newTags)
        setItems(getFilterByTags(tags, type))
    }

    return (
        < div className="relative">
            < div className='sm:hidden h-11 w-6 top-[2px] right-[2px]  bg-gradient-to-r absolute from-gray-100/5 to-gray-800/25 z-10' ></ div>
            <div className='border-2 relative border-stone-950 bg-white rounded-md p-2 mt-2 min-w-full flex-none overflow-x-scroll'>
                {domLoaded &&
                    <div className='flex gap-2'>
                        {
                            tags.map((tag, index) => {
                                return <h4 key={index} onClick={() => onClickTag(index)} className={`inline-flex items-center rounded px-4 py-1 text-xs font-medium border-2 border-stone-200 hover:border-2 hover:border-stone-950 cursor-pointer transition-all ${tag.selected && ' border-2 border-stone-800 '}`}>
                                    {tag.name}
                                </h4>
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default FiltersByTags