import DownloadCoverItem from "../../components/DownloadCoverItem";
import {
  getAllItems,
  getIdByUrl,
  getItemById,
  getUrltTitle,
} from "../../helpers";
import { DATA_TYPE } from "../../helpers/types";
import FormDescargaCovers from "../../components/FormDescargaCovers";
import { useState, useEffect } from "react";

const CoverItemDownloadPage = ({ cover }) => {
  const { title, downloadCovers } = cover;
  const [formPassword, setFormPassword] = useState("");
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [showCovers, setShowCovers] = useState(false);
  const [formCoverConfig, setFormCoverConfig] = useState(null);

  useEffect(() => {
    if (cover) {
      const newFormCoverConfig = {
        cover: cover,
        formPassword: formPassword,
        setFormPassword: setFormPassword,
        isErrorPassword: isErrorPassword,
        setIsErrorPassword: setIsErrorPassword,
        setShowCovers: setShowCovers,
      };
      setFormCoverConfig(newFormCoverConfig);
      console.log(4343434, newFormCoverConfig);
    }
  }, [cover, formPassword, isErrorPassword]);

  return (
    <>
      <main className="pt-6 px-4">
        {!showCovers && formCoverConfig && (
          <FormDescargaCovers
            formCoverConfig={formCoverConfig}
          ></FormDescargaCovers>
        )}

        {showCovers && (
          <>
            <h1 className="mb-6">
              <strong>{title}</strong>
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <div className=" mb-6 sm:mb-9  border-2 border-stone-950 bg-stone-50 overflow-hidden rounded-xl ">
                <div class="relative w-full max-w-2xl mx-auto aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/nsoRfPXFhMs?si=-_YjJaBHanKT8Acl"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="col-span-2 p-4 border-2 border-stone-950 bg-stone-50 overflow-hidden rounded-xl mb-6 sm:mb-9  ">
                <h2 className="">Aprende a usar tus covers</h2>
                <ul className="pl-4 pr-40">
                  <li className="pb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.{" "}
                  </li>
                  <li className="pb-2">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum.
                  </li>
                  <li className="pb-2">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </li>
                </ul>
              </div>

              {downloadCovers.map((cover, index) => (
                <DownloadCoverItem
                  cover={cover}
                  index={index}
                ></DownloadCoverItem>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default CoverItemDownloadPage;

export async function getStaticProps({ params }) {
  console.log({ params });
  return {
    props: {
      cover: getItemById(DATA_TYPE.covers, getIdByUrl(params.id)),
    },
  };
}

export async function getStaticPaths() {
  const allCovers = getAllItems(DATA_TYPE.covers);

  const paths = allCovers.map((cover) => {
    return {
      params: { id: `${getUrltTitle(cover.title)}-${cover.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
