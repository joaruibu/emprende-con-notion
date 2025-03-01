import { useEffect, useState } from "react";
import SubscriptionForm from "../components/Form";
import TitlePage from "../components/TitlePage";

const Home = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  const TITLE_DATA = {
    title: "La gente que usa Notion, NO es más productiva.",
    subtitle: "",
  };

  const FORM_DATA = {
    titleForm: "",
    textButton: "Suscribirme",
    label: "subs-home",
    id: "fieldjkthny",
    name: "cm-f-jkthny",
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <main className=" border-2 bg-stone-50 border-stone-950 p-4 rounded-xl my-8">
      {domLoaded && (
        <>
          <TitlePage subtitle={TITLE_DATA.subtitle}>
            {TITLE_DATA.title}
          </TitlePage>
          <br></br>
          <br></br>
          <p>
            <p className="mx-10 block text-gray-500 text-sm ">
              {" "}
              <b>
                ≪El éxito es hacer lo que quieres, cuando quieres, donde
                quieres, con quién quieres y tanto como quieres.≫ – Tony
                Robbins.
              </b>{" "}
            </p>
          </p>
          <br></br> <br></br>
          <p>
            Mucha gente llega de mi canal de YouTube, Emprende con Notion,
            pensando que{" "}
            <b>solo por empezar a utilizar Notion van a ser productivos.</b>
          </p>
          <p>Que Notion, es igual a productividad. </p>
          <p>
            La gente quiere cumplir objetivos muy rápido y muy fácil. No les
            culpo, pero es complicado. Bastante. Ahora, como ese sueño está ahí,
            pues hay muchos supuestos gurús de la productividad que venden
            cursos, formaciones, podcast y cosas alrededor de la industria de
            Notion y la productividad tipo…
          </p>
          <br></br>
          <p className="mx-8 block text-gray-700 text-sm ">
            <i>
              ¿Cómo cambiaría tu vida si fueras una persona ESTRUCTURADA y
              ORGANIZADA? 8 AÑOS de MÁXIMA PRODUCTIVIDAD personal.
            </i>
          </p>
          <p className="mx-8 block text-gray-700 text-sm ">
            <i> AVANZA 2 DÍAS EN 1, usando NOTION.</i>
          </p>
          <p className="mx-8 block text-gray-700 text-sm ">
            <i>Los 5 SECRETOS de la PRODUCTIVIDAD EXTREMA.</i>
          </p>
          <p className="mx-8 block text-gray-700 text-sm ">
            <i>Vive la EFECTIVIDAD y sé FELIZ.</i>
          </p>
          <p className="mx-8 block text-gray-700 text-sm ">
            <i>Cómo logro hacer TODO. </i>
          </p>
          <br></br>
          <p>¿Pero sabes qué? </p>
          <p>
            Son idioteces para incautos. No lo digo porque no puedas lograr ser
            más estructurado y organizado, pero jamás durante 8 años seguidos.
            Uses Notion, o una agenda de papel.
          </p>
          <p>
            Y desde luego, lo que sí te digo es que{" "}
            <b> no vas a lograr hacerlo TODO siempre. </b> No lo harás. La
            efectividad extrema no existe e intentarlo no te hará feliz. Lo
            único que hará será frustrarte más y perder el dinero y el tiempo
            del curso de productividad que hayas hecho.{" "}
          </p>
          <br></br>
          <p>Entonces.</p>
          <p>
            <b>
              {" "}
              Hay una manera bastante sensata de mejorar tu productividad
              personal y laboral{" "}
            </b>
            (aunque ahora pienses que no tienes tiempo ni de salir a caminar 30
            minutos todos los días, ni de cocinar con calma, ni hablamos de
            intentar lanzar ese negocio que llevas en la cabeza desde hace
            meses);{" "}
            <b>
              no es nada milagroso ni es un “secreto” que conozcamos solo unos
              pocos…
            </b>
          </p>
          <br></br>
          <br></br>
          <p>
            <b>
              El “secreto” de la productividad es hacer menos. Tan simple como
              eso. Ojo, simple no es fácil. Saber qué priorizar es de las
              habilidades más complicadas en cualquier negocio. Pero en
              definitiva, es eso: menos, de más calidad; menos, para avanzar
              más.
            </b>
          </p>
          <br></br>
          <br></br>
          <p>
            Al fin y al cabo, <i>¿qué sabrá Tony Robbins? </i>{" "}
          </p>
          <p>
            Te lo digo porque este nº1 de EEUU en estrategia de vida y negocio,
            ha repetido en varias ocasiones este mismo mensaje de
            <i>≪do less, but do what matters≫.</i> Como has visto no liga el
            éxito profesional con una <i>productividad extrema </i> sino con el
            poder de la elección personal, de elegir menos y mejor, vaya.
          </p>
          <p>
            Pero… qué sabrá Tony Robbins, <i>¿verdad?</i>
          </p>
          <p>
            En cualquier caso, si quieres suscribirte a mi newsletter donde
            hablo de todo esto, es abajo, en la caja de suscripción.{" "}
          </p>
          <SubscriptionForm
            titleForm={FORM_DATA.titleForm}
            textButton={FORM_DATA.textButton}
            label={FORM_DATA.label}
            id={FORM_DATA.id}
            name={FORM_DATA.name}
          />
          <br></br>
          <br></br>
          <br></br>
          <h2 className="ml-6">Esto no es nada nuevo.</h2>
          <br></br>
          <br></br>
          <p>
            Quiero decir, no soy ninguna pionera. Ni siquiera Tony Robbins lo
            es.
          </p>
          <p>
            El gran filósofo Réne Descartes tuvo sus sueños y visiones tras
            varios meses descansando. Newton descubrió uno de los grandes
            principios de la física sentado bajo un árbol. Las siestas de
            Einstein son ya conocidas. Platón construyó el pilar de la filosofía
            en los jardines de Akademos…{" "}
            <b>
              Ninguno de ellos llegó a sus descubrimientos con productividad
              extrema.
            </b>
            <br></br>
            <br></br>
            <br></br>
            <p>
              <p className="mx-10 block text-gray-500 text-sm">
                <i>
                  <b>≪¡Qué descansada vida</b> la del que huye del mundanal
                  ruido y sigue la escondida senda por donde han ido{" "}
                  <b>los pocos sabios </b>que en el mundo han sido!≫. – Poeta y
                  humanista del Renacimiento, Luis de León.
                </i>
              </p>
            </p>
             
          </p>
          <p>
            Por eso, volviendo al presente, yo no te puedo decir que por usar
            Notion vas a ser más productivo.{" "}
          </p>
          <p>
            Cuando usamos Notion, una agenda o el método mágico de 5 pasos del
            gurú de turno, me da igual… No entendemos que{" "}
            <b>eso son solo herramientas.</b> Si solo te enseño Notion corremos
            el riesgo de seguir cayendo en las dinámicas de hacer más. En lugar
            de elegir mejor. <i>¿Ves la diferencia?</i>
          </p>
          <br></br>
          <p>
            Daniel Kahneman, premio Nobel, demuestra en su libro "Thinking Fast
            and Slow" que nuestro cerebro necesita períodos de baja actividad
            para tomar mejores decisiones y ser, por tanto, más
            productivos.{" "}
          </p>
          <br></br>
          <br></br>
          <br></br>
          <p>
            Entonces. Si quieres saber (de forma práctica) cómo hacer más de
            aquello que de verdad te importa, desde 2024 escribo una newsletter
            semanal gratuita donde comparto consejos de productividad para tu
            negocio y vida personal, o como a mí me gusta llamarlos:{" "}
            <b>
              tips para tocarte la papaya (porque si sigues estos tips tendrás
              más tiempo para tocártela).
            </b>{" "}
            A veces también doy algún regalo pero, claro, solo a los
            suscriptores. Si te gusta la idea te apuntas ahí:{" "}
          </p>
          <SubscriptionForm
            titleForm={FORM_DATA.titleForm}
            textButton={FORM_DATA.textButton}
            label={FORM_DATA.label}
            id={FORM_DATA.id}
            name={FORM_DATA.name}
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="text-2xl">
            Ahora vamos con lo que puedes aprender si te suscribes a la
            lista.{" "}
          </h2>
          <br></br>
          <br></br>
          <p>
            Digo puede, porque por mucho que yo te ayude y te comparta recursos,
            al final el que lleva a la acción todo esto, o no, eres tú.{" "}
          </p>
          <p>Pues eso, vamos con lo que puedes conseguir si te suscribes:</p>
          <br></br>
          <ul className="mx-8">
            <li>
              Compartiré contigo lo que leo y descubro del mundo de la
              productividad, negocios y vida.
            </li>
            <li>
              También cómo aplico eso que descubro, de forma práctica, para que
              tú también puedas aplicarlo en tu vida y negocio.{" "}
            </li>
            <li>
              Todo esto con anécdotas humanas y reales. No soy ninguna gurú. Si
              esperas eso, no te apuntes.{" "}
            </li>
            <li>
              Por supuesto te hablaré de Notion. De las actualizaciones nuevas
              relevantes que saquen, sí, pero sobre todo de cómo utilizar esta
              herramienta para enfocarte en lo que de verdad te importa; sin
              widgets ni florituras.{" "}
            </li>
            <li>
              Tendrás acceso prioritario a los vídeos nuevos 24 horas antes de
              que se hagan públicos (si no son directos, entiéndeme). Y claro,
              es mucho más probable que pueda responderte a los comentarios que
              me hagas en esas primeras 24 horas. Como te digo, esto es
              exclusivo para mis suscriptores de la newsletter.{" "}
            </li>
            <li>
              También te enviaré emails sobre mis cursos, plantillas, y otros
              recursos, a veces regalos, que vaya sacando que de otra forma no
              podrás enterarte. Si esto es un problema, no te apuntes.{" "}
            </li>
            <li>
              Ah, y te he mentido sobre lo de semanal, a veces me emociono con
              algo nuevo de productividad que he aprendido y me pongo a escribir
              varios días seguidos.{" "}
            </li>
          </ul>
          <p>Abajo para entrar. </p>
          <SubscriptionForm
            titleForm={FORM_DATA.titleForm}
            textButton={FORM_DATA.textButton}
            label={FORM_DATA.label}
            id={FORM_DATA.id}
            name={FORM_DATA.name}
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>
            Comentario real, no solicitado, de gente de dentro de la
            newsletter:{" "}
          </h2>
          <br></br>
          <br></br>
          <p className="mx-20">
            <i className=" bg-gray-200">
              “Hola, el contenido del newsletter fue una decepción total. No
              encontré ningún valor en lo que leí. Si realmente quieres llegar a
              más personas, deberías mejorar tu imagen personal o consultar con
              un experto en el tema.”
            </i>
          </p>
          <br></br>
          <p>Comentarios, también reales y no solicitados. Copio-pego:</p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">
              “(…) Así que gracias por todos tus mensajes que me hacen sentir
              que ni soy tan rara ni estoy tan loca, ni tan sola en esta idea de
              emprender y que todo parezca un imposible... Y sin embargo no lo
              es.”
            </i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">
              “Tengo una lista de correos POTENTES que guardo en Notion y que
              releo con frecuencia. Este va directo a esa lista. Saludos,
              Laura.”
            </i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">
              “Lo que tengo claro es que deseo recibir estos mensajes todos los
              días. Te sobra ingenio a raudales. Gracias!!”
            </i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">“:) love it”</i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">“AMO esta newsletters!”</i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">
              “A veces me suceden cosas u observo y pienso ¿cómo lo incluiría
              Laura en un email? Sobre todo, si es curioso, divertido o aporta
              una lección.”
            </i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">
              “Hola Laura! (…) Quiero felicitarte y agradecerte por tus mails y
              todo tu contenido! Es de muchísima ayuda para mi y todos los
              emprendedores! Lo valoro mucho.”
            </i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">
              {" "}
              “Buen día, Sinceramente... Es el primer email completo (no laboral
              ni académico) que me he leído completo. Ansioso de ver esos{" "}
              <b>tips para tocarme la papaya </b>que no tengo. Saludos y
              gracias,”
            </i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">
              “Tengo que confesar que este es el primer correo que abro tuyo 🥴.
              Pero ahora sí que no me los perderé jajajajaja… Al leer el
              comienzo me hizo reír mucho y debo de confesar que lo leía varias
              veces esa parte para saber si si había entendido bien jajajaja.
              Ahora nunca se me olvidará este tip! Gracias!”
            </i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">
              “Me has ayudado a organizarme mucho con Notion. Desde que lo
              describí me enamoré completamente de esta app y de apoco estoy
              organizando MI VIDA ENTERA allí! Pacientes, diarios alimentarios,
              de hábitos, cosas del hogar, loa hobbies, proyectos… todo!!
              Gracias gracias gracias 🙏”
            </i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">“Me mola tu canal y tus emails😊”</i>
          </p>
          <br></br>
          <p className="mx-20 ">
            <i className=" bg-gray-200">
              “(…) me encanto tu newsletter. Voy a estar atenta a recibirla
              porque de verdad …. Quiero empezar a tener ese tiempo.”
            </i>
          </p>
          <br></br>
          <br></br>
          <p>
            Si tú también quieres recibir semanalmente los{" "}
            <b>
              tips para tocarte la papaya (porque si sigues esos tips tendrás
              más tiempo para tocártela){" "}
            </b>
            de los que hablan… <br></br>
            <br></br>Es aquí abajo:
          </p>
          <br></br>
          <SubscriptionForm
            titleForm={FORM_DATA.titleForm}
            textButton={FORM_DATA.textButton}
            label={FORM_DATA.label}
            id={FORM_DATA.id}
            name={FORM_DATA.name}
          />
          <br></br>
        </>
      )}
    </main>
  );
};

export default Home;
