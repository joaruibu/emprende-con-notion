import React, { useState } from "react";
import FormAccesContent from "../components/FormAccesoContentido";

const TallerEmpezarEnNotionEsFacilEstasDentro = () => {
  const [password, setPassword] = useState("");

  const PASWORDS = {
    PASWORD_1: "EmpecemosConBuenPi3",
  };

  return (
    <>
      {password !== PASWORDS.PASWORD_1 ? (
        <div className="h-[90vh]  w-full  flex flex-col justify-center">
          <div className=" border-2 px-8 bg-stone-50  border-stone-950 rounded-xl w-full my-8 ">
            <FormAccesContent
              title={
                " Acceso al Taller en Directo: Empezar en Notion es así de Fácil."
              }
              correctPassword={PASWORDS}
              setPassword={setPassword}
              password={password}
            />
          </div>
        </div>
      ) : (
        <article className=" bg-stone-50 p-8 border-2  border-stone-950 rounded-xl my-8">
          <div className=" sm:overflow-hidden sm:rounded-xl"></div>
          <section className="pt-10 ">
            <h1 className="mb-4 font-alternate text-4xl leading-[52px] text-center">
              Taller en Directo: Empezar en Notion es así de Fácil.
            </h1>
            <br></br>
            <br></br>
            <br></br>

            <p className="italic text-terracotta">
              ** En esta página te doy muchos recursos, no solo el taller. Por
              favor,{" "}
              <b>
                {" "}
                lee hasta el final, hay información importante y no me gustaría
                que te perdieras nada.
              </b>{" "}
            </p>
            <br></br>
            <br></br>
            <br></br>

            <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - El Taller.
              </h2>

              <div class="relative w-full max-w-2xl mx-auto aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1D4T4eNeP4YjpWkFJUmb1j4rrX0PRaqoZ/preview"
                  width="100%"
                  class="absolute inset-0 w-full h-full"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>

              <h4 className="my-8">
                <a
                  href={
                    "https://emprendecon.notion.site/Guion-del-taller-117868683e7880c78feae4e25815a15e?pvs=4"
                  }
                  target="_blank"
                  className=" block"
                >
                  {" "}
                  Ver índice del taller
                </a>
              </h4>

              <div className="mb-24 mt-24">
                <h2 className="text-2xl mb-4">
                  {" "}
                  - Plantilla molona del taller.
                </h2>

                <a
                  href={
                    "https://emprendecon.notion.site/Plantilla-Empezar-en-Notion-es-as-de-f-cil-cc283a0f6ef64ac88410c7e586dfcfb7"
                  }
                  target="_blank"
                  className=" block"
                >
                  <button
                    className="rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold duration-150 hover:shadow-dark  "
                    type="submit"
                  >
                    Plantilla del Taller
                  </button>
                </a>
              </div>
            </div>

            <div className="mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Bonus - Video privado.{" "}
              </h2>
              <p className="">
                He decidido regalarte este bonus de bienvenida, pero no quiero
                que pienses que tiene poco valor por el hecho de que sea un
                regalo.
              </p>
              <p>
                Si aplicas lo que vas a ver en este bonus para ti (uses Notion
                para proyectos personales, emprendimeintos o trabajes por cuenta
                ajena), amortizarás con creces el precio completo de este
                taller. Míralo tantas veces como necesites.
              </p>
              <br></br>

              <div class="relative w-full max-w-2xl mx-auto aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1CE9WZLpDY2BFQWD9itqzXtnFcNlCJQpS/preview"
                  width="100%"
                  class="absolute inset-0 w-full h-full"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="mb-24">
              <h2 className="text-2xl">
                {" "}
                - Plantilla para tomar apuntes del Taller.
              </h2>
              <p>
                Duplica en tu cuenta de Notion esta plantilla para poder tomar
                apuntes durante del taller de forma ordenada, directamente en tu
                cuenta de Notion.
              </p>
              <a
                href={
                  "https://emprendecon.notion.site/Apuntes-Taller-Empezar-en-Notion-es-as-de-f-cil-59cc711371cd4f3b81987d909977cf80"
                }
                target="_blank"
                className=" block"
              >
                <button
                  className="rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold duration-150 hover:shadow-dark  "
                  type="submit"
                >
                  Plantilla de apuntes
                </button>
              </a>
            </div>

            <div className="mb-24">
              <h2 className="text-2xl">
                {" "}
                - Si no sabes duplicar una plantilla en Notion...
              </h2>
              <p>
                Si aún no sabes cómo duplicar una plantilla en tu cuenta de
                Notion, te he preparado este vídeo de 1 min.
              </p>
              <a
                href={"https://youtu.be/Y6rBNkV4rnY"}
                target="_blank"
                className=" block"
              >
                <button
                  className="rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold duration-150 hover:shadow-dark  "
                  type="submit"
                >
                  Ver video
                </button>
              </a>
            </div>
            <div className="mb-24">
              <h2 className="text-2xl">- Recomendaciones para el directo.</h2>
              <br></br>

              <ol className="px-8">
                <li className="pb-12">
                  Créate con antelación una cuenta de Notion si es que no la
                  tienes ya creada, puedes hacerlo desde{" "}
                  <a
                    href="https://www.notion.so/signup"
                    className="underline"
                    target="_blank"
                  >
                    aquí
                  </a>
                  . Es importante que crees una cuenta individual (no para
                  equipos) si quieres mantener el plan gratuito de Notion. Si le
                  has dado sin querer a crear una cuenta para equipos y tienes
                  un límite de mil bloques, don’t panic,{" "}
                  <a
                    className="underline"
                    href="https://emprendeconnotion.com/blog/problema-frecuente:-tengo-límite-de-1000-bloques-en-notion-y-no-sé-por-qué-6"
                    target="_blank"
                  >
                    aquí te explico cómo solucionarlo.{" "}
                  </a>
                  <br></br>
                  Dicho esto, quiero que por lo menos hayas visto Notion por
                  dentro alguna vez. La razón es que como mejor se aprende es
                  haciendo. <br></br> <b> Y yo quiero que aprendas.</b>{" "}
                  <br></br> Si te explican algo de nuevas y ni siquiera sabes la
                  forma que tiene, es más difícil interiorizar conceptos que si
                  ya en tu cabeza te has formado una imagen mental.
                </li>

                <li className="pb-12">
                  Durante el directo no vale que estés en modo pasivo, no sirve,
                  voy a dar mucha mucha información. El taller está pensado para
                  que cuando acabe entiendas perfectamente cómo usar Notion,
                  crear tus propios sistemas de organización o saber adaptar
                  plantillas de otros que compres/descargues. Si realmente
                  quieres cumplir este objetivo, te necesito atenta, si no,
                  bueno, siempre podrás volver a verlo grabado. Pero tú y yo
                  sabemos que no es la misma energía que ver un directo.
                </li>
                <li className="pb-12">
                  Prepárate para tomar apuntes en el taller. Puedes{" "}
                  <b>duplicar la plantilla para tomar apuntes </b>que te he
                  dejado más arriba. Y si aún no te aclaras, pues la app de
                  notas o papel y boli, qué remedio. Si durante el taller te
                  entra una duda, apúntala. A todos nos ha pasado que nos asalta
                  una pregunta pero a la hora ya se ha olvidado. Tienes la
                  oportunidad de resolver tus dudas conmigo, no la
                  desaproveches.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-2xl">- Dudas del directo.</h2>
              <br></br>

              <div class="relative w-full max-w-2xl mx-auto aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1cG0_cvO6qukiz3nDRm03xhS3z93qACBS/preview"
                  width="100%"
                  class="absolute inset-0 w-full h-full"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <p className="pt-24 pl-8">Espero que lo aproveches mucho.</p>
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

export default TallerEmpezarEnNotionEsFacilEstasDentro;
