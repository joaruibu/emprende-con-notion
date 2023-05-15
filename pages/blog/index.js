import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import TitlePage from '../../components/TitlePage'
import { getAllItems, getFilterByTags } from '../../helpers'
import { DATA_TYPE } from '../../helpers/types'
import FiltersByTags from '../../components/FiltersByTags';

const index = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [items, setItems] = useState(getAllItems(DATA_TYPE.posts))
    const [tags, setTags] = useState([])


    useEffect(() => {
        setDomLoaded(true);
    }, []);

    useEffect(() => {
        getFilterByTags(tags)
        console.log(8887, items)
    }, [tags]);

    const TITLE_INFO = {
        title: 'Blog para frikis de Notion',
        subtitle: 'El mejor blog sobre Notion en Español, solo para frikis'
    }

    return (
        <>
            {
                domLoaded &&
                <>
                    <TitlePage subtitle={TITLE_INFO.subtitle}>{TITLE_INFO.title}</TitlePage>
                    <FiltersByTags type={DATA_TYPE.posts} tags={tags} setItems={setItems} setTags={setTags}></FiltersByTags>
                    <ItemList items={items} type={DATA_TYPE.posts} ></ItemList>
                </>
            }
        </>
    )
}

export default index


