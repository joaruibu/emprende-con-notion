import React, { useState } from "react";
import FormAccesContent from "../../components/FormAccesoContentido";
import CountdownWidget from "../../components/CountdownWidget";
import Desplegable from "../../components/Desplegable";

const GrupoPrivadoPlantillaZettelkastenEstasDentro = () => {
  const [password, setPassword] = useState("");
  const PASSWORDS = {
    PASSWORD_1: "33333",
    PASSWORD_2: "SoyMasListaQueAntes",
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
              title={"Acceso al curso: Tu segundo cerebro en Notion."}
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
              Curso Segundo Cerebro.<br></br>
              Trabaja a tu favor.
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <div className=" mb-24">
              <i className="font-bold text-xs">
                ***Por favor, lee hasta el final, hay información importante y
                no me gustaría que te perdieras nada.
              </i>
              <h2 className="mt-24 font-alternate text-3xl leading-[52px] mb-12">
                - Para acceder al próximo directo:
              </h2>
              <a href={""} target="_blank">
                <button
                  className=" opacity-20 rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold  "
                  type="submit"
                  disabled
                >
                  Clica para acceder al directo
                </button>
              </a>

              <h2 className="mt-24 font-alternate text-3xl leading-[52px]">
                - Instrucciones de uso.
              </h2>
              <ol className="mb-12">
                <li>
                  Sigue el curso <u>por orden. </u> (Esto es importante.) .
                </li>
                <li>
                  No te saltes ninguna lección. Te voy a dar recursos valiosos.
                </li>
                <li>
                  Haz las prácticas. No las saltes por pereza ni porque pienses
                  que son cosas que ya sabes. Todas tienen un propósito.
                </li>
                <li>Comprométete a acabarlo.</li>
              </ol>

              <p className="border-l-2 pl-4 flex flex-col gap-4 mb-12">
                <q>
                  Dicho esto, gracias por volver a confiar en mí —si ya has
                  hecho otro curso conmigo— o por confiar en mi trabajo por
                  primera vez. Escribo esto con mucho agradecimiento. Verás. Amo
                  enseñar lo que estudio para poder aprenderlo. Gracias por
                  ayudarme a materializar uno de mis sueños, que es enseñar
                  desarrollo personal.
                </q>
                <q>
                  Porque, no te equivoques, la productividad es una pata del
                  desarrollo personal, y te voy a enseñar a trabajarla con la
                  importancia y dedicación que merece en tu vida.{" "}
                </q>
                <q>
                  En este curso de Segundo Cerebro voy compartir contigo
                  herramientas que me parecen imprescindibles.
                </q>
                <q>
                  Quizás algunas, ya las conozcas. Si es el caso, te recomiendo
                  que las vuelvas a analizar porque, dependiendo del momento
                  vital en el que te encuentres, tu interpretación puede ser
                  totalmente diferente y traer nueva información que te sea útil
                  para el trabajo.
                </q>
                <q>Gracias por dejarme acompañarte. :)</q>
                <q>Laura.</q>
              </p>

              <Desplegable title="Módulo 0.  Primera parada.">
                <br></br>
                <a href={"Empieza aquí. "} target="_blank">
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Empieza aquí.
                  </button>
                </a>

                <p>
                  * Si aún no sabes duplicar plantillas, te lo explico en este
                  <a
                    href="https://youtu.be/Y6rBNkV4rnY?si=0oHMxHKf4NhGAIkp"
                    target="_blank"
                  >
                    {" "}
                    Short de menos de 1 minuto.
                  </a>
                </p>
              </Desplegable>

              <Desplegable title="Módulo 1. Qué me pasa doctor.">
                <CountdownWidget></CountdownWidget>
              </Desplegable>

              <Desplegable title="Módulo 2. Medisina.">
                <CountdownWidget></CountdownWidget>
              </Desplegable>
              <Desplegable title="Módulo 3. Cual zarapito trinador.">
                <p className="m-6">
                  Próximamente… Mira el apartado de planificación para agenciar
                  ya.
                </p>
              </Desplegable>
              <Desplegable title="Módulo 3. Cual zarapito trinador.">
                <p className="m-6">
                  Próximamente… Mira el apartado de planificación para agenciar
                  ya.
                </p>
              </Desplegable>
              <Desplegable title="Módulo 3. Cual zarapito trinador.">
                <p className="m-6">
                  Próximamente… Mira el apartado de planificación para agenciar
                  ya.
                </p>
              </Desplegable>
              <Desplegable title="Módulo 4. Onirograma y otros psicodélicos.">
                <p className="m-6">
                  Próximamente… Mira el apartado de planificación para agenciar
                  ya.
                </p>
              </Desplegable>
              <Desplegable title="Módulo 5. Coge tu agenda por los cuernos.">
                <p className="m-6">
                  Próximamente… Mira el apartado de planificación para agenciar
                  ya.
                </p>
              </Desplegable>
              <Desplegable title="Módulo 6. Y tú, ¿qué consumes?">
                <p className="m-6">
                  Próximamente… Mira el apartado de planificación para agenciar
                  ya.
                </p>
              </Desplegable>
              <Desplegable title="Bonus. Curso de Notion Exprés.">
                <p className="m-6">
                  Próximamente… Mira el apartado de planificación para agenciar
                  ya.
                </p>
              </Desplegable>

              <p className="pt-8">
                P.D.: Cualquier duda, sugerencia, problema, saludos, me escribes
                a laura@emprendeconnotion.com.{" "}
              </p>
              {/* <h2 className="font-alternate text-2xl leading-[52px]">
                - Directo.
              </h2> */}
              {/* 
              <p>
                <i>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </i>
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
              */}
            </div>

            <div className=" mb-24">
              {/*   <h2 className="font-alternate text-2xl leading-[52px]">
                - Bonus de bienvenida.
              </h2> */}

              {/* <p>
                Haz el favor, y toma las notas poniendo en práctica todo lo que
                te cuento en la masterclass.
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
                  Clica para acceder a plantilla apuntes
                </button>
              </a> */}
            </div>
            {/* 
            <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Tu Segundo cerebro.
              </h2>
              <p>
                No quiero que te agobies por una herramienta de la cual aún no
                tienes las instrucciones de uso. El día X veremos paso apaso
                cómo usarla. Te invito a que estos días la toques, a que rompas
                cosas. No pasa nada. Siempre podrás volver a descargártela en
                este botón:
              </p>

              <a href={""} target="_blank">
                <button
                  className="rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold duration-150 hover:shadow-dark  "
                  type="submit"
                >
                  Clica para acceder al sistema
                </button>
              </a>
              <br></br>
              <br></br>
              <br></br>
              <p>
                ¿Aún no sabes duplicar plantillas de Notion? Te lo explico en{" "}
                <a href="https://youtube.com/shorts/Y6rBNkV4rnY?feature=share">
                  este vídeo de menos de 1 minuto.
                </a>
              </p>
            </div> */}

            <div className=" mb-24">
              {/*   <h2 className="font-alternate text-2xl leading-[52px]">
                - Soporte.
              </h2> */}
              {/* <p>
                Tienes soporte por email hasta el día 28 de febrero a las
                23:59h.
              </p>

              <p>
                Escríbeme a{" "}
                <a href="mailto:laura@emprendeconnotion.com">
                  laura@emprendeconnotion.com.
                </a>{" "}
                con el asunto: VOY A DEJAR DE SER DORI. Así podré filtrar los
                emails que me mandes y priorizarlos durante este mes. Responderé
                en máximo 48 horas.
              </p>
              <p>
                Recuerda que los directos también son para que tener soporte, de
                hecho, un soporte aún más personalizado donde podrás compartirme
                pantalla.
              </p> */}
            </div>

            <br></br>
            <br></br>
            <br></br>
            {/* 
            <p className="pt-24 pl-8">Espero que la aproveches mucho.</p>
            <div className="pl-16">
              <p>Un abrazo, y que Notion te acompañe.</p>
              <p>Laura, de Emprende con Notion.</p>
            </div> */}
          </section>
        </article>
      )}
    </>
  );
};

export default GrupoPrivadoPlantillaZettelkastenEstasDentro;
