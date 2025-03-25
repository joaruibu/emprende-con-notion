import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import SearchBar from "../../components/SearchBar";
import TitlePage from "../../components/TitlePage";
import { DATA_TYPE } from "../../helpers/types";
import { getAllItems } from "../../helpers/index";

const Index = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [items, setItems] = useState(getAllItems(DATA_TYPE.courses));

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const TITLE_INFO = {
    title: "Cursos",
    subtitle: "",
  };

  return (
    <main>
      {domLoaded && (
        <>
          <TitlePage subtitle={TITLE_INFO.subtitle}>
            {TITLE_INFO.title}
          </TitlePage>
          <ItemList items={items} type={DATA_TYPE.courses}></ItemList>
        </>
      )}
    </main>
  );
};

export default Index;

export async function getStaticProps() {
  return {
    props: {
      templates: getAllItems(DATA_TYPE.courses),
    },
  };
}
