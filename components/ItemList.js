import React, { useState } from 'react'
import { getAllItems } from '../helpers'
import { DATA_TYPES } from '../helpers/types'
import ItemBlog from './ItemBlog'
import ItemTemplate from './ItemTemplate'



const ItemList = ({ type }) => {
    const [items, setItems] = useState(getAllItems(type))
    console.log(9999, type)

    console.log(items)
    return (
        <div className={`${type === DATA_TYPES.posts ? 'grid grid-col-1' : ' masonry sm:masonry-sm md:masonry-md mt-12'}   `}>
            {
                items.map((item, index) => {
                    return (type === DATA_TYPES.templates) ?
                        <ItemTemplate key={index} item={item}></ItemTemplate>
                        :
                        <ItemBlog key={index} item={item}></ItemBlog>
                })
            }

        </div>

    )
}

export default ItemList
