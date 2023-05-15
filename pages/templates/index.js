import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import SearchBar from '../../components/SearchBar'
import TitlePage from '../../components/TitlePage'
import { DATA_TYPE } from '../../helpers/types'
import { getAllItems, getFilterByTags, getFilterTemplates } from '../../helpers/index';
import FiltersByTags from '../../components/FiltersByTags'

const index = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [searchValue, setSearchValue] = useState('')
    const [items, setItems] = useState(getAllItems(DATA_TYPE.templates))
    const [tags, setTags] = useState([])


    useEffect(() => {
        setDomLoaded(true);
    }, []);

    useEffect(() => {
        setItems(getFilterTemplates(searchValue))
    }, [searchValue]);

    useEffect(() => {
        getFilterByTags(tags)
    }, [tags]);


    const TITLE_INFO = {
        title: 'Plantillas gratis',
        subtitle: 'Todos los meses, nuevas plantillas sobre Notion'
    }
    return (
        <>
            {
                domLoaded &&
                <>
                    <TitlePage subtitle={TITLE_INFO.subtitle}>{TITLE_INFO.title}</TitlePage>
                    {/* <SearchBar setSearchValue={setSearchValue} searchValue={searchValue}></SearchBar> */}
                    <FiltersByTags type={DATA_TYPE.templates} tags={tags} setItems={setItems} setTags={setTags}></FiltersByTags>
                    <ItemList items={items} type={DATA_TYPE.templates} searchValue={searchValue} ></ItemList>
                </>
            }

        </>
    )
}

export default index


