import React, { useState } from "react";
import FormAccesContent from "../components/FormAccesoContentido";

const masterclass9ErroresNotionEstasDentro = () => {
  const [password, setPassword] = useState("");

  const PASWORDS = {
    PASWORD_1: "NoLaCaguesMásEnNotion",
  };

  return (
    <>
      {password !== PASWORDS.PASWORD_1 ? (
        <div className="h-[90vh]  w-full  flex flex-col justify-center">
          <div className=" border-2 px-8 bg-stone-50  border-stone-950 rounded-xl w-full my-8 ">
            <FormAccesContent
              title={
                "Acceso a la Masterclass: Los 9 Errores más Frecuentes en Notion."
              }
              correctPassword={PASWORDS}
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
              Masterclass Los 9 Errores más Frecuentes en Notion.
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-terracotta">
              <i>
                En esta página te doy muchos recursos, no solo el taller. Por
                favor,{" "}
                <b>
                  {" "}
                  lee hasta el final, hay información importante y no me
                  gustaría que te perdieras nada.{" "}
                </b>
              </i>
            </p>
            <br></br>
            <br></br>
            <br></br>
            <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - La Masterclass.
              </h2>
              <p>
                <i>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </i>
              </p>
              <br></br>

              <iframe
                src="https://drive.google.com/file/d/1bIPmkcpXn7sJCUh8fZlLzJ3DIYJmgtse/preview"
                width="100%"
                height="432px"
                allowFullScreen
              ></iframe>
            </div>
            <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Recomendaciones para ver la Masterclass.
              </h2>

              <ol className="px-8">
                <li>
                  Te recomiendo ver la masterclass por orden. La masterclass es
                  muy progresiva, es decir, si ves el Error 8 sin ver antes el
                  Error 1, no lo entenderás bien y no podrás solucionarlo. No
                  seas ansias y ve paso a paso.
                </li>

                <li>
                  Además te recomiendo ver los 24 minutos del tirón, y luego
                  luego ya que lo vuelvas a ver con tu Notion abierto y te vayas
                  parando en todos los errores más habituales que tú cometas
                  para poner en práctica la solución. Para el vídeo las veces
                  que necesites para aplicar lo que veas y tomar notas. Hay
                  mucha información.{" "}
                </li>
              </ol>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl">
                {" "}
                - Bonus de bienvenida - Plantilla de Notion para tomar apuntes.
              </h2>
              <p>
                He decidido regalarte este bonus de bienvenida para que puedas
                tomar apuntes de la masterclass fácilmente. Haz el favor, y toma
                las notas poniendo en práctica todo lo que te cuento en la
                masterclass.
              </p>
              <p className="mb-8">
                <i>
                  * Por cierto, si aún no sabes cómo duplicar plantillas,{" "}
                  <a
                    className="underline"
                    href="https://youtu.be/Y6rBNkV4rnY?si=KULTn9bAVqY3BwrO"
                    target="_blank"
                  >
                    te lo cuento aquí.
                  </a>{" "}
                </i>
              </p>

              <a
                href={
                  "https://www.notion.so/Apuntes-Masterclass-Los-9-Errores-m-s-Frecuentes-en-Notion-fa34271949ac4d8ab95d2527f0970f96?pvs=4"
                }
                target="_blank"
              >
                <button
                  className="rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold duration-150 hover:shadow-dark  "
                  type="submit"
                >
                  Clica aquí para acceder a la plantilla
                </button>
              </a>
            </div>

            <p className="pt-24 pl-8">Espero que la aproveches mucho.</p>
            <div className="pl-16">
              <p>Un abrazo, y que Notion te acompañe.</p>
              <p>Laura, de Emprende con Notion.</p>
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default masterclass9ErroresNotionEstasDentro;