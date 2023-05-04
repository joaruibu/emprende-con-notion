import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import TitlePage from '../../components/TitlePage'
import { DATA_TYPES } from '../../helpers/types'

const index = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);


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
                    <ItemList type={DATA_TYPES.posts}></ItemList>
                </>
            }

        </>
    )
}

export default index


