import React from "react";
import StripeButton from "../../components/StripeButton";
import Review from "../../components/Review";
import Desplegable from "../../components/Desplegable";

const SegundoCerebroEnNotion = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: "Segundo Cerebro en Notion",
    buttonText: " Quiero mi segundo cerebro",
    price: "90 €",
    isDisabled: false,
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/link/ed8819c9aec49dc340f88c7d4e95eacd8cc8bb63",
  };
  return (
    <>
      <article className="bg-stone-100 my-8">
        <section class="pt-20 p-4">
          <div class="max-w-3xl mx-auto px-6 text-center">
            <h1 class="text-5xl font-bold mb-10 leading-tight">
              Tu vida y tu negocio organizado en tu segundo cerebro.
            </h1>
            <p class="text-lg mb-8 max-w-2xl ">
              Organiza tu vida personal y profesional con el sistema de
              productividad que ha transformado la manera en que cientos de
              personas gestionan su día a día.
            </p>
          </div>
          <div className="flex justify-center mb-24 p-4 ">
            <img
              className="text-center"
              src={
                "https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745605990/emprende-con-notion/courses/second-brain/Segundo_Cerebro_template_-_Emprende_con_Notion_auaxws.webp"
              }
              alt="Foto de un Ipad al lado de un Iphone mostrando la plantilla del segundo cerebro."
              width={600}
              height={100}
            />
          </div>
        </section>

        <section class="py-16 bg-white p-4">
          <div class="max-w-5xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-4">¿Cómo funciona?</h2>

            <p class="text-base mb-8 max-w-2xl mx-auto">
              Externalizing information into your Second Brain gives you clarity
              and structure.
            </p>

            <div class="grid grid-cols-3 gap-6">
              <div class="flex flex-col items-start">
                <img
                  src={
                    "https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745605979/emprende-con-notion/courses/second-brain/Segundo_Cerebro_botones_-_Emprende_con_Notion_s37o89.webp"
                  }
                  alt="Paso 1: Captura de los botones de la plantilla para guardar los datos"
                  class="w-full mb-4"
                />
                <p class="text-2xl pb-2 font-bold">Capture Everything</p>
                <p class="text-sm text-left">
                  Capture new ideas, tasks, and notes to avoid forgetting them.
                </p>
              </div>
              <div class="flex flex-col items-start col-span-2">
                <img
                  src={
                    "https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745605985/emprende-con-notion/courses/second-brain/Segundo_Cerebro_PARA_-_Emprende_con_Notion_azn8si.webp"
                  }
                  alt="Paso 2: Organiza tus tares segun tus proyectos, areas, recursos o archívalas"
                  class="w-full mb-4"
                />

                <p class="text-2xl pb-2 font-bold">PARA Method</p>
                <p class="text-sm text-left">
                  Ground your organization using the simple PARA framework from
                  Laura de Arquer.
                </p>
              </div>
              <div class="flex flex-col items-start col-span-2">
                <img
                  src={
                    "https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745605980/emprende-con-notion/courses/second-brain/Segundo_Cerebro_gestor_proyectos_-_Emprende_con_Notion_qpowh5.webp"
                  }
                  alt="Paso 3: Todos tus proyectos y tareas clasificados por estados"
                  class="w-full mb-4"
                />
                <p class="text-2xl pb-2 font-bold">
                  Integrated Project Management
                </p>
                <p class="text-sm text-left">
                  Align projects with your goals, and break them into manageable
                  tasks to ensure coherence and consistency.
                </p>
              </div>
              <div class="flex flex-col items-start">
                <img
                  src={
                    "https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745605988/emprende-con-notion/courses/second-brain/Segundo_Cerebro_relaciones_-_Emprende_con_Notion_xygnok.webp"
                  }
                  alt="Paso 4: Todas tus tareas y proyectos estarán linkeadas y relacionadas entre si y con las areas de conocimiento"
                  class="w-full mb-4"
                />
                <p class="text-2xl pb-2 font-bold">Link Anything</p>
                <p class="text-sm text-left">
                  Create connections, such as linking a useful reference to a
                  project.
                </p>
              </div>
            </div>
          </div>

          <Review name="Joaquín Ruiz" job="Desarrollador web">
            "There are many templates that follow Tiago Forte's 2nd Brain
            method, but Laura's template is very very very complete."
          </Review>
        </section>

        <section class="py-16 bg-white">
          <div class="max-w-6xl mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12">
              ¿Qué vas a conseguir?
            </h2>

            <div className="flex flex-col sm:grid grid-cols-2 sm:grid-cols-6 gap-8 mb-12 px-4">
              <div className="text-left sm:col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i class="fa-solid fa-briefcase fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Gestiona proyectos
                </span>
                <span className="font-montserrat text-sm">
                  Ya seas autónomo, empresario o asalariado.
                </span>
              </div>
              <div className="text-left sm:col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i class="fa-solid fa-people-group fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Gestiona a tu equipo
                </span>
                <span className="font-montserrat text-sm">
                  Logros, tiempo, tareas por persona...
                </span>
              </div>

              <div className="text-left col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i class="fa-solid fa-list-check fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Procesos y tareas
                </span>
                <span className="font-montserrat text-sm">
                  Centralizados en un solo lugar.
                </span>
              </div>

              <div className="text-left col-span-2 col-start-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i class="fa-solid fa-coins fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">CRM</span>
                <span className="font-montserrat text-sm">
                  Tus clientes y proveedores sin necesidad de Holded, HubSpot o
                  Salesforce.
                </span>
              </div>

              <div className="text-left col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i class="fa-solid fa-money-bill fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Finanzas
                </span>
                <span className="font-montserrat text-sm">
                  Gestiona, clasifica, y descubre en qué gastas y cuánto
                  ahorras.
                </span>
              </div>

              <div className="text-left col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i class="fa-solid fa-box-open fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Recursos, notas, formación.
                </span>
                <span className="font-montserrat text-sm">
                  Lo importante no es dónde lo guardas, sino encontrarlo rápido.
                </span>
              </div>

              <div className="text-left col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i class="fa-solid fa-bullseye fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Objetivos y prioridades.
                </span>
                <span className="font-montserrat text-sm">
                  Con un progreso cuantificable, los tuyos y los de tu equipo.
                </span>
              </div>

              <div className="text-left col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i class="fa-solid fa-handshake fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Reuniones
                </span>
                <span className="font-montserrat text-sm">
                  Programa, prepara, anota, y concluye, en un solo lugar para
                  todos.
                </span>
              </div>
            </div>
          </div>

          <Review name="Joaquín Ruiz" job="Desarrollador web">
            "There are many templates that follow Tiago Forte's 2nd Brain
            method, but Laura's template is very very very complete."
          </Review>
        </section>

        <section class="pt-20 p-4">
          <div class="max-w-5xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-4">
              You can take a closer look inside.
            </h2>
            <p class="text-base mb-8 max-w-2xl mx-auto">
              An all-in-one dashboard that provides a bird's-eye view of your
              life
            </p>

            <div className="flex justify-center mb-24 p-4 ">
              <img
                className="text-center"
                src={
                  "https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745605987/emprende-con-notion/courses/second-brain/Segundo_Cerebro_Plantilla_-_Emprende_con_Notion_fcfsnc.webp"
                }
                alt="Esquema de toda la plantilla del segundo cerebro donde se va indicadnado con flechas cada parte que es."
                width={1200}
                height={200}
              />
            </div>

            <StripeButton
              urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
              price={STRIPE_BUTTON_CONFIG.price}
              title={STRIPE_BUTTON_CONFIG.title}
              isDisabled={STRIPE_BUTTON_CONFIG.isDisabled}
            >
              {STRIPE_BUTTON_CONFIG.buttonText}
            </StripeButton>
          </div>
        </section>

        <Review name="Joaquín Ruiz" job="Desarrollador web">
          "There are many templates that follow Tiago Forte's 2nd Brain method,
          but Laura's template is very very very complete."
        </Review>

        <section class="pt-20 p-4">
          <div class="max-w-5xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-4">Pay once, use forever.</h2>
            <p class="text-base mb-8 max-w-2xl mx-auto">
              Enjoy lifetime access, community support, and no subscription
              fees.
            </p>

            <div className="flex justify-center mb-24 p-4 ">
              <img
                className="text-center"
                src={
                  "https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745605990/emprende-con-notion/courses/second-brain/Segundo_Cerebro_template_-_Emprende_con_Notion_auaxws.webp"
                }
                alt="Esquema de toda la plantilla del segundo cerebro donde se va indicadnado con flechas cada parte que es."
                width={300}
                height={200}
              />
            </div>

            <StripeButton
              urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
              price={STRIPE_BUTTON_CONFIG.price}
              title={STRIPE_BUTTON_CONFIG.title}
              isDisabled={STRIPE_BUTTON_CONFIG.isDisabled}
            >
              {STRIPE_BUTTON_CONFIG.buttonText}
            </StripeButton>
          </div>
        </section>

        <section class="pt-20 p-4 bg-white">
          <div class="max-w-5xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-4">Preguntas Frecuentes.</h2>

            <Desplegable title="How does this work?">
              After purchase, you'll receive a link to duplicate the template
              into your Notion account. If you're new to Notion, I've included a
              video to help you get started.
            </Desplegable>
            <Desplegable title="How does this work?">
              After purchase, you'll receive a link to duplicate the template
              into your Notion account. If you're new to Notion, I've included a
              video to help you get started.
            </Desplegable>
            <Desplegable title="How does this work?">
              After purchase, you'll receive a link to duplicate the template
              into your Notion account. If you're new to Notion, I've included a
              video to help you get started.
            </Desplegable>
            <Desplegable title="How does this work?">
              After purchase, you'll receive a link to duplicate the template
              into your Notion account. If you're new to Notion, I've included a
              video to help you get started.
            </Desplegable>
            <Desplegable title="How does this work?">
              After purchase, you'll receive a link to duplicate the template
              into your Notion account. If you're new to Notion, I've included a
              video to help you get started.
            </Desplegable>
            <Desplegable title="How does this work?">
              After purchase, you'll receive a link to duplicate the template
              into your Notion account. If you're new to Notion, I've included a
              video to help you get started.
            </Desplegable>
            <div className="my-12">
              <StripeButton
                urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
                price={STRIPE_BUTTON_CONFIG.price}
                title={STRIPE_BUTTON_CONFIG.title}
                isDisabled={STRIPE_BUTTON_CONFIG.isDisabled}
              >
                {STRIPE_BUTTON_CONFIG.buttonText}
              </StripeButton>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default SegundoCerebroEnNotion;
