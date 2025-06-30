import React, { useState } from "react";
import FormAccesContent from "../components/FormAccesoContentido";

const masterclass9ErroresNotionEstasDentro = () => {
  const [password, setPassword] = useState("");
  console.log(1111, password);
  const PASSWORDS = {
    PASSWORD_1: "NoLaCaguesMásEnNotion", // bonus I y II y bienvenida
    PASSWORD_2: "VamosALlevarnosBien", // solo bonus II y bievenida
    PASSWORD_3: "SeñoraDamePaciencia", // solo Bonus Bienvenida
  };

  const isCorrectPassword = (password) => {
    return !Object.values(PASSWORDS).includes(password);
  };

  return (
    <>
      {isCorrectPassword(password) ? (
        <div className="h-[90vh]  w-full  flex flex-col justify-center">
          <div className=" border-2 px-8 bg-stone-50  border-stone-950 rounded-xl w-full my-8 ">
            <FormAccesContent
              title={
                "Acceso a la Masterclass: Los 9 Errores más Frecuentes en Notion."
              }
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
              Masterclass Los 9 Errores más Frecuentes en Notion.
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-terracotta">
              <i>
                *** En esta página te doy varios recursos, no solo la
                masterclass. Por favor,{" "}
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
                - Recomendaciones para ver la Masterclass.
              </h2>

              <ol className="px-8">
                <li>
                  Te recomiendo ver la masterclass por orden. Todas mis
                  formaciones son muy progresivas, es decir, si ves el Error 8
                  sin ver antes el Error 1, es posible que no lo entiendas bien.
                  No seas ansias y ve paso a paso.
                </li>

                <li>
                  Además te recomiendo ver los 24 minutos del tirón, y luego
                  luego ya lo vuelves a ver con tu plantilla de apuntes abierta
                  (tienes el bonus abajo) parando el vídeo las veces que lo
                  necesites para aplicar lo que veas y tomar notas.{" "}
                </li>

                <li>
                  Por cierto, si aún no sabes cómo duplicar plantillas,{" "}
                  <a
                    className="underline"
                    href="https://youtu.be/Y6rBNkV4rnY?si=KULTn9bAVqY3BwrO"
                    target="_blank"
                  >
                    te lo cuento aquí.
                  </a>{" "}
                </li>
              </ol>
            </div>
            <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - La Masterclass:
              </h2>

              <br></br>

              <div class="relative w-full max-w-2xl mx-auto aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1bIPmkcpXn7sJCUh8fZlLzJ3DIYJmgtse/preview"
                  width="100%"
                  class="absolute inset-0 w-full h-full"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <br></br>

            <div className=" ">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Bonus de la Masterclass:
              </h2>
            </div>
            <br></br>

            <div className="mb-12">
              <h2 className="text-1xl">
                {" "}
                * Bonus plantilla para tomar apuntes + marcas de tiempo.
              </h2>
              <p>
                Haz el favor, y toma las notas poniendo en práctica todo lo que
                te cuento en la masterclass.
              </p>

              <a
                href={
                  "https://www.notion.so/Apuntes-Masterclass-Los-9-Errores-m-s-Frecuentes-en-Notion-fa34271949ac4d8ab95d2527f0970f96?pvs=4"
                }
                target="_blank"
              >
                <button
                  className="rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-alternate text-zinc-900 font-semibold duration-150 hover:shadow-dark  "
                  type="submit"
                >
                  Clica para acceder a plantilla apuntes
                </button>
              </a>
              <br></br>
            </div>

            {password === PASSWORDS.PASSWORD_1 && (
              <>
                <div className="mb-12">
                  <h2 className="text-1xl"> * Bonus error nº10</h2>
                  <p>
                    No quiero que pienses que este bonus tiene poco valor por el
                    hecho de que sea un regalo. Es más, ten claro que lo que vas
                    a ver es una masterclass en sí misma.
                  </p>

                  <div class="relative w-full max-w-2xl mx-auto aspect-video">
                    <iframe
                      src="https://drive.google.com/file/d/18DqMApCzTg1-SmkGsNIJWDIh5owv2A-H/preview"
                      width="100%"
                      class="absolute inset-0 w-full h-full"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <br></br>
              </>
            )}

            {(password === PASSWORDS.PASSWORD_1 ||
              password === PASSWORDS.PASSWORD_2) && (
              <>
                <div className="mb-12">
                  <h2 className="text-1xl">
                    {" "}
                    * Bonus plantilla organizador de notas.{" "}
                  </h2>
                  <br></br>
                  <a
                    href={
                      "https://emprendecon.notion.site/Empieza-con-tus-libretas-digitales-masterclass-9-errores-9dbb7b2704f24209aabe2ede9b868143"
                    }
                    target="_blank"
                  >
                    <button
                      className="rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-alternate text-zinc-900 font-semibold duration-150 hover:shadow-dark  "
                      type="submit"
                    >
                      Clica para acceder a plantilla bonus
                    </button>
                  </a>
                </div>
              </>
            )}
            <br></br>
            <br></br>
            <br></br>
            <p className="border-l-2  pl-4 flex flex-col gap-4 my-12">
              Hola! <br></br>
              <br></br>Te escribo esto para darte las gracias personalmente por
              ser cliente de esta Masterclass. <br></br> <br></br>Verás.{" "}
              <br></br> <br></br>Esta fue la primera formación online grabada
              que lancé, por eso le tengo especial cariño. Y en buena parte la
              he podido grabar gracias a todos los que me seguís en la
              newsletter y en YouTube desde hace años y que habéis compartido
              conmigo dónde os atascábais, lo que os ayudaba de mis plantillas,
              lo que os gustaba o no de Notion,... <br></br> <br></br>Y si estás
              aquí, es que tú en mayor o menor medida eres una de esas personas.
              Así que, simplemente, gracias, me hace muchísima ilusión
              compartirlo contigo. <br></br>
              <br></br> Si estás empezando en Notion, estoy segura de que estos
              tips te vendrán fenomenal. :) <br></br>
              <br></br> Un abrazo, y que Notion te acompañe.<br></br>
              <br></br>Laura de Arquer
            </p>
          </section>
        </article>
      )}
    </>
  );
};

export default masterclass9ErroresNotionEstasDentro;
