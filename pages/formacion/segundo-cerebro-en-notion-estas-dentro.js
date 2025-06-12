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
              <a href={" https://meet.google.com/fkv-rfpf-ivn"} target="_blank">
                <button
                  className=" rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold  "
                  type="submit"
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

              <h2 className="mt-24 font-alternate text-3xl leading-[52px]">
                - El curso.
              </h2>

              <Desplegable title="Módulo 0.  Primera parada.">
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/segundo-cerebro-modulo-0"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Módulo 0. Empieza aquí.
                  </button>
                </a>

                <p>
                  * Si aún no sabes duplicar plantillas, te lo explico en este
                  <a
                    className="underline"
                    href="https://youtu.be/Y6rBNkV4rnY?si=0oHMxHKf4NhGAIkp"
                    target="_blank"
                  >
                    {" "}
                    Short de menos de 1 minuto.
                  </a>
                </p>
              </Desplegable>

              <Desplegable title="Módulo 1. Qué me pasa doctor.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1BbZzaOQsz_ctVkj3lj5fYpktV448Lj5N/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Acción:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/segundo-cerebro-modulo-1?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Ejercicios Módulo 1
                  </button>
                </a>
              </Desplegable>

              <Desplegable title="Módulo 2. Medisina.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1f_0iUS1aTNXHurg1_A2dhKnZHK4m3Lou/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Acción:</h4>
                <br></br>
                <a
                  href={"https://emprendecon.notion.site/segundo-cerebro?pvs=4"}
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Duplica tu segundo cerebro
                  </button>
                </a>
                <a
                  href={
                    "https://emprendecon.notion.site/segundo-cerebro-con-ejemplos?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Visualiza la Plantilla Segundo Cerebro con ejemplos
                  </button>
                </a>
                <a
                  href={
                    "https://emprendecon.notion.site/segundo-cerebro-modulo-2?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Ejercicios Módulo 2
                  </button>
                </a>
              </Desplegable>
              <Desplegable title="Módulo 3. Cual zarapito trinador.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1kn3mvzBknQTxF0RJynp1UW5m521uXuWB/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Acción:</h4>
                <br></br>
                <a
                  href={"https://emprendecon.notion.site/modulo-3?pvs=4"}
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Ejercicios Módulo 3
                  </button>
                </a>
              </Desplegable>
              <Desplegable title="Módulo 4. Onirograma y otros psicodélicos.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1pY0kQTd_Lw6u6r0_Y0OYEaYcuu1vEq-c/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Acción:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/207868683e7880a0b450e1a8d7c9e31f?pvs=105"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Participa en el Juego Perverso
                  </button>
                </a>
                <br></br>
                <a
                  href={
                    "https://www.notion.so/1f9868683e7880bc9b2ced791410c5ad?pvs=25"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Ejercicios Módulo 4
                  </button>
                </a>

                <h4>- Visualiza tu meta:</h4>
                <br></br>

                <audio controls controlsList="nodownload" className="w-full">
                  <source
                    src="https://res.cloudinary.com/dwsa2s0pn/video/upload/v1749024298/emprende-con-notion/courses/second-brain/curso_Segundo_Cerebro_visualizacion_metas.mp3"
                    type="audio/mp3"
                  ></source>
                </audio>
                <p className="text-xs my-4">
                  *Visualización en parte basada en Crea Futuro de Ana Albiol
                  (que si no conocéis, os recomiendo seguir).{" "}
                </p>
              </Desplegable>
              <Desplegable title="Módulo 5. Coge tu agenda por los cuernos.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1Fhy3smjnSBex6iBGMv9J-gcl8i9hpC7k/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Acción:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/segundo-cerebro-modulo-5?source=copy_link"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Ejercicios Módulo 5
                  </button>
                </a>
              </Desplegable>

              <Desplegable title="Bonus. Curso de Notion Exprés.">
                <p className="m-6">
                  Quedará colgado antes de la sesión de dudas en directo del
                  domingo 29 de junio. Como siempre, te avisaré por email. Si
                  necesitas soporte antes ya sabes que puedes escribirme por
                  email (más abajo explico cómo enviar dudas).
                </p>
              </Desplegable>

              <div className="mb-12">
                <h2 className="mt-24 font-alternate text-3xl leading-[52px]">
                  - Planificación.
                </h2>

                <p className="mb-6">
                  Clica en los enlaces siguientes para agenciar automáticamente
                  los eventos en tu calendario:{" "}
                </p>

                <p>
                  <b> – Hoy, día 16 de mayo: </b>recibes el módulo 0. Tienes dos
                  días para completarlo.
                </p>
                <p>
                  <a
                    className="underline"
                    href="https://drive.usercontent.google.com/u/0/uc?id=1MMgsBRmo4xRt2kBH8n9Bqj-KcpbdSJhQ&export=download"
                    target="_blank"
                  >
                    <b> – Domingo 18 mayo a las 17.00: </b>{" "}
                  </a>{" "}
                  módulos 1 y 2. Recibes la plantilla. Te doy una semana
                  para identificar.
                </p>
                <p>
                  <a
                    className="underline"
                    href="https://drive.usercontent.google.com/u/0/uc?id=1lxVnGXKvjwHgMbPYGr8Gz38Vp8rdScy4&export=download"
                    target="_blank"
                  >
                    <b> – Domingos 25 mayo a las 17.00: </b>{" "}
                  </a>{" "}
                  módulo 3 + Bonus Workshop. Te doy una semana para migrar y
                  poner en <i> práctica</i>.
                </p>
                <p>
                  <a
                    className="underline"
                    href="https://drive.usercontent.google.com/u/0/uc?id=1ruYkdwuMa4lzikaOWND_sq9rg-jrMNc0&export=download"
                    target="_blank"
                  >
                    <b> – Domingo 1 junio a las 17.00: </b>{" "}
                  </a>{" "}
                  módulo 4. Recomiendo especialmente asistencia presencial. Será
                  intenso, bonito y participativo. Te doy una semana para{" "}
                  <i> profundizar</i>. Lo vas a necesitar.
                </p>

                <p>
                  <a
                    className="underline"
                    href="https://drive.usercontent.google.com/u/0/uc?id=10I7VEw_pwMwQ2HDasSzA75z4Oe8Q0HJu&export=download"
                    target="_blank"
                  >
                    <b>– Domingo 8 junio a las 17.00: </b>{" "}
                  </a>{" "}
                  módulo 5. Mucha acción. Será larga. Haremos descanso para
                  hacer un pis o lo que sea que tú hagas en los descansos.
                </p>

                <p>
                  <a
                    className="underline"
                    href="https://drive.usercontent.google.com/u/0/uc?id=134WU7ZcLr83YHmdAllgQF5RvkeSTEbmy&export=download"
                    target="_blank"
                  >
                    <b>– Domingo 29 de junio a las 17.00: </b>{" "}
                  </a>{" "}
                  sesión de <i>dudas</i> grupal.
                </p>

                <i className=" text-xs block mb-6 mx-6">
                  *** Nota 1: Si no puedes asistir a algún directo, igualmente
                  planifica en tu agenda ver la grabación. No lo dejes pasar o
                  perderás el ritmo. Lo que no está en la agenda no existe.
                </i>
                <i className=" text-xs block mb-6 mx-6">
                  *** Nota 2: Si has comprado el curso con la planificación ya
                  empezada (o sea, entre el 18 de mayo y el 8 de junio) te
                  recomiendo en cualquier caso asistir a los directos. Es una
                  oportunidad para recibir soporte en directo que más adelante
                  no tendrás. Esto es independiente para que cuando puedas te
                  planifiques para ver el curso por orden, completo, desde el
                  principio.
                </i>
              </div>

              <div className="mb-12">
                <h2 className="mt-24 font-alternate text-3xl leading-[52px]">
                  - Resolución de dudas.
                </h2>
                <p>
                  Recuerda que el curso incluye soporte por email, puedes
                  escribir a laura@emprendeconnotion.com. El asunto debe ser:
                  ¿QUÉ ME PASA DOCTOR?
                </p>
                <p>
                  Es importante que tenga ese asunto: filtraré en mi gestor los
                  emails con ese asunto y si no me aparece no le daré prioridad.
                </p>
              </div>

              <hr></hr>

              <p className="border-l-2  pl-4 flex flex-col gap-4 my-12">
                <q>
                  Gracias por volver a confiar en mí —si ya has hecho otro curso
                  conmigo— o por confiar en mi trabajo por primera vez. Escribo
                  esto con mucho agradecimiento. Verás. Amo enseñar lo que
                  estudio para poder aprenderlo. Gracias por ayudarme a
                  materializar uno de mis sueños, que es enseñar desarrollo
                  personal.
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

              <p className="pt-8">P.D.: Trabaja a tu favor.</p>
              <p className="">Nos amo,</p>
              <p className="pt-8">Laura de Arquer.</p>
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
