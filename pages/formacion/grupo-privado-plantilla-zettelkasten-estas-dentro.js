import React, { useState } from "react";
import FormAccesContent from "../../components/FormAccesoContentido";

const GrupoPrivadoPlantillaZettelkastenEstasDentro = () => {
  const [password, setPassword] = useState("");
  const PASSWORDS = {
    PASSWORD_1: "NoSoyDori",
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
              title={"Acceso al grupo privado: Plantilla Zettelkasten."}
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
              Grupo privado: Plantilla Zettelkasten.
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Enlace a los directos.
              </h2>
              <p>
                Los directos serán los días 7, 14, 21, y 28 de febrero a las
                16:00 (Valencia).{" "}
                <b>
                  {" "}
                  Si no puedes asistir quedará grabado y se publicarán en esta
                  misma página.
                </b>
              </p>

              <p className="text-[10px]">
                <i>*El enlace estará disponible 48 horas antes del directo</i>
              </p>

              <a
                href={"https://meet.google.com/vog-gjzo-tbd?authuser=2"}
                target="_blank"
              >
                <button
                  disabled
                  className=" rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold opacity-30 "
                  type="submit"
                >
                  Clica para acceder al directo
                </button>
              </a>

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

            {/* <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Bonus de bienvenida.
              </h2>

              <p>
                Un error y un tip. Eso es lo que vas a encontrar en este bonus
                no solicitado de bienvenida. ¿Sobre? Sobre, cómo aplicando el
                método de productividad que te explico, aprenderás a fijar
                fechas límite de forma efectiva en tu calendario.
              </p>

              <div className="flex justify-center">
                <audio controls controlsList="nodownload">
                  <source
                    src="https://res.cloudinary.com/dh2hwwzpy/video/upload/v1730233460/ECN-workshop-notionCalendar-bonus-bienvenida_z5u3bw.mp3"
                    type="audio/mp3"
                  ></source>
                </audio>
              </div>
            </div>

            <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Recomendaciones antes del directo.
              </h2>

              <ol className="px-8">
                <li>
                  Ten en cuenta que para poder utilizar Notion Calendar
                  necesitas (necesariamente) una cuenta de gmail. Te explico,
                  Notion Calendar funciona a través de Google, y aunque en tu
                  día a día esto no te afectará (de hecho, te beneficia porque
                  podrás sincronizarte con tu Google Calendar, crear meets,
                  etc), es la razón por la que es necesario darse de alta con
                  una cuenta de Google. Por cierto, no hace falta que sea el
                  mismo email de registro que tengas en Notion (pueden ser
                  distintos).
                </li>

                <li>
                  Si aún no tienes una cuenta de Notion pero estabas pensando en
                  crearte una, es el momento. Sacarás mucho más partido del
                  workshop y entenderás mucho mejor las prácticas si antes has
                  estado trasteando con la aplicación. No necesitas un nivel
                  alto en absoluto, pero sí simplemente saber a lo que me
                  refiero cuando diga “bloque” o “base de datos”.{" "}
                </li>
              </ol>
            </div> */}

            <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Plantilla Zettelkasten.
              </h2>
              <p>
                No quiero que te agobies por una herramienta de la cual aún no
                tienes las instrucciones de uso. El día 7 veremos paso apaso
                cómo usarla. Te invito a que estos días la toques, a que rompas
                cosas. No pasa nada. Siempre podrás volver a descargártela en
                este botón:
              </p>

              <a
                href={"https://emprendecon.notion.site/plantilla-zettelkasten"}
                target="_blank"
              >
                <button
                  className="rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold duration-150 hover:shadow-dark  "
                  type="submit"
                >
                  Clica para acceder a plantilla
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
            </div>

            <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Soporte.
              </h2>
              <p>
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
              </p>
            </div>

            {/* <div className=" mb-24">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - ¿Cómo funcionan las dudas?
              </h2>

              <p>
                {" "}
                Como sabes, este workshop incluye resolución de dudas en el
                directo.
              </p>
              <p>
                {" "}
                La verdad es que en las resoluciones de dudas grupales siempre
                sale muchísimo valor extra al ya dado en el curso, así que…
              </p>
              <p>
                Así que, tienes 1 semana entera (hasta el viernes que viene, día
                15 a las 23:59h), para enviarme todas las dudas que tengas sobre
                el workshop, por email. Dos días después, el domingo 17,
                publicaré la resolución de dudas grupal y ya no responderé más. 
              </p>
              <p>
                {" "}
                Envíamelas por email a laura@emprendeconnotion.com El asunto
                deberá ser: DUDAS PARA ACLARARME EN CALENDAR. O sea, cuando las
                prepare filtraré por ese asunto y si no me aparece no
                contestaré.
              </p>
            </div> */}

            {/* <div className=" mb-24">
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
            </div> */}

            {/* <div className="mb-12">
                  <h2 className="text-2xl"> - Bonus exclusivo - II</h2>
                  <br></br>
                  <a
                    href={
                      "https://emprendecon.notion.site/Empieza-con-tus-libretas-digitales-masterclass-9-errores-9dbb7b2704f24209aabe2ede9b868143"
                    }
                    target="_blank"
                  >
                    <button
                      className="rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold duration-150 hover:shadow-dark  "
                      type="submit"
                    >
                      Clica para acceder a plantilla bonus
                    </button>
                  </a>
                </div> */}
            <br></br>
            <br></br>
            <br></br>

            {/* <div className="mb-12">
              <h2 className="text-2xl">
                {" "}
                - Bonus de bienvenida - Plantilla de Notion para tomar apuntes.
              </h2>
              <p>
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
              </a>
            </div> */}

            {/* <p className="pt-24 pl-8">Espero que la aproveches mucho.</p> */}
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

export default GrupoPrivadoPlantillaZettelkastenEstasDentro;
