import React, { useState } from "react";
import FormAccesContent from "../../components/FormAccesoContentido";

const tallerSistemaGestionTiempoEstasDentro = () => {
  const [password, setPassword] = useState("");
  console.log(1111, password);
  const PASSWORDS = {
    PASSWORD_1: "MotivaciónQueTeQuieroYo",
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
              title={"Acceso al Taller: El Sistema De Gestión De Tu Tiempo."}
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
              Taller: El Sistema De Gestión De Tu Tiempo.
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

            <div className=" mb-40">
              <h2 className="font-alternate text-2xl leading-[36px]">
                - Taller: Sistema gestión de tu tiempo.
              </h2>
              <p>
                <i>
                  - Primer día del directo: sábado día 14 de diciembre a las
                  16:00h (Valencia). <br></br>- Segundo directo: domingo 15 de
                  diciembre a las 16:00h (Valencia).
                </i>
              </p>

              <a href={"https://meet.google.com/dsg-cdfe-ohf"} target="_blank">
                <button
                  className=" rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold duration-150 hover:shadow-dark "
                  type="submit"
                >
                  Clica para acceder al directo del DOMIGO 15
                </button>
              </a>

              {/* <p>
                <i>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </i>
              </p> */}
              <br></br>
            </div>

            <div className=" mb-40">
              <h2 className="font-alternate text-2xl leading-[36px]">
                - Grabación Taller: Sistema gestión de tu tiempo - SÁBADO.
              </h2>
              <iframe
                src="https://drive.google.com/file/d/1-Tygz_rUmVmkm4XcFB1wOXgLr0rKNHLu/preview"
                width="100%"
                height="432px"
                allowFullScreen
              ></iframe>
              {/* <h4 className="my-8">
                <a
                  href={
                    "https://emprendecon.notion.site/ndice-de-contenidos-workshop-gesti-n-de-calendarios-fe913358e1bc42c9a593005224c2838a?pvs=4"
                  }
                  target="_blank"
                  className=" block"
                >
                  {" "}
                  Ver índice del taller
                </a>
              </h4> */}
              <i>
                * Te publicaré el índice del taller cuando estén las dos
                grabaciones
              </i>
            </div>

            <div className=" mb-40">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Bonus de bienvenida.
              </h2>

              <p>
                Si no tienes una rutina diaria. Si cada día empiezas de cero,
                improvisando, apagando incendios, sin un pasos constantes
                claros. Y al final del día, te preguntas por qué no avanzas en
                lo que realmente importa.{" "}
                <b>
                  Si quieres saber cómo generar un sistema de gestión de tiempo
                  diario sin caer en tópicos como “date recompensas”. Escucha
                  este bonus de bienvenida no solicitado.
                </b>
              </p>

              <div className="flex justify-center mt-4">
                <audio controls controlsList="nodownload">
                  <source
                    src="https://res.cloudinary.com/dh2hwwzpy/video/upload/v1731710726/ECN-taller-gesti%C3%B3n-tiempo-bonus-h%C3%A1bitos-conscientes_wylcmq.mp3"
                    type="audio/mp3"
                  ></source>
                </audio>
              </div>
            </div>

            <div className=" mb-40">
              <h2 className="font-alternate text-2xl leading-[36px]">
                - Bonus Workshop: aprende a gestionar tu calendario e implementa
                (o no) Notion Calendar.
              </h2>
              {/* <p>
                <i>
                  El directo es el viernes 8 de Noviembre a las 16:00 (Madrid,
                  España). Cuando falten 24 horas para el taller activaremos
                  este botón con un enlace al directo. Te enviaré un
                  recordatorio por email :)
                </i>
              </p>

              <a
                href={"https://meet.google.com/vog-gjzo-tbd?authuser=2"}
                target="_blank"
              >
                <button
                  className=" rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold  "
                  type="submit"
                >
                  Clica para acceder al directo
                </button>
              </a> */}
              {/* <p>
                <i>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </i>
              </p> */}
              <br></br>

              <iframe
                src="https://drive.google.com/file/d/1VYKfAdQLuokoF-eXxTC56QHLXntutXWW/preview"
                width="100%"
                height="432px"
                allowFullScreen
              ></iframe>
              <h4 className="my-8">
                <a
                  href={
                    "https://emprendecon.notion.site/ndice-de-contenidos-workshop-gesti-n-de-calendarios-fe913358e1bc42c9a593005224c2838a?pvs=4"
                  }
                  target="_blank"
                  className=" block"
                >
                  {" "}
                  Ver índice del Workshop
                </a>
              </h4>
            </div>

            <div className=" mb-40">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - Recomendaciones antes del directo.
              </h2>

              <ol className="px-8">
                <li>
                  Créate con antelación una cuenta de Notion (si es que no la
                  tienes ya creada), puedes hacerlo desde
                  <a href={"https://www.notion.so/signup"} target="_blank">
                     aquí.
                  </a>{" "}
                  Sacarás mucho más partido al taller si antes has estado
                  trasteando con la app. No necesitas un nivel alto en absoluto,
                  pero sí saber a lo que me refiero cuando diga “bloque” o “base
                  de datos”.
                </li>

                <li>
                  Durante el directo, los dos días, no vale que estés en modo
                  pasivo, no sirve, voy a dar mucha información. El taller está
                  pensado para que cuando acabe entiendas perfectamente cómo
                  crear tu propio sistema de gestión de tiempo usando las
                  plantillas de Notion que te voy a compartir y Notion Calendar.
                  Eso sí, los contenidos también te servirán para aplicar esto
                  en otras aplicaciones.{" "}
                  <b>
                    Notion es solo una herramienta, las herramientas pueden
                    cambiar. Pero el sistema que tú te crees podrás usarlo para
                    siempre.
                  </b>
                </li>
                <li>
                  Prepárate para tomar apuntes en el taller. Si durante el
                  taller te entra una duda, apúntala.{" "}
                  <b>
                    {" "}
                    A todos nos ha pasado que nos asalta una pregunta pero a la
                    hora ya se ha olvidado. Tienes la oportunidad de resolver
                    tus dudas conmigo, no la desaproveches.
                  </b>
                </li>
                <li>
                  Si no puedes asistir, no pasa nada. Pero te recomiendo fijarte
                  otra fecha alternativa en tu propio calendario para ver la
                  grabación. ¿Por qué? Porque la energía que se genera al hacer
                  un directo tienes que conseguirla tú fijándote una fecha con
                  la misma responsabilidad con la que hubieras asistido al
                  directo.{" "}
                </li>
              </ol>
            </div>

            <div className=" mb-40">
              <h2 className="font-alternate text-2xl leading-[36px]">
                - Plantillas de gestión de tiempo y fichaje de horas pro.
              </h2>

              <a
                href={
                  "https://emprendecon.notion.site/plantilla-time-tracker-super-pro"
                }
                target="_blank"
              >
                <button
                  className=" rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold  "
                  type="submit"
                >
                  Clica para duplicar plantilla
                </button>
              </a>
              {/* <p>
                <i>
                  * Nota importante: esta masterclass contiene mucha
                  información, muchos detalles. Puedes volver a verla tantas
                  veces como quieras, te recomiendo que lo hagas.
                </i>
              </p> */}
              <br></br>
            </div>

            <div className=" mb-40">
              <h2 className="font-alternate text-2xl leading-[52px]">
                - ¿Cómo funcionan las dudas?
              </h2>

              <p>
                Como sabes, este workshop incluye resolución de dudas grupal, es
                decir, no solo verás tus dudas resueltas, sino las de todas las
                participantes.
              </p>
              <ol className="px-8">
                <li>
                  Tendrás 1 mes entero (desde el día 15 de diciembre, hasta el
                  día 15 de enero a las 23:59h), para enviarme todas las dudas
                  que tengas sobre el taller, por email. Así tienes tiempo más
                  que de sobra para ver las grabaciones en el caso de que no
                  puedas acudir al directo.{" "}
                </li>
                <li>
                  El domingo 19, publicaré la resolución de dudas grupal en esta
                  misma página y ya no responderé más.
                </li>
                <li>
                  Envíamelas por email a laura@emprendeconnotion.com. El asunto
                  deberá ser: DUDAS PARA NO DIVAGAR. O sea, cuando las prepare
                  filtraré por ese asunto y si no me aparece no contestaré.
                </li>
              </ol>
            </div>

            {/* <div className=" mb-40">
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
                </div>
                <br></br>
                <br></br>
                <br></br> */}

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
              <p>¡Nos vemos pronto!</p>
              <p>Un abrazo, y que Notion te acompañe.</p>
              <p>Laura, de Emprende con Notion.</p>
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default tallerSistemaGestionTiempoEstasDentro;
