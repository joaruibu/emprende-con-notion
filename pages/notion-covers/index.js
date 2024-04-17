import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import TitlePage from '../../components/TitlePage'
import { DATA_TYPE } from '../../helpers/types'
import { getAllItems } from '../../helpers/index';

const Index = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    const [items, setItems] = useState(getAllItems(DATA_TYPE.covers))


    useEffect(() => {
        setDomLoaded(true);
    }, []);


    const TITLE_INFO = {
        title: 'Covers de Notion',
        subtitle: 'Las mejores Covers de notion, copia y úslas en tus plantilas.'
    }

    return (
        <main>
            {
                domLoaded &&
                <>
                    <TitlePage subtitle={TITLE_INFO.subtitle}>{TITLE_INFO.title}</TitlePage>
                    <ItemList items={items} type={DATA_TYPE.covers} ></ItemList>
                </>
            }

        </main>
    )
}

export default Index


export async function getStaticProps() {
    return {
        props: {
            covers: getAllItems(DATA_TYPE.covers)
        }
    }
}