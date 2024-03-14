import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import TitlePage from '../../components/TitlePage'
import { getAllItems, getFilterByTags } from '../../helpers'
import { DATA_TYPE } from '../../helpers/types'
import FiltersByTags from '../../components/FiltersByTags';

const Index = ({ posts }) => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [items, setItems] = useState(posts)
    const [tags, setTags] = useState([])


    useEffect(() => {
        setDomLoaded(true);
    }, []);

    useEffect(() => {
        getFilterByTags(tags)
    }, [tags]);

    const TITLE_INFO = {
        title: 'Blog',
        subtitle: 'Blog de Emprende con Notion. Te doy recursos y tipos para ayudarte a implementar Notion en tu día a día.'
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

export default Index

export async function getStaticProps() {
    return {
        props: {
            posts: getAllItems(DATA_TYPE.posts)
        }
    }
}