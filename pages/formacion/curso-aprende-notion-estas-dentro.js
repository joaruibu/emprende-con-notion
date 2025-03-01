import React, { useState } from "react";
import FormAccesContent from "../../components/FormAccesoContentido";
import Desplegable from "../../components/Desplegable";

const cursoNotion = () => {
  const [password, setPassword] = useState("");
  const PASSWORDS = {
    PASSWORD_1: "notion",
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
            <h1 className="mb-4 font-alternate text-4xl leading-[52px] text-center">
              CURSO DE NOTION.
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <i className="font-bold">
              ***Por favor, lee hasta el final, hay información importante y no
              me gustaría que te perdieras nada.
            </i>
            <h2 className="mt-12 mb-8">Instrucciones de uso.</h2>
            <ol className="ml-6 mb-8">
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
            <br></br>
            <br></br>
            <br></br>

            <Desplegable title="Módulo 0. El primer paso">
              <Desplegable type="secondary" title="Lección 1. Crear un cuenta">
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1v996DjuZOcLY_oqhUD0FG8Pg4yxORg83/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>

                <a
                  href={"https://affiliate.notion.so/emprendeconnotion"}
                  target="_blank"
                >
                  <button
                    className=" my-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Crear una web de Notion
                  </button>
                </a>
              </Desplegable>
            </Desplegable>
            <Desplegable title="Módulo 1. Crea planificadores">
              <Desplegable type="secondary" title="Lección 2. Bloques básicos">
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1iMn_thDuRM_vzVcN6W13tb9LcPV-eFOQ/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <a
                  href={
                    "https://emprendecon.notion.site/practica-leccion-bloques-basicos?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" my-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Enlace a plantilla
                  </button>
                </a>
                <a
                  href={
                    "https://www.notion.so/emprendecon/Soluci-n-lecci-n-bloques-b-sicos-5bf6990accfb47f491067ecb4a9efac5?pvs=25"
                  }
                  target="_blank"
                >
                  <button
                    className=" my-6 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución
                  </button>
                </a>
              </Desplegable>
              <Desplegable type="secondary" title="Lección 3. Edicion de texto">
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1Xnsec13aR5n7-38TIarXDEzD9r3h_R96/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <a
                  href={
                    "https://emprendecon.notion.site/practica-leccion-edicion-de-texto?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" my-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Enlace a plantilla
                  </button>
                </a>
                <a
                  href={
                    "https://www.notion.so/emprendecon/Soluci-n-lecci-n-edici-n-de-texto-c1cdddff24404944a241acb71b55e9f2?pvs=25"
                  }
                  target="_blank"
                >
                  <button
                    className=" my-6 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución
                  </button>
                </a>
              </Desplegable>
              <Desplegable type="secondary" title="Lección 4. Tablas básicas">
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1xhr2K0yxfmiCYc2-ih4UJY1BiSiCFhVV/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <a
                  href={
                    "https://emprendecon.notion.site/practica-leccion-tablas-basicas?pvs=4"
                  }
                  target="_blank"
                >
                  <button
                    className=" my-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Enlace a plantilla
                  </button>
                </a>
                <a
                  href={
                    "https://www.notion.so/emprendecon/Soluci-n-lecci-n-tablas-b-sicas-1a1868683e7880bfa1e0f53549b0c9cc?pvs=25"
                  }
                  target="_blank"
                >
                  <button
                    className=" my-6 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Solución
                  </button>
                </a>
              </Desplegable>
            </Desplegable>
            <Desplegable title="Módulo 2. Interfaz">
              <Desplegable type="secondary" title="Lección 5. Interfaz">
                <div class="relative w-full max-w-2xl mx-auto aspect-video mb-12">
                  <iframe
                    src="https://drive.google.com/file/d/1M3OCOvmqZanQqLxugrpZLcAuXehzAQy2/preview"
                    width="100%"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <a href={"https://faces.notion.com/"} target="_blank">
                  <button
                    className=" my-12 rounded-md w-full border border-stone-950 bg-yellow-300 text-xl text-stone-950 p-4 font-alternate uppercase font-semibold duration-150 hover:shadow-dark "
                    type="submit"
                  >
                    Crea tu propio avatar
                  </button>
                </a>
              </Desplegable>
            </Desplegable>

            <Desplegable title="Módulo 3. Crea tu propia web en Notion"></Desplegable>
            <Desplegable title="Módulo 4. Gestión personal: hábitos, gastos y lectura."></Desplegable>
            <Desplegable title="Módulo 5.  Objetivos y tareas con barras de progreso."></Desplegable>
            <Desplegable title="Módulo 6. Ahorra tiempo. "></Desplegable>

            <p className="pt-24 pb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="pl-16 ">
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
