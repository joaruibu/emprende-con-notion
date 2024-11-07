import React from "react";
import StripeButton from "../components/StripeButton";

const masterclass9ErroresNotion = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: " Masterclass: 9 errores en Notion",
    buttonText: "Comprar Masterclass",
    price: "40€",
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/link/912a9c484e699412ef02f484203a4a1541d0a22f",
  };
  return (
    <>
      <article className=" border-2 bg-stone-50 border-stone-950 p-4 rounded-xl my-8">
        <div className=" sm:overflow-hidden sm:rounded-xl"></div>

        <header>
          <h1 className="mb-4 mt-10 font-alternate text-4xl leading-[52px]">
            Los 9 errores que toda persona que empieza en Notion, hace mal y que
            solo la pérdida de tiempo y frustración en Notion, harán que
            descubra. <br></br>{" "}
            <span className="text-3xl pt-12 block">Si lo hace.</span>
          </h1>
        </header>

        <section className="pt-10 ">
          <br></br>
          <br></br>

          <p>
            Cuando lancé emprendeconnotion.com empecé a pensar qué producto
            podía venderte nada más suscribirte.
          </p>
          <br></br>
          <p>¿Te parece muy borde que te lo diga así?</p>
          <br></br>
          <p>Bueno, te lo diré de forma más suave.</p>
          <br></br>
          <p>
            Pensé en un producto que pudiera ayudar al que acaba de empezar en
            Notion y no termina de adaptarse a la app.
          </p>
          <div className="pl-8">
            <p>Al que le está robando mucho tiempo aprenderlo.</p>

            <p>
              Al que lleva usando Notion meses, incluso años, y la gestión cada
              vez se le hace más compleja sin saber bien por qué.{" "}
            </p>

            <p>
              Al que ni siquiera ha empezado pero sabe que cuando empiece tendrá
              dudas porque, si no, por qué coño hay tanto tutorial en internet.
            </p>
          </div>

          <br></br>
          <p>
            O sea, un producto que ayudase a todo el puto mundo que entrase a la
            lista.{" "}
          </p>

          <p>
            <b>
              Porque, no nos engañemos, Notion puede ser jodidamente enrevesado
              al empezar a usarlo.
            </b>
          </p>
          <br></br>

          <br></br>
          <p>
            Estoy segura que después de muchos meses usando Notion, viendo
            vídeos en inglés, asistir a webinars de Notion en inglés,
            descargándote 20 plantillas, leyendo artículos en blogs de Notion…
            Segurísimo, que después, serías capaz de solucionar alguno de los 9
            errores que te explico en esta masterclass de 24 minutos.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="text-3xl pl-6">
            {" "}
            <b>
              O sea, puedes tardar meses o 24 minutos, en aprender lo que
              soluciona esta masterclass:{" "}
            </b>
          </h2>

          <br></br>
          <br></br>
          <br></br>

          <ul>
            <li className="mb-4">
              El error que comete casi todo el mundo que empieza en Notion y que
              es{" "}
              <b>
                {" "}
                la razón real de que muchas plantillas de Notion que te
                descargas de internet te estén robando más tiempo del que
                produces
              </b>
              (y que ningún gurú de la productividad te dice porque son los
              primeros que cometen este fallo).{" "}
            </li>
            <li className="mb-4">
              Los 3 problemas que un 99% de usuarios de Notion experimentan al
              empezar en Notion y que cuando veas su solución te sentirás un
              manazas por lo fácil que es.{" "}
            </li>
            <li className="mb-4">
              <b>
                La solución a un problema que no la he visto resolver a ningún
                gurú de Notion en todo YouTube. Ninguno.
              </b>{" "}
              Es más, solo he visto que apliquen la solución unos cuantos gurús
              de habla inglesa (aplicarla, no explicarla). Yo la he aprendido
              experimentando con la app y{" "}
              <b>he decidido compartirla contigo en el minuto 04:55.</b> P.D.:
              Si tú encuentras a alguien que la explique, prometo invitarte a un
              vino.{" "}
            </li>
            <li className="mb-4">
              Una de las grandes ventajas de usar Notion es que te evitas usar
              otras 7 apps de gestión de notas distintas, ¿verdad? Pues te
              contaré la razón por{" "}
              <b>
                la que muchos usuarios de Notion siguen utilizando otras apps
                (como recordatorios, trello, assana y demás), simplemente porque
                no conocen el truco que doy en el minuto 05:44.{" "}
              </b>
            </li>
            <li className="mb-4">
              <b>
                La forma más sencilla de no complicarte la vida, ni complicar tu
                Notion.{" "}
              </b>{" "}
              En el minuto 00:55.
            </li>
            <li className="mb-4">
              <b>
                La manera de tener organizadas todas tus páginas de Notion como
                lo hacen las empresas serias,
              </b>{" "}
              y cómo podrás hacerlo tú también de una manera súper sencilla para
              no parecer un desastre en tu organización interna (aunque lo
              seas).{" "}
            </li>
            <li className="mb-4">
              <b>
                Te enseñaré de forma práctica y con ejemplos reales (o sea, que
                puedes aplicar nada más ver la masterclass), cómo podrás dejar
                de tomar notas con posits, servilletas, apps de notas, o los
                otros 5 lugares donde te las sueles apuntar, para pasar a usar
                solo Notion.
              </b>{" "}
              Con el ahorro de tiempo y duplicidad de información que conlleva.{" "}
            </li>
          </ul>

          <br></br>
          <br></br>
          <h2 className="pl-6">
            {" "}
            <b>
              Si quieres ser más productivo, ordenado y gestionar mejor tu
              tiempo… Notion te puede ayudar mucho. O no.
            </b>
          </h2>
          <br></br>
          <h2 className="pl-6">
            {" "}
            <b>Si cometes los siguientes fallos, seguro que no.</b>
          </h2>
          <br></br>
          <br></br>
          <ul>
            <li>
              <b>
                {" "}
                Por qué los second brain hechos en Notion que te recomiendan
              </b>
              los gurús no te funcionan, y cómo crear uno que de verdad se
              adapte a ti y no dejes de usar con el tiempo. En el minuto 08:00.
            </li>

            <li>
              <b>Qué estás haciendo mal para que tu Notion vaya lento</b>{" "}
              (tablas que tardan en cargarse, páginas que tardan la vida en
              duplicarse…), y las 3 acciones que te ayudarán a solucionarlo
              desde el principio. A partir del minuto 13:10.
            </li>
            <li>
              Los cinco atajos de teclado que{" "}
              <b>
                por no usar están haciéndote perder casi dos horas a la semana.
              </b>{" "}
              Puede que 4 los conozcas (o no), pero{" "}
              <b>
                {" "}
                hay uno que nunca he compartido hasta la fecha y que cambiará tu
                forma de interactuar con la aplicación. Lo tienes en el minuto
                22:29.
              </b>
            </li>

            <li>
              Por qué{" "}
              <b>
                {" "}
                querer organizar todo en notion desde el principio es un error
                de principiante{" "}
              </b>
              y por qué puede estar matando tu productividad diaria.{" "}
            </li>

            <li>
              {" "}
              <b>
                Por qué casi nadie usa Notion en el móvil (y qeu hace que muchos
                sigan desperdigando notas en diferentes apps)
              </b>
              , y las 3 formas de solucionarlo que te explico en el minuto
              18:09.{" "}
            </li>
            <li>
              {" "}
              <b>
                La alternativa a crear decenas de plantillas y bases de datos
                complejas en Notion (que luego dejas de usar por lo complejas
                que son),{" "}
              </b>
              y que te ahorrará todo ese tiempo y la frustración del comienzo.{" "}
            </li>
          </ul>

          <br></br>
          <br></br>

          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>
          <br></br>
          <br></br>
          <h1 className="pb-12">Preguntas frecuentes</h1>

          <div className="pb-12">
            <h2 className="text-2xl">¿Qué recibiré? ¿Cómo funciona?</h2>
            <br></br>
            <p>
              La <i> masterclass consiste</i> en una conversación de 24 minutos
              en formato vídeo.
            </p>
            <p>
              En cuanto la compres recibirás un mensaje de correo electrónico
              que te explicará cómo acceder a una plataforma online donde podrás
              verla tantas veces como quieras.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Durante cuánto tiempo tendré acceso a la<i> masterclass</i>?
            </h2>
            <br></br>
            <p>
              Un año está garantizado desde la fecha de compra. Probablemente
              esté mucho más tiempo porque en principio no tengo pensado
              retirarlo, pero el compromiso es de un año como mínimo.
            </p>
            <p>
              Esto es así porque alojarlo cuesta dinero, me puedo morir y mil
              otras cosas. Al ser un curso online hay varios servicios de pago
              que tienen que estar en funcionamiento para poder ofrecerlo.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              Me parece caro para la duración que tiene.
            </h2>
            <br></br>
            <p>Si te parece caro, entonces no lo compres.</p>
            <p>
              Te lo digo completamente en serio. No es una técnica de venta, si
              piensas así, no lo compres, porque si valoras una formación por su
              duración o cantidad de contenido no tienes la mentalidad adecuada
              para sacarle provecho.
            </p>
            <p>
              <b>
                En esta <i>masterclass</i> resuelvo todos esos problemas que me
                habéis preguntado a lo largo de los años que llevo enseñando
                Notion (incluso aquellos errores que yo seguí cometiendo más de
                un año depsués usando la aplicación)…{" "}
              </b>
            </p>

            <p>
              Y estaba tan hasta los ovarios de las mismas preguntas, que decidí
              hacer una masterclass resolviéndolas que todo nuevo suscriptor se
              pudiera permitir.{" "}
            </p>
            <p>
              Considero que el valor de este curso es cientos de veces superior
              a su precio. Por eso, si comprar algo de este precio te provoca
              dudas, lo mejor es que no lo compres.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Será complicado de entender si yo no tengo ni idea de Notion?
            </h2>
            <br></br>
            <p>
              En esta<i>masterclass</i> soluciono 9 grandes errores que todos,
              todos sin excepción, hemos cometido al usar Notion.{" "}
            </p>
            <p>
              Así que da igual si tu nivel es básico básico que casi que solo
              sabes abrir la aplicación, como si ya llevas meses usando Notion.{" "}
            </p>
            <p>
              Si estás empezando, aún mejor, porque conocer estos errores te
              ayudarán a no cometerlos en el futuro.{" "}
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Existe algún tipo de garantía de devolución?
            </h2>
            <br></br>
            <p>No.</p>
            <p>
              De nuevo, se trata de un producto serio y de alta calidad, y
              espero el mismo compromiso por tu parte. Si te da miedo comprarlo,
              no lo hagas.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">¿Tiene soporte?</h2>
            <br></br>
            <p>
              Amiga, si con este precio crees que el curso puede tener soporte,
              creo que tienes un problema más grande que estos 9 errores.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Qué perfil de personas le sacarán mejor partido?
            </h2>
            <br></br>
            <p>
              La respuesta a esta pregunta es muy sencilla. Le vas a sacar
              partido a esta Masterclasss si…
            </p>
            <ul>
              <li>
                Estás empezando a usar Notion (da igual que lleves 1 día que 30)
                y sientes que no termina de adaptarse a ti, que te está robando
                mucho tiempo aprenderlo. Se te hace difícil implementarlo en el
                día a día y no sabes muy bien por qué.{" "}
              </li>
              <li>
                Si llevas usando Notion meses, incluso años, y la gestión de
                tareas cada vez se hace más compleja, hasta el punto de que
                estás planteándote dejar de usarlo y migrar de nuevo a otras
                aplicaciones.{" "}
              </li>
              <li>
                Si no usas Notion pero estás pensando en implementarlo en tu
                negocio o en tu día a día y quieres aprenderlo bien, sin
                perderte por el camino.
              </li>
            </ul>
            <p>
              Y si no piensas usar Notion en tu vida, pues no sé cómo has
              acabado aquí pero esta Masterclass no es para ti.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">¿Más dudas?</h2>
            <br></br>
            <p>
              No me preguntes, no contestaré. Considero que el valor de este
              curso es cientos de veces superior a su precio y por eso no
              respondo más dudas. Si comprar algo de este precio te provoca
              dudas, lo mejor es que no lo compres.
            </p>
          </div>

          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>
        </section>
      </article>
    </>
  );
};

export default masterclass9ErroresNotion;
