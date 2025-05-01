import React, { useState } from "react";
import FormAccesContent from "../../components/FormAccesoContentido";
import CountdownWidget from "../../components/CountdownWidget";

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
              Curso: Tu segundo cerebro en Notion.
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <div className=" mb-24">
              <h3 className="mb-12">
                Próximamente encontrarás aquí toda la información del
                curso.{" "}
              </h3>
              <p>
                Como has comprado en preventa esta página está por ahora
                desactivada. No te preocupes, te avisaré por email cuando el
                contenido esté visible.{" "}
              </p>
              <p>
                Por ahora, apunta en tu agenda nuestra primera sesión el domingo
                18 de mayo a las 17.00 h (Valencia).{" "}
              </p>
              <CountdownWidget />
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
