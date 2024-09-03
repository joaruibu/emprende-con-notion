import React, { useState } from "react";
import FormAccesContent from "../components/FormAccesoContentido";

const TallerEmpezarEnNotionEsFacilEstasDentro = () => {
  const [password, setPassword] = useState("");

  const PASWORDS = {
    PASWORD_1: "EmpecemosConBuenPie",
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
              <p className="pb-0">
                El directo es el día 6 de Octubre a las 18:00 (Madrid, España).
              </p>
              <p>
                Cuando llegue la hora del directo, clica en el botón de abajo
                para acceder.
              </p>
              <br></br>
              <p>
                <i>
                  * Una vez termine el directo, colgaré aquí la grabación para
                  que puedas volver a verla tantas veces como quieras.
                </i>
              </p>
              <br></br>

              <a href={""} className="pointer-events-none" target="_blank">
                <button
                  className="rounded-md w-full border border-stone-950 bg-yellow-300 p-4 text-xl font-sub text-zinc-900 font-semibold duration-150 hover:shadow-dark  "
                  type="submit"
                >
                  Acceder al directo
                </button>
              </a>
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
              TODO: Add link to the video
              <iframe
                src="https://drive.google.com/file/d/1O7yy0XXGoqNcedAvUPuT-K_499hP-lE5/preview"
                width="100%"
                height="432px"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mb-24">
              <h2 className="text-2xl">
                {" "}
                - Plantilla de Notion Empezar en Notion es Así de Fácil.
              </h2>
              <p>
                <i>
                  * Importante: Te la enseñaré durante el directo, y estará
                  disponible en cuanto termine el directo. En cualquier caso, te
                  avisaré por email cuando puedas acceder a la plantilla.
                </i>
              </p>
              <p>
                <i>
                  Esta plantilla tendrá un nivel acorde al que vas a recibir en
                  el taller, ese es el motivo de que la no comparta contigo
                  hasta que el directo haya finalizado. Me interesa que
                  aprendas, no que te frustres con una plantilla que seguramente
                  no sepas personalizar aún.
                </i>
              </p>
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
                  Créate una página en blanco en Notion para anotar dudas (si
                  aún no sabes, pues la app de notas o papel y boli, qué
                  remedio), y si durante el taller te entra una duda, apúntala.
                  A todos nos ha pasado que nos asalta una pregunta pero a la
                  hora ya se ha olvidado. Tienes la oportunidad de resolver tus
                  dudas conmigo, no la desaproveches.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-2xl">- Sesión de dudas post-directo.</h2>
              <br></br>
              <h2 className="text-center">Cómo enviarme tus dudas.</h2>

              <br></br>

              <ul className="px-8">
                <li className="pb-12">
                  <b>
                    Podrás enviarme tus dudas por email hasta el día 20 de
                    octubre a las 23:59 (Madrid, España).{" "}
                  </b>
                  Pasado ese día, ya no responderé dudas.
                </li>
                <li className="pb-12">
                  <b>
                    El ASUNTO del email deberá ser: DUDAS PARA NO MANDAR A LA
                    MIERDA NOTION.
                  </b>
                  Es decir, filtraré los emails con ese asunto, si no has puesto
                  ese asunto, tu duda no me aparecerá y no la podré responder.
                </li>
                <li className="pb-12">
                  Responderé dudas que tengan que ver con el taller. Me explico.
                  Si me preguntas cómo hacer una fórmula advance para contar los
                  pelos de tus pies… Pues no.
                </li>

                <li className="pb-12">
                  Una semana después, el día 27 de octubre 2024, publicaré las
                  respuestas aquí. O sea,{" "}
                  <b>
                    {" "}
                    no solo contestaré a tu duda, si no que podrás ver las
                    preguntas de otras personas y que seguramente también te
                    ayuden.
                  </b>{" "}
                  Como siempre, te avisaré por email.{" "}
                </li>
              </ul>
            </div>

            <p className="pt-24 pl-8">
              Espero que lo aproveches mucho. Nos vemos el 6 a las 6.
            </p>
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
