import React, { useState } from "react";
import FormAccesContent from "../../components/FormAccesoContentido";
import Desplegable from "../../components/Desplegable";

const cursoNotion = () => {
  const [password, setPassword] = useState("");
  const PASSWORDS = {
    PASSWORD_1: "QueNoEraTanDifícil",
    PASSWORD_2: "33333",
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
            <h1 className="mb-4 font-alternate text-5xl leading-[52px] text-center">
              CURSO DE NOTION.
            </h1>
            <h2 className="text-center">Empezar en Notion es así de fácil.</h2>
            <br></br>
            <br></br>
            <br></br>
            <i className="font-bold text-xs">
              ***Por favor, lee hasta el final, hay información importante y no
              me gustaría que te perdieras nada.
            </i>

            <h2 className="mt-24 font-alternate text-3xl leading-[52px]">
              - Instrucciones de uso.
            </h2>
            <ol className="">
              <li>Mira el curso por orden.</li>
              <li>No te saltes ninguna lección, el curso es muy progresivo.</li>
              <li>
                Haz las prácticas. De nuevo, es muy progresivo y si no
                practicas, por básicas que te parezcan las primeras, no sabrás
                hacer las siguientes.{" "}
              </li>
              <li>Comprométete a acabarlo. </li>
            </ol>

            <p>
              Dicho esto, gracias por estar aquí. Espero de verdad que disfrutes
              del curso y del proceso tan bonito que es crearte tu propio hogar
              digital. :){" "}
            </p>

            <h2 className="mt-24 font-alternate text-3xl leading-[52px]">
              - El curso.
            </h2>

            <Desplegable title="Módulo: Empieza aquí.">
              <Desplegable
                type="secondary"
                title="Lección 0. Bienvenida e instrucciones para el curso."
              >
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1JLICMSSbkTIfLL00Sox1dwNe3zdHF5HL/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </Desplegable>

              <Desplegable type="secondary" title="Lección 1. Crear un cuenta.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1v996DjuZOcLY_oqhUD0FG8Pg4yxORg83/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={"https://affiliate.notion.so/emprendeconnotion"}
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Crear aquí una nueva cuenta
                  </button>
                </a>
              </Desplegable>
              <br></br>
            </Desplegable>
            <Desplegable title="Módulo: Crea planificadores.">
              <Desplegable type="secondary" title="Lección 2. Bloques básicos.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1iMn_thDuRM_vzVcN6W13tb9LcPV-eFOQ/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/practica-leccion-bloques-basicos?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución a la práctica
                  </button>
                </a>
              </Desplegable>

              <Desplegable
                type="secondary"
                title="Lección 3. Edicion de texto."
              >
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1Xnsec13aR5n7-38TIarXDEzD9r3h_R96/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/practica-leccion-edicion-de-texto?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución a la práctica
                  </button>
                </a>
              </Desplegable>

              <Desplegable type="secondary" title="Lección 4. Tablas básicas.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1xhr2K0yxfmiCYc2-ih4UJY1BiSiCFhVV/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/practica-leccion-tablas-basicas?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución a la práctica
                  </button>
                </a>
              </Desplegable>
              <br></br>
            </Desplegable>
            <Desplegable title="Módulo: Interfaz.">
              <Desplegable type="secondary" title="Lección 5. Interfaz.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1M3OCOvmqZanQqLxugrpZLcAuXehzAQy2/preview "
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a href={"https://faces.notion.com/"} target="_blank">
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Crea tu propio avatar
                  </button>
                </a>
              </Desplegable>
              <Desplegable
                type="secondary"
                title="Lección 6. Duplicar plantillas y dónde encontrarlas."
              >
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1s4R_7nE6HaixQCIAaSiU6QWmd_rdUpcA/preview "
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={"https://emprendeconnotion.com/plantillas"}
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Más plantillas de Notion
                  </button>
                </a>
              </Desplegable>
              <br></br>
            </Desplegable>

            <Desplegable title="Módulo: Crea tu propia web en Notion">
              <Desplegable type="secondary" title="Lección 7. Muñecas rusas.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1xIG03Dn0WaHAht3ts8Y38hMrnrmTBpcf/preview "
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/solucion-leccion-matryoshka?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución a la práctica
                  </button>
                </a>
              </Desplegable>

              <Desplegable
                type="secondary"
                title="Lección 8. Multimedia y diseño."
              >
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1OI0R6eeHI3PzCksNl8_mfrnJvaKGGHlU/preview "
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/solucion-practica-multimedia?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución a la práctica
                  </button>
                </a>

                <a href={"https://tinypng.com/"} target="_blank">
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Reduce imágenes
                  </button>
                </a>

                <a href={"https://indify.co/"} target="_blank">
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Widgets gratuitos
                  </button>
                </a>
              </Desplegable>

              <Desplegable
                type="secondary"
                title="Lección 9. Bloques avanzados."
              >
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1v0MC9rf2xV7WXnPlWBsd7rp5Pg7_ch-z/preview "
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/solucion-leccion-bloques-avanzados?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución a la práctica
                  </button>
                </a>
              </Desplegable>
              <Desplegable
                type="secondary"
                title="Lección 10. Compartir páginas."
              >
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1ZFDtPKmjLLLneNgm35YRazczfJH_0Jwh/preview "
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/solucion-leccion-compartir-paginas?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución a la práctica
                  </button>
                </a>
              </Desplegable>
            </Desplegable>
            <Desplegable title="Módulo: Gestión personal: hábitos, gastos y lectura.">
              <Desplegable
                type="secondary"
                title="Lección 11. Qué es una base de datos y sus propiedades."
              >
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1Xfa-J5moeZFMSmON-OPooRjY4RWwzUVr/preview "
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/solucion-leccion-propiedades?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución a la práctica
                  </button>
                </a>
              </Desplegable>
              <Desplegable type="secondary" title="Lección 12. Modos de vista.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1Ylu9OKrsuUE_ZRdGo5cLKjRpj7pG1seO/preview "
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Bonus de lección:</h4>
                <p>Disponible próximamente.</p>
                <br></br>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/solucion-leccion-modos-de-vista?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución a la práctica
                  </button>
                </a>
              </Desplegable>

              <Desplegable type="secondary" title="Lección 13. Filtros.">
                <br></br>
                <h4>- Lección:</h4>
                <br></br>
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1lVOj2hRsHap8Si23vnhX4PyERNNynBxO/preview "
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>- Recursos:</h4>
                <br></br>
                <a
                  href={
                    "https://emprendecon.notion.site/solucion-leccion-filtros?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" mb-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución a la práctica
                  </button>
                </a>
              </Desplegable>

              <Desplegable
                type="secondary"
                title="Bonus de módulo. Buenas prácticas. "
              >
                <br></br>
                <h4>- Disponible próximamente</h4>
                <br></br>
              </Desplegable>
            </Desplegable>
            <Desplegable title="Módulo:  Objetivos y tareas con barras de progreso."></Desplegable>
            <Desplegable title="Módulo: Ahorra tiempo. "></Desplegable>

            <h2 className="mt-24 font-alternate text-3xl leading-[52px]">
              - Bonus.
            </h2>
            <p>Próximamente...</p>

            <h2 className="mt-24 font-alternate text-3xl leading-[52px]">
              - Resolución de dudas.
            </h2>
            <p>
              Recuerda que tienes dos semanas desde el momento de compra para
              preguntarme dudas relacionadas con el curso. <br></br>¿Te
              comprometes a hacer el curso en ese tiempo para aprovechar el
              soporte? <br></br>Si es así, puedes escribir a
              laura@emprendeconnotion.com. El asunto debe ser: ¿A QUE NO ERA TAN
              DIFÍCIL? <br></br>Es importante que tenga ese asunto: filtraré en
              mi gestor los emails con ese asunto y si no me aparece no le daré
              prioridad.
            </p>

            <div className="mt-24 pl-16 ">
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
