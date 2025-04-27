import React, { useEffect } from "react";
import StripeButton from "../../components/StripeButton";
import Review from "../../components/Review";
import Desplegable from "../../components/Desplegable";
import Aos from "aos";
import "aos/dist/aos.css";

const SegundoCerebroEnNotion = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  }, []);

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
      <article className="bg-stone-200 my-8">
        <section className="pt-8 sm:pt-20 p-4">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-10 leading-tight">
              Tu vida y tu negocio organizado en tu segundo cerebro.
            </h1>
            <div className=" mb-6 max-w-2xl ">
              <p className="text-sm sm:text-lg">
                El Segundo Cerebro es un sistema todo-en-uno en Notion que te
                ayuda a hacer seguimiento de tus metas, proyectos, notas…, todo
                lo que hay entre medias de la gestión de proyectos y la gestión
                de conocimiento.
              </p>
            </div>
          </div>
          <div className="opacity-0 mx-auto flex items-center justify-center transition-opacity duration-1000 delay-300 ease-out animate-fade-in-manual">
            <img
              className="text-center"
              src={
                "https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745751007/emprende-con-notion/courses/second-brain/Segundo_cerebro_en_Notion_-_plantilla_2_-_emprende_con_notion_gy4b5i.webp"
              }
              alt="Foto de un Ipad al lado de un Iphone mostrando la plantilla del segundo cerebro."
              width={1100}
              height={100}
              data-aos="fade-up"
            />
          </div>
        </section>

        <section className="py-16 bg-white p-4">
          <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">¿Cómo funciona?</h2>

            <p className="text-base mb-8 max-w-2xl mx-auto">
              Capturar y gestionar toda tu información en un solo lugar, tu
              Segundo Cerebro, te proporciona claridad y estructura.
            </p>
            <div className=" sm:grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-start">
                <div className="p-4 bg-stone-100 rounded-2xl w-full mb-8">
                  <div className="h-64 w-full bg-center bg-cover  bg-[url('https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745751020/emprende-con-notion/courses/second-brain/Segundo_cerebro_en_Notion_-_GTD_-_emprende_con_notion_-_d3aral.webp')]"></div>
                </div>
                <p className="text-2xl pb-2 font-bold">Captura todo</p>
                <p className="text-sm text-left">
                  Captura cualquier información (ideas, tareas, notas…) para
                  evitar olvidarlas. Desde tu móvil, tablet u ordenador.
                </p>
              </div>
              <div className="flex flex-col items-start col-span-2">
                <div className="p-4 bg-stone-100 rounded-2xl w-full mb-8">
                  <div className="h-64 w-full bg-center bg-cover  bg-[url('https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745751025/emprende-con-notion/courses/second-brain/Segundo_cerebro_en_Notion_-_sistema_PARA_-_emprende_con_notion_-_efdqyw.webp')]"></div>
                </div>
                <p className="text-2xl pb-2 font-bold text-left">
                  Basado en lo mejor de 3 sistemas de productividad que
                  funcionan: PARA, GTD y Zettelkasten.{" "}
                </p>

                <ul className="text-sm text-left">
                  <li className="pb-2">
                    Método GTD para vaciar tu cabeza y centrarte en loque toca,
                    de David Allen (imagen)
                  </li>
                  <li className="pb-2">
                    Método PARA para simplificar tu estructura digital, de Tiago
                    Forte (imagen)
                  </li>
                  <li className="pb-2">
                    Método Zettelkasten para que tus ideas no mueran en notas
                    sueltas, de Niklas Luhmann (imagen)
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start col-span-2">
                <div className="p-4 bg-stone-100 rounded-2xl w-full mb-8">
                  <div className="h-64 w-full bg-center bg-cover  bg-[url('https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745751021/emprende-con-notion/courses/second-brain/Segundo_cerebro_en_Notion_-_proyectos_-_emprende_con_notion_-_uu5gug.webp')]"></div>
                </div>

                <p className="text-2xl pb-2 font-bold">
                  Gestión de proyectos integrada
                </p>
                <p className="text-sm text-left">
                  Alinea los proyectos con tus metas vitales, crea objetivos
                  medibles y divídelos en tareas manejables para asegurar
                  coherencia y consistencia.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="p-4 bg-stone-100 rounded-2xl w-full mb-8">
                  <div className="h-64 w-full bg-center bg-cover  bg-[url('https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745751024/emprende-con-notion/courses/second-brain/Segundo_cerebro_en_Notion_-_relaciones_2_-_emprende_con_notion_-_wkjvpo.webp')]"></div>
                </div>
                <p className="text-2xl pb-2 font-bold">Enlaza cualquier cosa</p>
                <p className="text-sm text-left">
                  Crea conexiones, como vincular una referencia útil a un
                  proyecto.
                </p>
              </div>
            </div>
          </div>

          <Review name="Joaquín Ruiz" job="Desarrollador web">
            "There are many templates that follow Tiago Forte's 2nd Brain
            method, but Laura's template is very very very complete."
          </Review>
        </section>

        <section className="bg-stone-200 mt-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Si esta historia te suena. <br />
              El segundo cerebro te interesa.
            </h2>
            <hr></hr>
            <div className="text-base my-12 max-w-2xl mx-auto text-left">
              <p>Emprender me sonaba a libertad.</p>
              <p>
                Empecé durante los primeros años{" "}
                <b> compaginándolo por un trabajo “normal”</b>, con mi nómina y
                mi horario. Así que ese sueño emprendedor era más bien{" "}
                <b>
                  agobiarme y trabajar un huevo de horas que luego no daba
                  fruto.
                </b>{" "}
              </p>
              <p>
                O sea, lanzar algo por primera vez me costó años (no lo puedo
                medir ni en meses).
              </p>
              <p>
                Es <span className="text-red-500"> curioso</span> …{" "}
              </p>
              <p>
                Es curioso que cuando trabajaba por cuenta ajena, era capaz de
                autogestionarme y cumplir el 100% de las fechas límite de mis
                proyectos (jamás me retrasé en ninguno, y como te digo me
                organizaba yo el plan).{" "}
              </p>
              <p>Pero trabajando por cuenta propia pasaba lo contrario.</p>
              <p>
                Yo que me las daba de súper organizada y que hasta tenía un
                canal de YouTube sobre productividad, no conseguía lanzar lo que
                quería.{" "}
              </p>
              <p>
                La razón <i>real??</i>
              </p>
              <p>El llamado síndrome del impostor. </p>
              <p>
                <u> Síntomas:</u> parálisis, perfeccionismo extremo. La presión
                que nos autoimponemos cuando emprendemos no es de fechas límite,
                es mucho peor, es de perfección.{" "}
              </p>
              <p>
                <u>Consecuencia:</u>
              </p>
              <ul className="pl-4 mt-8">
                <li>Mil tareas “urgentes” a la vez.</li>
                <li>Miedo constante a olvidarme de lo importante.</li>
                <li>Sensación de no avanzar una mierd.</li>
                <li>
                  <b>
                    Un Notion lleno de más y más ideas de proyectos y cientos de
                    tareas,
                  </b>{" "}
                  pero ninguno daba frutos porque, claro, en mi cabeza ninguno
                  estaba lo suficientemente bein como para sacarlo a la venta.
                </li>
              </ul>
              <p>
                Tratar de compaginarlo todo y al mismo tiempo disfrutar por el
                camino, fue lo que me llevó a investigar la ciencia detrás de la
                productividad. Hasta el punto de que empecé a estudiar una nueva
                carrera, psicología.
              </p>

              <p>
                <span className="text-red-500">Tenlo claro. </span>{" "}
                <b>Esto no ha sido de un día para otro,</b> y para ti tampoco lo
                va a ser. No me leí el libro de Getting Things Done o el de
                Tiago Forte y “vida cambiada” como venden muchos otros gurús,
                <b>quien te diga eso no te está diciendo la verdad.</b>
              </p>
              <p>
                Cambiar nuestros hábitos para alcanzar una{" "}
                <b>productividad consciente </b> es un camino que yo he
                recorrido (sigo recorriendo) y por lo que hoy puedo compartirte
                este curso de productividad junto con un Segundo Cerebro creado
                en Notion donde aplico todos esos conocimientos, y ahorrarte los
                años que a mí me ha costado recorrer el camino.
              </p>
              <p>
                Para que todos podemos hacer sólo{" "}
                <b> más de aquellas cosas que de verdad nos importan.</b>
              </p>
              <p>
                ¿El <u>resultado?</u>
              </p>
              <ul className="pl-4 mt-8">
                <li>He vuelto a dormir tranquila.</li>
                <li> He recuperado mis fines de semana.</li>
                <li>Sensación de no avanzar una mierd.</li>
                <li>
                  <b>
                    He avanzado en mi emprendimiento y mi marca personal como
                    nunca antes.
                  </b>
                </li>
                <li> Pude dejar mi trabajo por cuenta ajena.</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl m-auto py-12  text-center font-montserrat pb-24 text-stone-700  text-3xl font-bold mb-10 leading-snug ">
            ≪El éxito es hacer lo que quieres, cuando quieres, donde quieres,
            con quién quieres y tanto como quieres.≫
            <span className="block  text-stone-900 my-6">Tony Robbins.</span>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Mantén todo en un solo lugar
            </h2>
            <p className="text-base mb-8 max-w-2xl mx-auto text-center">
              Elimina el caos de usar múltiples programas.
            </p>

            <div className="flex flex-col sm:grid grid-cols-2 sm:grid-cols-6 gap-8 mb-12 px-4">
              <div className="text-left sm:col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i className="fa-solid fa-list-check fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Tareas y subtareas
                </span>
                <span className="font-montserrat text-sm">
                  Prioriza tus tareas y divide las más grandes en subtareas
                  manejables.
                </span>
              </div>
              <div className="text-left sm:col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i className="fa-solid fa-book fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Cuaderno y notas
                </span>
                <span className="font-montserrat text-sm">
                  Anota tus pensamientos, reflexiones e ideas, y mantenlos
                  organizados.
                </span>
              </div>

              <div className="text-left col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i className="fa-solid fa-bullseye fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Seguimiento de objetivos
                </span>
                <span className="font-montserrat text-sm">
                  Establece objetivos en diferentes áreas de tu vida y alinéalos
                  con pasos accionables.
                </span>
              </div>

              <div className="text-left col-span-2 col-start-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i className="fa-solid fa-box-open fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Referencias
                </span>
                <span className="font-montserrat text-sm">
                  Organiza tus referencias: artículos, vídeos, pódcast,
                  películas…
                </span>
              </div>

              <div className="text-left col-span-2 rounded-lg place-content-center text-sm font-alternate bg-stone-100 shadow-md p-8">
                <i className="fa-solid fa-quote-left fa-2x"></i>
                <span className="block my-3 font-alternate text-lg">
                  Frases y citas
                </span>
                <span className="font-montserrat text-sm">
                  Recoge y reflexiona sobre frases y citas inspiradoras y
                  significativas.
                </span>
              </div>
            </div>
          </div>

          <Review name="Joaquín Ruiz" job="Desarrollador web">
            "There are many templates that follow Tiago Forte's 2nd Brain
            method, but Laura's template is very very very complete."
          </Review>
        </section>

        <section className="pt-20 p-4">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Este es tu <u>segundo cerebro</u> por dentro.
            </h2>
            <p className="text-base mb-8 max-w-2xl mx-auto">
              Un panel todo en uno que te muestra de un vistazo tu vida y tu
              trabajo todo organizado
            </p>

            <div className="flex justify-center mb-24 ">
              <img
                className="text-center "
                src={
                  "https://res.cloudinary.com/dwsa2s0pn/image/upload/v1745751007/emprende-con-notion/courses/second-brain/Segundo_cerebro_en_Notion_-_plantilla_-_emprende_con_notion_zcj0s8.webp"
                }
                alt="Esquema de toda la plantilla del segundo cerebro donde se va indicadnado con flechas cada parte que es."
                width={1200}
                height={200}
                data-aos="fade-up"
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

        <section className="py-40 p-4 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Tu Second Brain listo en 1, 2, 3.
            </h2>
            <p className="text-base mb-8 max-w-2xl mx-auto">
              Evita horas aprendiendo y construyendo. Usa Notion como tu Second
              Brain fácilmente.
            </p>
            <div>
              <div className="flex flex-col sm:flex-arrow items-center">
                <div className="group flex-1">
                  <span className="text-9xl sm:text-[140px] font-black text-center group-hover:text-gray-600 transition-all duration-300">
                    1
                  </span>
                  <p className="text-2xl pb-2 font-bold">Duplicar</p>
                  <p className="text-sm ">
                    Abre el enlace de la plantilla y duplícalo en tu cuenta de
                    Notion.
                  </p>
                </div>
                <img
                  className="text-center rotate-90 sm:rotate-45 w-12 h-12 object-contain"
                  src={"/img/arrow.svg"}
                  alt="stripe"
                />
                <div className="group flex-1">
                  <span className="text-9xl sm:text-[140px] font-black text-center group-hover:text-gray-600 transition-all duration-300">
                    2
                  </span>
                  <p className="text-2xl pb-2 font-bold">Configurar</p>
                  <p className="text-sm ">
                    Sigue el curso de productividad (pautado y en vídeo) para
                    implementar el sistema.
                  </p>
                </div>
                <img
                  className="text-center rotate-90 sm:rotate-45 w-12 h-12 object-contain"
                  src={"/img/arrow.svg"}
                  alt="stripe"
                />
                <div className="group flex-1">
                  <span className="text-9xl sm:text-[140px] font-black text-center group-hover:text-gray-600 transition-all duration-300">
                    3
                  </span>
                  <p className="text-2xl pb-2 font-bold">Personalizar</p>
                  <p className="text-sm ">
                    Personaliza a tus necesidades la plantilla gracias a los
                    tutoriales y recibe ayuda adicional con el soporte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 p-4 bg-stone-200">
          <div className="max-w-5xl mx-auto px-6 text-left">
            <h2 className="text-4xl text-center font-bold mb-4">
              Preguntas Frecuentes.
            </h2>

            <Desplegable title="Realmente, ¿qué incluye?">
              <ul className=" pt-4 px-4 max-w-3xl">
                <li className="pb-4">
                  Acceso al{" "}
                  <b>
                    curso de productividad basado en los métodos GTD + PARA +
                    Zettelkasten + mi experiencia,{" "}
                  </b>{" "}
                  con lecciones en vídeo y prácticas.
                </li>

                <li className="pb-4">
                  La plantilla de <b>Segundo Cerebro en Notion.</b>
                </li>
                <li className="pb-4">
                  <b>Actualizaciones</b> del curso y de la plantilla.
                </li>

                <li className="pb-4">
                  <b>Soporte</b> por email para resolver tus dudas.
                </li>
              </ul>
            </Desplegable>
            <Desplegable title="Dudo si conseguiré ponerlo en práctica."></Desplegable>
            <Desplegable title="¿Incluye actualizaciones?">
              <div className="pt-4 px-4 max-w-3xl">
                <p>
                  Sí. Una vez te dupliques la plantilla en tu base de datos, esa
                  informaicón es tuya, privada, y yo ya no tengo acceso a ella.
                  Esto significa que yo no puedo hacer cambios en el Segundo
                  Cerebro y que se apliquen automáticamente a tu sistema.{" "}
                </p>
                <p>
                  Por ello la plantilla tiene un apartado llamado “migración”
                  con la que pasar tu información a versiones posteriores del
                  Segundo Cerebro será muy muy fácil.{" "}
                </p>
                <p>
                  El curso incluye una lección con el paso a paso para hacer
                  dicha migración y que estés al día de las
                  actualizaciones.{" "}
                </p>
              </div>
            </Desplegable>
            <Desplegable title="¿Necesito saber Notion o tener mucho nivel?">
              <div className="pt-4 px-4 max-w-3xl">
                <p>
                  No te preocupes, el curso está diseñado para que si no sabes
                  nada de Notion, puedas utilizar el sistema sin ningún
                  problema. Hay lecciones específicas en el curso para que
                  aprendas todo lo que necesitas saber.
                </p>
              </div>
            </Desplegable>
            <Desplegable title="Es para ti si…">
              <ul className="text-left pt-4 px-4 max-w-3xl">
                <li className="pb-4">
                  <b> Eres emprendedor o freelancer:</b> gestionas tu negocio o
                  trabajas por cuenta propia y necesitas organizarte mejor.
                </li>

                <li className="pb-4">
                  <b>
                    {" "}
                    Tienes un trabajo a tiempo completo y además un proyecto
                    personal{" "}
                  </b>{" "}
                  que quieres avanzar.
                </li>
                <li className="pb-4">
                  Tienes un sistema de productividad con varias aplicaciones
                  desconectadas y quieres centralizarlo todo en uno.
                </li>

                <li className="pb-4">
                  Quieres un sistema probado, y ahorrarte decenas de horas
                  creando tú mismo ese sistema en Notion, obsidian, Trello o la
                  app nueva que aparezca.
                </li>
              </ul>
            </Desplegable>
            <Desplegable title="¿Hay garantía de devolución?">
              <div className="pt-4 px-4 max-w-3xl">
                <p>
                  No. Y nunca lo habrá. Yo me comprometo a darte el soporte y
                  todas las herramientas con la seguridad de que mejorará tu
                  productividad diaria. Este es un producto serio y espero el
                  mismo compromiso por tu parte.
                </p>
              </div>
            </Desplegable>
            <Desplegable title="Me parece caro respecto a otras plantillas de Notion…">
              <div className="pt-4 px-4 max-w-3xl">
                <p>
                  Es que esto es un curso de productividad consciente, no una
                  plantilla. Si tú solo buscas una plantilla este no es tu
                  sitio. Dicho esto, vas a aprender a simplificar tu
                  organización diaria paso a paso y enfocarte en tus metas,
                  gracias a las lecciones en vídeo. Y todas esas estrategias que
                  te enseñe, son las que podrás llevar a la práctica con la
                  plantilla de Segundo Cerebro en Notion. Si conseguir avanzar
                  en tus metas personales te parece caro, no lo compres.
                </p>
                <p>En caso contrario: </p>
              </div>
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
