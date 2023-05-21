import React, { useEffect, useState } from 'react'
import { getAllItems } from '../helpers'
import { DATA_TYPE } from '../helpers/types'
import ItemBlog from './ItemBlog'
import ItemTemplate from './ItemTemplate'
import { getFilterTemplates } from '../helpers/index';



const ItemList = ({ items, type }) => {

    console.log(1212, items)

    return (
        <div className={`sm:columns-2 columns-1 gap-9  py-12 mx-auto  `}>

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
