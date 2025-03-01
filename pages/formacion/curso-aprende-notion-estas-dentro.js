import React, { useState } from "react";
import FormAccesContent from "../../components/FormAccesoContentido";
import Desplegable from "../../components/Desplegable";

const cursoNotion = () => {
  const [password, setPassword] = useState("");
  const PASSWORDS = {
    PASSWORD_1: "notion",
  };

  const isCorrectPassword = (password) => {
    return !Object.values(PASSWORDS).includes(password);
  };

  return (
    <>
      {!isCorrectPassword(password) ? (
        <div className="h-[90vh]  w-full  flex flex-col justify-center">
          <div className=" border-2 px-8 bg-stone-50  border-stone-950 rounded-xl w-full my-8 ">
            <FormAccesContent
              title={"Acceso al curso de NOTION."}
              correctPassword={PASSWORDS}
              setPassword={setPassword}
              password={password}
            />
          </div>
        </div>
      ) : (
        <article className="  bg-stone-50 p-8 border-2  border-stone-950 rounded-xl my-8">
          <div className=" sm:overflow-hidden sm:rounded-xl"></div>
          <section className="pt-10 ">
            <h1 className="mb-4 font-alternate text-4xl leading-[52px] text-center">
              CURSO DE NOTION.
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <Desplegable title="Cápitulo 1: ¿Qué es Notion?">
              <Desplegable
                type="secondary"
                title="Cápitulo 1.1: ¿Qué es Notion?"
              >
                <p>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </p>
              </Desplegable>
              <Desplegable
                type="secondary"
                title="Cápitulo 1.1: ¿Qué es Notion?"
              >
                <p>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </p>
              </Desplegable>
              <Desplegable
                type="secondary"
                title="Cápitulo 1.1: ¿Qué es Notion?"
              >
                <p>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </p>
              </Desplegable>
              {/* <div>
                <p>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </p>
                <br></br>

                <iframe
                  src="https://drive.google.com/file/d/10zmLJePRGWWevkAf03X3poKsYr8GXM4P/preview"
                  width="100%"
                  height="432px"
                  allowFullScreen
                ></iframe>
                <h4 className="my-8">
                  <a
                    href={
                      "https://emprendecon.notion.site/ndice-de-contenidos-Workshop-implementa-Notion-Calendar-eb2354ecdd444580b6c9969132a28985"
                    }
                    target="_blank"
                    className=" block"
                  >
                    {" "}
                    Ver índice del taller
                  </a>
                </h4>
              </div> */}
            </Desplegable>
            <Desplegable title="Cápitulo 2: Duplicar y personalizar plantillas">
              <div>
                <p>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </p>
                <br></br>

                <iframe
                  src="https://drive.google.com/file/d/10zmLJePRGWWevkAf03X3poKsYr8GXM4P/preview"
                  width="100%"
                  height="432px"
                  allowFullScreen
                ></iframe>
                <h4 className="my-8">
                  <a
                    href={
                      "https://emprendecon.notion.site/ndice-de-contenidos-Workshop-implementa-Notion-Calendar-eb2354ecdd444580b6c9969132a28985"
                    }
                    target="_blank"
                    className=" block"
                  >
                    {" "}
                    Ver índice del taller
                  </a>
                </h4>
              </div>
            </Desplegable>
            <Desplegable title="Cápitulo 3: Bloques y bases de datos">
              <div>
                <p>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </p>
                <br></br>

                <iframe
                  src="https://drive.google.com/file/d/10zmLJePRGWWevkAf03X3poKsYr8GXM4P/preview"
                  width="100%"
                  height="432px"
                  allowFullScreen
                ></iframe>
                <h4 className="my-8">
                  <a
                    href={
                      "https://emprendecon.notion.site/ndice-de-contenidos-Workshop-implementa-Notion-Calendar-eb2354ecdd444580b6c9969132a28985"
                    }
                    target="_blank"
                    className=" block"
                  >
                    {" "}
                    Ver índice del taller
                  </a>
                </h4>
              </div>
            </Desplegable>
            <Desplegable title="Cápitulo 4: Listas, divisores y columnas">
              <div>
                <p>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </p>
                <br></br>

                <iframe
                  src="https://drive.google.com/file/d/10zmLJePRGWWevkAf03X3poKsYr8GXM4P/preview"
                  width="100%"
                  height="432px"
                  allowFullScreen
                ></iframe>
                <h4 className="my-8">
                  <a
                    href={
                      "https://emprendecon.notion.site/ndice-de-contenidos-Workshop-implementa-Notion-Calendar-eb2354ecdd444580b6c9969132a28985"
                    }
                    target="_blank"
                    className=" block"
                  >
                    {" "}
                    Ver índice del taller
                  </a>
                </h4>
              </div>
            </Desplegable>
            <Desplegable title="Cápitulo 5: Imágenes y relaciones">
              <div>
                <p>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </p>
                <br></br>

                <iframe
                  src="https://drive.google.com/file/d/10zmLJePRGWWevkAf03X3poKsYr8GXM4P/preview"
                  width="100%"
                  height="432px"
                  allowFullScreen
                ></iframe>
                <h4 className="my-8">
                  <a
                    href={
                      "https://emprendecon.notion.site/ndice-de-contenidos-Workshop-implementa-Notion-Calendar-eb2354ecdd444580b6c9969132a28985"
                    }
                    target="_blank"
                    className=" block"
                  >
                    {" "}
                    Ver índice del taller
                  </a>
                </h4>
              </div>
            </Desplegable>
            <Desplegable title="Cápitulo 6: Notion nivel pro">
              <div>
                <p>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </p>
                <br></br>

                <iframe
                  src="https://drive.google.com/file/d/10zmLJePRGWWevkAf03X3poKsYr8GXM4P/preview"
                  width="100%"
                  height="432px"
                  allowFullScreen
                ></iframe>
                <h4 className="my-8">
                  <a
                    href={
                      "https://emprendecon.notion.site/ndice-de-contenidos-Workshop-implementa-Notion-Calendar-eb2354ecdd444580b6c9969132a28985"
                    }
                    target="_blank"
                    className=" block"
                  >
                    {" "}
                    Ver índice del taller
                  </a>
                </h4>
              </div>
            </Desplegable>

            <p className="pt-24 pb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="pl-16 ">
              <p>Un abrazo, y que Notion te acompañe.</p>
              <p>Laura, de Emprende con Notion.</p>
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default cursoNotion;
