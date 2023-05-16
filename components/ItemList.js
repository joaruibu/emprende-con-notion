import React, { useEffect, useState } from 'react'
import { getAllItems } from '../helpers'
import { DATA_TYPE } from '../helpers/types'
import ItemBlog from './ItemBlog'
import ItemTemplate from './ItemTemplate'
import { getFilterTemplates } from '../helpers/index';



const ItemList = ({ items, type }) => {

    console.log(1212, items)

    return (
        <div className={`masonry sm:masonry-sm md:masonry-md mt-12  `}>

            {
                items.map((item, index) => {
                    return (type === DATA_TYPE.templates) ?
                        <ItemTemplate key={index} item={item}></ItemTemplate>
                        :
                        <ItemBlog key={index} item={item}></ItemBlog>
                })
            }

        </div>

    )
}

export default ItemList
