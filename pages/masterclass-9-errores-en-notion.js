import React, { useState } from "react";
import StripeButton from "../components/StripeButton";
import CountdownTimer from "../components/CountDown";
import Review from "../components/Review";

const masterclass9ErroresNotion = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: "Curso + Masterclass exclusiva,",
    buttonText: "Comprar curso+masterclass",
    price: "20€",
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/link/912a9c484e699412ef02f484203a4a1541d0a22f",
  };

  const [isTimOver, setIsTimeOver] = useState(false);

  return (
    <>
      <article className=" border-2 bg-stone-50 border-stone-950 px-4 sm:p-8 rounded-xl my-8">
        <div className=" sm:overflow-hidden sm:rounded-xl"></div>

        <header>
          <p className="text-center text-red-500 mt-8 font-bold">
            *Suscripción confirmada.
          </p>
          <p className="text-center text-red-500 font-bold text-xs">
            Te acabo de enviar un correo con tu plantilla o recursos de
            bienvenida desde laura@emprendeconnotion.com (a veces puede tardar
            unos minutos en llegar, pero el correo llega). <b>Importante: </b>
            si no encuentras tu correo, revisa tu bandeja de spam o promociones,
            y para que no te vuelva a pasar eso, arrastra el correo a la pestaña
            principal y añádeme a tus contactos.
          </p>
          <br></br> <br></br>{" "}
          <p className="text-4xl underline  text-left  pb-12 font-bold ">
            Si piensas usar plantillas de Notion, esta{" "}
            <span className="italic">oferta de bienvenida </span> te interesa...
          </p>
          <div className="rounded-lg p-4 text-center  bg-yellow-300">
            <p className="font-bold sm:text-3xl  text-red-500 pb-0">
              Tienes 30 minutos para leer esto.
            </p>
            <CountdownTimer timer={30} setIsTimeOver={setIsTimeOver} />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="mb-4 font-alternate text-3xl ">
            Te explico. <br></br>
            <br></br>Tengo un curso de Notion. <br></br>
            <br></br>El curso ahora vale 20€. Y si lo compras después, también
            valdrá 20€. <br></br>
            <br></br>Peeero la{" "}
            <span className="italic">oferta de bienvenida</span>, es algo mucho
            más valioso… <br></br> <br></br>
            Verás. <br></br>
            <br></br>Si compras ahora, no solo te llevas el curso, también una{" "}
            <span className="text-red-500">
              {" "}
              masterclass de 24 minutos donde te explico los 9 errores que toda
              persona que empieza en Notion, hace mal y que solo la pérdida de
              tiempo y frustración en Notion, harán que descubra.
            </span>
            <br></br> <span className="text-3xl pt-12 block">Si lo hace.</span>
          </h1>
        </header>
        <br></br>
        <br></br>

        <section className="pt-10 ">
          <br></br>
          <br></br>
          <p>
            <b>
              No nos engañemos, Notion puede ser jodidamente enrevesado al
              empezar a usarlo.{" "}
            </b>{" "}
          </p>
          <p>A ver. </p>
          <ul>
            <li>Le ves potencial a Notion pero a la vez estás abrumada.</li>
            <li>
              Has visto tutoriales en YouTube durante horas en lugar de escribir
              esas entradas de blog que tenías planeadas y te sientes peor.
            </li>
            <li>
              Quizás has intentado duplicar algunas plantillas prediseñadas, y
              te has frustrado porque no son tan efectivas como pensabas.
            </li>
          </ul>

          <br></br>
          <br></br>
          <br></br>
          <h2 className="text-2xl pl-4">
            {" "}
            <b>
              O sea, puedes tardar meses, o solo 24 minutos, en aprender lo que
              soluciona esta masterclass (a la que{" "}
              <span className="text-red-500">
                solo tienes acceso si compras ahora
              </span>
              ):{" "}
            </b>
          </h2>

          <br></br>
          <br></br>
          <br></br>

          <p>
            x El error que comete casi todo el mundo que empieza en Notion y que
            es{" "}
            <b>
              {" "}
              la razón real de que muchas plantillas de Notion que te descargas
              de internet te estén robando más tiempo del que produces
            </b>
            (y que ningún gurú de la productividad te dice porque son los
            primeros que cometen este fallo).{" "}
          </p>
          <p>
            x Por qué los
            <b>
              {" "}
              second brain hechos en Notion que te recomiendan los gurús no te
              funcionan,
            </b>
            y cómo empezar a crear uno que de verdad se adapte a ti y no dejes
            de usar con el tiempo. En el minuto 08:00.
          </p>
          <p>
            x Los 3 problemas que un 99% de usuarios de Notion experimentan al
            empezar en Notion y que cuando veas su solución te sentirás un
            manazas por lo fácil que es.
          </p>
          <p>
            x La razón por la que muchos usuarios de Notion siguen utilizando
            otras quince apps (como recordatorios, trello, assana y demás),{" "}
            <b>
              simplemente porque no conocen el truco que doy en el minuto
              05:44.{" "}
            </b>
          </p>
          <p>
            x{" "}
            <b>
              La manera de tener organizadas todas tus páginas de Notion como lo
              hacen las empresas serias,
            </b>{" "}
            y cómo podrás hacerlo tú también de una manera súper sencilla para
            no parecer un desastre en tu organización interna (aunque lo
            seas).{" "}
          </p>
          <p>
            x{" "}
            <b>
              Ejemplos reales (o sea, que puedes aplicar nada más ver la
              masterclass) de cómo dejar de tomar notas con posits, servilletas,
              apps de notas, o los otros 5 lugares donde te las sueles apuntar,
              para pasar a usar solo Notion.
            </b>{" "}
            Con el ahorro de tiempo y duplicidad de información que
            conlleva.{" "}
          </p>

          <br></br>
          <br></br>
          <br></br>
          <Review name="Jose Luis Gasion," job="Team Lider en grupo Élite">
            "Ante todo claridad. He estado investigando por google, youtube o
            tik tok, inviertiendo muchisimas horas, descargando plantillas que
            no sabia como usar, y abrumado por exceso de informacion. Aqui de
            una manera clara y concisa tengo todo lo necesario para poner en
            marcha mi Notion. "
          </Review>

          <br></br>
          <br></br>
          <br></br>
          <h2>
            {" "}
            <b>
              Si quieres ser más productivo, ordenado y gestionar mejor tu
              tiempo… Notion te puede ayudar mucho. O no.
            </b>
          </h2>
          <br></br>
          <h2 className="pl-6">
            {" "}
            <b>
              Si cometes los siguientes{" "}
              <span className="text-red-500">fallos</span>, seguro que no:
            </b>
          </h2>
          <br></br>
          <br></br>
          <br></br>

          <p>
            x Los cinco atajos de teclado que{" "}
            <b>
              por no usar están haciéndote perder casi dos horas a la semana.
            </b>{" "}
            Puede que 4 los conozcas (o no), pero hay uno que nunca he
            compartido hasta la fecha y que cambiará tu forma de interactuar con
            la aplicación. Lo tienes en el minuto 22:29.
          </p>
          <p>
            x Por qué{" "}
            <b>
              {" "}
              querer organizar todo en notion desde el principio es un error de
              principiante{" "}
            </b>
            y por qué puede estar matando tu productividad diaria. En el minuto
            00:55 de la masterclass.{" "}
          </p>
          <p>
            x <b>Qué estás haciendo mal para que tu Notion vaya lento</b>{" "}
            (tablas que tardan en cargarse, páginas que tardan la vida en
            duplicarse…), y las 3 acciones concretas que te ayudarán a
            solucionarlo desde el principio. A partir del minuto 13:10.{" "}
          </p>
          <p>
            x{" "}
            <b>
              La solución a un problema que no la he visto resolver a ningún
              gurú de Notion en todo YouTube. Ninguno.{" "}
            </b>
            Yo la he aprendido experimentando con la app y he decidido
            compartirla contigo en el minuto 04:55 de la masterclass.{" "}
          </p>
          <p>
            x{" "}
            <b>
              Por qué casi nadie usa Notion en el móvil (y hace que muchos sigan
              desperdigando notas en diferentes apps)
            </b>
            , y las 3 formas de solucionarlo que te explico en el minuto
            18:09.{" "}
          </p>
          <p>
            x{" "}
            <b>
              La alternativa a crear decenas de plantillas y bases de datos
              complejas en Notion (que luego dejas de usar por lo complejas que
              son),{" "}
            </b>
            y que te ahorrará todo ese tiempo y la frustración del
            comienzo.{" "}
          </p>

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

          <h2 className=" font-alternate text-3xl leading-[75px]">
            {" "}
            Como ves, empezar en Notion{" "}
            <span className="text-red-500">es difícil.</span>
          </h2>
          <h2 className="text-3xl">
            Pero <span className="italic">aprender </span>
            Notion, puede no serlo.
          </h2>
          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <p className="text-red-500">Atiende.</p>
          <br></br>

          <br></br>

          <p>El problema es que estás hasta los ovarios del desastre actual.</p>
          <p>Lo estás. </p>
          <p>
            x Porque te sientes{" "}
            <b>
              dispersa entre un montón de herramientas y tecnologías diferentes,
              y de alguna forma piensas que Notion es la solución.{" "}
            </b>{" "}
          </p>
          <p>
            x Haces listas de objetivos e ideas al principio del año... que
            nunca vuelves a revisar
          </p>
          <p>
            <b>x Pierdes muchísimo tiempo</b> intentando recordar dónde has
            guardado tus archivos
          </p>
          <p>
            <b>x Te sientes abrumada</b> como si no pudieras mantenerte al día
            con tus obligaciones
          </p>
          <p>
            <b>x No tienes un sistema consistente</b> para guardar archivos o
            hacer seguimiento de tus tareas.
          </p>
          <br></br>

          <p>
            Pero si te apuntas a este curso (+ masterclass, solo ahora) tienes
            que tener una cosa clara:{" "}
          </p>
          <br></br>
          <h2>Plantillas ≠ Sistema</h2>
          <br></br>
          <br></br>
          <p>Entonces.</p>
          <p>Yo te puedo enseñar Notion. </p>
          <p>
            Te puedo compartir doscientas plantillas gratuitas si es lo que
            quieres (en el curso hay unas cuantas).{" "}
          </p>
          <p>
            <b>
              Que si no tienes un sistema, te volverá a pasar lo mismo uses
              Notion, Trello, Google Tasks, o su madre.{" "}
            </b>{" "}
          </p>
          <br></br>
          <br></br>
          <br></br>
          <p className="mx-12 text-red-500">Yo tenía ese problema.</p>
          <br></br>
          <p>Había usado doscientas apps.</p>
          <p>Y Notion en sí, no lo solucionó.</p>
          <p>
            Lo que lo solucionó fue el sistema que Notion me permitió crear.
          </p>
          <p>
            Porque eso es Notion:{" "}
            <b>
              una app que te permite crear un sistema centralizado de trabajo
              adaptado a ti.{" "}
            </b>
          </p>
          <br></br>
          <br></br>
          <br></br>
          <Review name="Andrea Marcos" job="Profesora de yoga y pilates">
            "WTF, estaba ahora con el curso de Notion y voy ya por la lección 7.
            Pero, qué locura, que te haces una página web así de la nada. Y yo
            dándole los 2000€ del kit digital a un tío y esperando 4 meses. Me
            acabas de dar la vida, gracias. Me encanta. Amo tu curso. "
          </Review>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="">
            Y en este curso + masterclass te voy a enseñar a crear y adaptar
            esos sistemas para ti (sin necesitar a más gurús híperproductivos).
          </h2>
          <br></br>
          <br></br>
          <br></br>

          <p>
            <b>√ </b> Hay gente que dice que un hábito se hace en 21 días, otros
            que en un mes, y luego estamos la mayoría que después de un año nos
            sigue costando. <b>Esta plantilla no lo hará más fácil,</b> pero al
            menos serás consciente de tu avance.
          </p>
          <p>
            <b>
              √ El problema frustrante que ponía de mal humor a mi pareja
              después de 2 años usando Notion en su trabajo (o sea, notion en
              equipo),
            </b>{" "}
            que nadie supo resolverle y le resolví yo en 2 minutos, para que a
            ti no te pase. En la lección 13.
          </p>
          <p>
            <b>
              √ Las 2 funcionalidades que siempre dan miedo de usar en bases de
              datos,{" "}
            </b>{" "}
            pero que te encantarán y no pararás de usar cuando te las explique
            en la lección. Módulo 4.
          </p>
          <p>
            <b>
              √ Cómo una cosa muy simple y efectiva te ayudará a mantener a raya
              el{" "}
            </b>{" "}
            desorden de tomar notas rápidas.
          </p>
          <p>
            <b>
              √ El plan gratuito no incluye IA, pero eso no significa que no
              puedas automatizar...
            </b>{" "}
            Te enseñaré cómo acortar tus acciones más frecuentes con un solo
            botón (como anotar un gasto), o cómo crear reuniones periódicas
            automáticamente.
          </p>
          <p>
            <b>√ </b> Te enseñaré <b>todo para lo que yo uso Notion,</b> tanto a
            nivel personal como profesional para que tengas referencias reales
            de todo que luego tú puedas aplicar. Porque sí, en cuanto termine el
            taller, serás capaz de aplicar todo lo que hayamos visto.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>
            <b>
              √ La forma más simple y efectiva de llevar un recuento de tus
              gastos
            </b>{" "}
            mensuales, diarios, o por categorías, sin tener que recurrir a excel
            ni a ninguna otra app externa, en la lección 10.{" "}
          </p>
          <p>
            <b>
              √ Lo mejor que puedes hacer un domingo por la tarde es organizar
              tu próxima semana
            </b>{" "}
            , y eso lo podrás hacer desde la lección 3.{" "}
          </p>
          <p>
            <b>√ </b> Una template sin la que yo no podría vivir, y que llevo
            usando desde hace más de 4 años. La crearás tú misma en la lección
            11.
          </p>
          <p>
            <b>
              √ Si siempre quisiste tener tu propia página web, en la lección 7
              veremos la forma de crear páginas web gratuitas,
            </b>{" "}
            con formularios de contacto también gratuitos, que no te llevará ni
            una tarde. Sin wordpress ni historias raras.
          </p>
          <p>
            <b>√ </b> Cuando llega nochevieja todo el mundo escribe en una nota
            que hará más deporte y leerá más libros el año que viene…{" "}
            <b>
              Pero luego no se acuerdan ni del libro, ni del deporte, ni de la
              noche, ni de la nota.
            </b>{" "}
            En la lección 16 no solo escribirás tus objetuvos sino que podrás
            llevar un seguimiento con barras de progreso, así aunque tengas una
            resaca del quince en año nuevo, no perderás tu objetivo durante el
            año.
          </p>
          <p>
            <b>
              √ ¿Sabes ese momento cuando no sabes qué serie ver a
              continuación…{" "}
            </b>{" "}
            y te recomendaron una ayer, solo que no la recuerdas porque no la
            apuntaste? Pues en la lección 13 veremos cómo hacer la herramienta
            para que eso no te pase. Y si eres de leer, lo mismo.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <div className="flex flex-col lg:flex-row items-center md:items-start space-x-4 ">
            <Review name="José L." job="emprendedor digital en clubjobs.es">
              "El curso me esta encantando, super agradecido. "
            </Review>
            <Review name="Laura R." job="neuróloga">
              "Muchas gracias por tu soporte! "
            </Review>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <p>
            <b>
              √ Por qué entendiendo cómo funcionan las muñecas rusas, sabrás más
              de Notion que un 90% de los gurús{" "}
            </b>{" "}
            que hacen tutoriales de Notion.
          </p>
          <p>
            <b>√ </b> ¿Sabes eso de buscar una aguja en un pajar… te enseñaré la
            sencilla forma en la que puedas encontrar cualquier documento o
            página en Notion aunque lo hayas dado por perdido.
          </p>
          <p>
            <b>√ </b> Notion tiene muchas cosas de configuración. Muchísimas.
            Pero en este taller te diré las que realmente te interesan{" "}
            <b>ahora</b>, no estaremos media hora con un vídeo introductorio de
            cómo gestionar el panel-de-control-de-usuarios-administrados que
            luego no te sirve de nada. Solo lo importante, todo lo importante,
            en la lección 5.
          </p>
          <p>
            <b>√  En qué se parece Notion a una estantería,</b> y por qué cuando
            entiendas esto podrás crear tus propios sistemas en Notion que de
            verdad se adapten a tus necesidades.
          </p>
          <p>
            <b>√ </b> Da igual si no sabes nada de Notion o si has visto ya 12
            vídeos en youtube que te han dejado más confusa de lo que estabas.
            Cuando acabe el taller, <b>sabrás usar Notion.</b>
          </p>
          <p>
            <b>√ Las 3 formas de organizar tu espacio de trabajo </b> que te
            permitirán mantener el orden aunque empieces a tener mucha cosa: que
            si diario, que si cursos, que si notas, que si equipo, que si
            tareas… Yo llevo 4 años usando Notion, y me sigue funcionando.
          </p>
          <br></br>
          <br></br>
          <br></br>

          <p className="ml-12">Todo esto, lo aprendes en una tarde.</p>
          <p className="ml-12">
            Si algo de esto te interesa, puedes acceder ya mismo al contenido
            desde aquí:
          </p>

          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
            isDisabled={STRIPE_BUTTON_CONFIG.isDisabled}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>

          <br></br>
          <br></br>
          <br></br>

          <p>Entonces.</p>
          <p>Entonces.</p>
          <br></br>
          <h2 className="text-3xl">
            Si estás pensando que puedes aprender Notion gratis en
            YouTube...{" "}
          </h2>
          <br></br>
          <br></br>
          <p>
            <b>La respuesta es: claro que sí. </b>
          </p>
          <p>
            Por ahí hay gente friki de Notion que sabe un huevo con unos
            tutoriales estupendos.{" "}
          </p>
          <p>
            <b>El problema no es aprender Notion, melón. </b>
          </p>
          <p>
            El problema es que <i>sólo</i> aprendas Notion per se, en lugar de
            <i> cómo crear sistemas en Notion adaptados a ti</i>.
          </p>
          <p>Es una sutil pero gran diferencia. </p>
          <br></br>
          <p className="ml-12">Luego no digas que no te avisé. </p>
          <br></br>
          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
            isDisabled={STRIPE_BUTTON_CONFIG.isDisabled}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="pb-12">Más preguntas.</h1>

          <div className="pb-12">
            <h2 className="text-2xl ">¿Qué incluye la compra?</h2>
            <br></br>
            <p>
              1. <b>El curso</b>. Tiempo total del curso unas tres horas en
              vídeo. Esas 3 horas se distribuyen en 20 lecciones de menos de 10
              minutos. Cada lección tiene una práctica. O sea, practicas todo lo
              que ves y lo aplicas para ti.
            </p>
            <p>
              2. Solo si compras ahora,{" "}
              <b>la Masterclass exclusiva: 9 errores en Notion</b>. Consiste en
              una conversación de 24 minutos en formato vídeo. En cuanto la
              compres recibirás un mensaje de correo electrónico que te
              explicará cómo acceder a una plataforma online donde podrás verla
              tantas veces como quieras.{" "}
            </p>
            <p>
              Repito. Sólo tendrás acceso a la masterclass si compras ahora.
              ¿Por? Pues porque quiero tener un detalle con la gente que se
              apunta de nuevas a la newsletter. Simplemente. Quité esta
              masterclass de la venta al público hace meses después de haber
              vendido decenas, y te aseguro que no volverá a estar disponible
              nunca más.{" "}
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">¿Cómo funciona?</h2>
            <br></br>
            <p>
              Compras. A los pocos minutos te llega un email exclusivo con una
              url de acceso y contraseña para acceder a la plataforma online:
              tanto para el curso, como para la masterclass.
              <br></br> 1. Primer vídeo del curso: ves la lección, haces la
              práctica, corriges la práctica (en el propio vídeo de la lección
              viene resuelta). 2. Segundo vídeo: ves la lección, haces la
              práctica, corriges la práctica. / 3. Tercer vídeo: ves la lección,
              haces la práctica, corriges la práctica. / Así hasta llegar a 20 y
              completar el curso.
              <br></br>Las prácticas son sistemas de organización que vas a
              aprender a construir y adaptar a ti (plantillas de gastos, diario,
              gestión de proyectos…). Por lo que en una tarde puedes tener el
              curso terminado, y un sistema centralizado de organización creado
              y en funcionamiento.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Notion es para mí?</h2>
            <br></br>

            <p>
              √ Es para cualquier persona con la necesidad de una organización
              integral y clara, a nivel personal o de negocio. Este curso te
              dará las claves para poder adaptar a ti cualquier sistema creado
              en Notion.
            </p>
            <p>
              √ Es para ti si encuentras que tus herramientas actuales son
              limitadas y fragmentadas.
            </p>
            <p>
              √ Es para ti si buscas más control sobre cómo visualizar tu
              planificación y ejecución diaria. Piensa en Notion como una caja
              gigante de piezas de Lego donde tú decides cómo quieres que se vea
              y funcione.
            </p>
            <p>
              √ Es para ti si la personalización de tu flujo de trabajo es una
              prioridad (para mí lo era y no podía personalizarlo con otras apps
              tradicionales), y deseas un control más detallado sobre tus
              sistemas.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Para quién NO está indicado este curso?
            </h2>
            <br></br>
            <p>
              x Si buscas algo que funcione "de inmediato". Notion requiere una
              curva de aprendizaje, este curso es esa curva.
            </p>
            <p>
              x Para empresas con grandes equipos que necesitan una solución
              personalizada. En el curso veremos cuestiones básicas sobre
              gestión de equipos, perfecto y suficiente para equipos pequeños y
              emprendedores individuales. Si formas parte de un equipo grande y
              necesitas una formación específica de Notion para tu empresa
              considera una consultoría.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Qué necesito?</h2>
            <br></br>
            <p>
              Un ordenador y conexión a internet. No hace falta que tengas una
              cuenta de Notion creada, en el propio curso lo haremos juntas.
              Además, Notion puede usarse desde móvil o tablet, claro que sí.
              Pero una cosa es el uso, y otra la construcción de los sistemas de
              trabajo que ya te adelanto que la forma más cómoda es desde el
              ordenador, y por eso el curso está planteado así.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Notion es gratuito?</h2>
            <br></br>
            <p>
              Sí. Existen planes de pago pero el curso está pensado para{" "}
              <b>uso individual o pequeños equipos con una cuenta gratuita.</b>{" "}
              Si más adelante necesitas pasarte al plan de pago (por ejemplo
              porque trabajas en equipo o porque quieres la IA), en el curso te
              explico cómo se hace. Pero te adelanto que para un uso individual
              normal, lo que hacemos la mayoría, el gratuito va genial.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Explicas IA en Notion? </h2>
            <br></br>
            <p>
              Damos todo aquello que está incluido en el plan gratuito de
              Notion, que no es poco. Para la IA hay que pagar, así que no. Pasa
              lo mismo con las automatizaciones, tampoco las vemos ya que hace
              falta plan de pago.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Con este curso aprenderé Notion al completo?{" "}
            </h2>
            <br></br>
            <p>
              Vas a conseguir el nivel necesario para crear tus propios sistemas
              de organización profesionales y con automatizaciones utilizando el
              plan gratuito, tanto a nivel personal como para tu negocio. Este
              es el objetivo del curso, ni más ni menos. Para lograr esto, sí,
              el curso llega a un nivel de uso avanzado en Notion y muy
              personalizado, pero las funcionalidades de planes de pago (como
              automatizaciones de pago o IA) no las vemos. Por el mismo motivo
              tampoco veremos fórmulas avanzadas para las que básicamente
              necesitas saber de programación porque no, ese no es el objetivo
              del curso. Si tienes necesidades técnicas para tu negocio, lo
              mejor es que contrates una consultoría.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Hay soporte? </h2>
            <br></br>
            <p>
              Sí. Tienes dos semanas para preguntarme dudas por email desde el
              momento de la compra. Solo contestaré dudas que estén relacionadas
              con el contenido del curso y te daré las indicaciones sobre cómo
              enviármelas una vez compres. Podría dar más tiempo, pero no
              quiero. Son “solo” dos semanas para crearte la obligación de hacer
              el curso y terminarlo en ese tiempo. Te lo explico todo dentro del
              curso.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Cuánto tiempo me llevará el curso? </h2>
            <br></br>
            <p>
              Depende de ti. Quiero decir, somos adultos. Yo puedo decirte que
              el tiempo total de las grabaciones es de tres horas y pico. Lo que
              dediques a practicar e implementar y el ritmo al que lo hagas… es
              cosa tuya. Pero recuerda, tienes dos semanas de soporte dsde el
              momento de compra.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Hasta cuándo estará el curso disponible?{" "}
            </h2>
            <br></br>
            <p>
              Una vez accedas, podrás ver todos los vídeos, todas las veces que
              quieras, al menos durante 1 año desde el momento de compra. No te
              digo parasiempre porque puedo morirme o cualquier otra cosa
              extraña que no dependa de mí. Pero vamos, que si quieres ver los
              vídeos 300 veces porque es lo que te mola, puedes.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Hay garantía de devolución? </h2>
            <br></br>
            <p>
              No. Y no habrá nunca. Las plantillas de Notion se entregan
              inmediatamente después de la compra. Este es un producto serio y
              espero el mismo compromiso por tu parte. En cualquier caso, si no
              estás seguro no lo compres.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">No sé si es caro o es barato. </h2>
            <br></br>
            <p>
              Mira. Hay doscientos totorales gratuitos de Notion en YouTube.
              Pero te voy a contar una historia real para explicarte por qué
              este curso si te lo doy gratis… no te serviría de nada. <br></br>{" "}
              En 2012, un estudio de Stanford dividió a estudiantes en tres
              grupos para un curso online. <br></br> – El grupo que recibió el
              curso gratis tuvo una tasa de finalización del 35%. <br></br> –
              Los que pagaron $20 llegaron al 56%. <br></br> – Y los que
              invirtieron $100 alcanzaron el 78%.
            </p>
            <p>
              Entonces. Yo quiero compromiso por tu parte. No te voy a cobrar
              100€ (aunque podría, y lo más probable es que vaya subiendo el
              precio). Así que, sí, es barato. Pero solo tú sabes si te conviene
              este curso + masterclass o no.
            </p>
            <p>
              Si es que sí, accedes abajo al curso y a la masterclass en
              exclusiva, solo ahora por este precio abajo.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Volverás a vender la{" "}
              <span className="text-red-500">masterclass exclusiva</span> más
              adelante?{" "}
            </h2>
            <br></br>
            <p>
              No. Después de más de un año a la venta y después de haber ayudado
              a mucha gente, decidí que sólo se podría acceder en exclusiva
              ahora, nada más suscribirte a la newsletter como detalle de
              bienvenida.
            </p>
            <p>
              Estoy segura de que después de muchos meses usando Notion, viendo
              videos en Inglés y leyendo artículos de Notion, cómo he hecho yo,
              podrás aprender por tu cuenta alguno de los 9 fallos que te
              explico en la masterclass. Puedes tardar meses, o solo 24 minutos,
              que es lo que dura.
            </p>
            <p>Repito.</p>
            <p>
              <b>
                Esta masterclass exclusiva no se va a volver a vender al
                público. Ni por separado. Ni más adelante.{" "}
              </b>
            </p>
            <p>
              <b>Simplemente, la única forma de acceder a ella, es ahora. </b>
            </p>
          </div>

          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>
          <Review name="N. Lucio" job=" Diseñadora de Interiores">
            "El curso es muy top: tener todo en una simple página me ayuda un
            montón, los vídeos son cortos pero con contenido muy potente, y yo
            que soy bastante movidita, me ayudan mucho a centrarme y sentarme. "
          </Review>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>
            Nos vemos dentro, o no.
            <br></br>
            <br></br>
            Laura de Arquer
            <br></br>
          </p>
        </section>
      </article>
    </>
  );
};

export default masterclass9ErroresNotion;
