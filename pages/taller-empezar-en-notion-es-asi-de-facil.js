import React from "react";
import StripeButton from "../components/StripeButton";

const TallerEmpezarEnNotionEsFacil = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: " Taller Empezar en Notion es fácil",
    buttonText: "Comprar taller",
    price: "60€",
    urlStripe: "https://buy.stripe.com/test_14kdUX6n6geJbSw288",
  };
  return (
    <>
      <article className=" border-2 bg-stone-50 border-stone-950 p-4 rounded-xl my-8">
        <div className=" sm:overflow-hidden sm:rounded-xl"></div>
        <section className="pt-10 ">
          <h1 className="mb-4 font-alternate text-4xl leading-[52px]">
            Si te digo que busques dónde tienes tus contraseñas, o los apuntes
            del último curso que has hecho, o el listado de tareas de ayer…
            ¿sabrías decirme dónde está? ¿y en cuántos sitios diferentes?
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="text-xl">
            Cuando una persona nunca encuentra nada porque no sabe si lo ha
            apuntado en notas del móvil, en recordatorios o en un posit encima
            de la mesa… y logra aprender rápidamente Notion, siendo capaz de
            tener su escritorio del ordenador limpio y sin miles archivos de
            word, tiene que haber algo en su manera de organizarse con Notion
            que muchas otras personas querrían saber.
          </h2>
          <br></br>
          <br></br>
          <br></br>
          <h2>
            Y en esta página, te voy a contar cómo conseguirlo. Pero primero,
            déjame que te cuente la hisotria de Cris…
          </h2>
          <br></br>
          <br></br>
          <br></br>
          <p>
            Cris es una tía súper curranta que mientras trabaja, a veces más de
            8 horas al día, está estudiando y pagándose la carrera de
            psicología.{" "}
          </p>
          <p>Te haces una idea del perfil.</p>
          <p>
            Pues hace unas semanas quedamos cuatro amigas a cenar, entre ellas
            Cris.
          </p>
          <br></br>
          <p>
            Y mientras dábamos un paseo para bajar la hamburguesa, me empezaron
            a preguntar qué era eso de Notion porque no lo habían oído en su
            vida.{" "}
          </p>
          <p>
            Así que en lugar de explicárselo le pregunté a Cris que dónde se
            apunta ella sus contraseñas... Y me dijo que a veces en una libreta
            que tiene en el cajón del salón, y que otras veces en una nota del
            móvil.{" "}
          </p>
          <br></br>
          <p>¿Y los apuntes de la carrera? </p>
          <p className="pl-6">
            - A veces a mano. A veces en un word. A veces en un google doc.{" "}
          </p>
          <br></br>
          <p>
            ¿Y dónde tiene las reflexiones del último libro de psicología que ha
            leído?{" "}
          </p>
          <p className="pl-6">
            - Subrayados en esos libros. O posits dentro de esos libros.{" "}
          </p>
          <br></br>
          <p>¿Y dónde están esos libros?</p>
          <p className="pl-6">No sé. Quizás prestados, quizás en un cajón. </p>
          <br></br>
          <p>
            ¿Y si necesita hacerse el típico listado de tareas en el trabajo?{" "}
          </p>
          <p className="pl-6">
            - Pues en una nota del móvil. Bueno, a veces también en un posit. O,
            lo mejor, directamente en su cabeza.{" "}
          </p>
          <br></br>
          <p>¿Y sus objetivos anuales de vida? </p>
          <p className="pl-6">
            Sí, esta pregunta fue a joder. Cuando estás empezando un proyecto o
            en su caso estudiando porque quiere cambiar su vida, tener objetivos
            claros es lo único que te da la energía de aguantar la mierda de tu
            trabajo actual.{" "}
          </p>
          <br></br>
          <p>
            La cosa es que en la mayoría de situaciones no tenía claro dónde
            coño se apuntaba las cosas.{" "}
          </p>
          <p>Y le expliqué que justo eso es Notion. Notion es paz mental. </p>
          <br></br>
          <p>
            <b>
              Notion es ese sitio donde puedes literalmente, vomitarlo todo.
            </b>{" "}
            Sin miedo de olvidarlo o de no encontrarlo. Siempre vas a tener ahí
            tu información categorizada.{" "}
          </p>
          <br></br>
          <p>
            Y da igual que sea el listado básico de to-do’s que te has hecho
            esta mañana…{" "}
          </p>
          <p>O el título de esa serie que estaban comentando en el trabajo…</p>
          <p>
            O las ideas que has tenido mientras estabas haciendo caca esta
            mañana, sobre ese proyecto profesional que estás desarrollando...{" "}
          </p>
          <p>
            O el libro que te acaban de recomendar en tu podcast favorito...{" "}
          </p>
          <p>
            O llevar un seguimiento de tus proyectos u objetivos personales,
            ojo, llevar seguimiento, no solo apuntarlos en un folio y que se
            qeuden en el cajón…{" "}
          </p>
          <br></br>
          <p>Bueno. </p>
          <p>
            Que Notion es muy guay y todo lo que quieras, pero un par de días
            después…{" "}
          </p>
          <p>Cris estaba desquiciada. </p>
          <br></br>
          <p>
            Me dijo que le había picado el gusanillo de Notion. Hasta aquí todo
            bien.{" "}
          </p>
          <br></br>
          <h3 className="font-alternate pl-8">
            Pero también me dijo que estaba perdiendo horas y horas viendo
            tutoriales gratuitos y duplicando plantillas de supuestos gurús de
            Notion que luego no le servían para nada, porque por muy bonitos que
            fueran, eran demasiado complejos o no le habían enseñado realmmente
            cómo podía personalizarlos para lo que ella necesitaba.{" "}
          </h3>
          <br></br>
          <p>Se sentía confusa y tonta. </p>
          <p>Y te aseguro que tonta, no es. </p>
          <br></br>
          <p>
            Lo malo: esto no le ha pasado solo a Cris, es que le pasa a un 99%
            de gente que empieza en Notion.{" "}
          </p>
          <p>
            Lo bueno: igual que Cris salió del bucle, tú también puedes. ¿Cómo?
            Con lo que voy a contar en este taller.
          </p>
          <br></br>
          <p>
            Notion es tan personalizable, que si empezamos a usarlo sin tener a
            alguien que nos guíe podemos terminar trabajando PARA Notion en
            lugar de CON Notion.
          </p>
          <p>Es una sutil diferencia.</p>
          <p>
            Pero si aprendes Notion como te explico en este taller… ese móvil
            lleno de notas y recordatorios que terminas no abriendo nunca más,
            va a desaparecer.{" "}
          </p>
          <br></br>
          <h3 className="font-alternate pl-8">
            O sea, en este taller no sólo vas a aprender a utilizar Notion paso
            a paso y de forma efectiva (que no es poco). Es que vas a conseguir
            un sistema de organización para todas esas notas, libros, tareas,
            apuntes y objetivos que, de tan sencillo que es, es efectivo.
          </h3>
          <br></br>

          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>
          <br></br>
          <h2 className="text-2xl">
            Esto es parte de lo que encontrarás en el directo…
          </h2>

          <br></br>

          <ul className="pl-6">
            <li>
              Te enseñaré <b>todo para lo que yo uso Notion</b> , tanto a nivel
              personal como profesional para que tengas referencias reales de
              todo que luego tú puedas aplicar. Porque sí, en cuanto termine el
              taller, serás capaz de aplicar todo lo que hayamos visto.
            </li>

            <li>
              El truco que te permitirá{" "}
              <b>
                usar Notion en el móvil{" "}
                <span className="text-red-500">igual</span> de rápido que en el
                ordenador.
              </b>
            </li>

            <li>
              <b>
                Por qué entendiendo cómo funcionan las muñecas rusas, sabrás más
                de Notion que un 90% de los gurús
              </b>{" "}
              que hacen tutoriales en Youtube.
            </li>

            <li>
              <b>
                El problema frustrante que ponía de mal humor mi pareja después
                de 2 años usando Notion en su trabajo,
              </b>{" "}
              que nadie supo resolverle y cómo se lo expliqué yo en 2 minutos
              para que a ti no te pase.
            </li>

            <li>
              <b>
                Las 2 funcionalidades que siempre dan miedo de usar en bases de
                datos,
              </b>{" "}
              pero que te encantarán y no pararás de usar cuando te las explique
              en la lección.
            </li>

            <li>
              <b>
                La herramienta más práctica y potente de Notión y cómo
                utilizarla,
              </b>{" "}
              <span className="text-red-500">
                que conseguirá que tus recetas, vacunas de tu perro, tus gastos,
                apuntes, lo-que-sea, estén categorizadas aunque seas un puto
                desastre.
              </span>
            </li>
          </ul>

          <br></br>
          <br></br>
          <br></br>

          <h3 className="font-alternate pl-8">
            Por cierto, el taller incluye una plantilla que te va a parecer tan
            fácil de usar después del taller que pensarás que hasta tu madre que
            no sabe escribir bien en el whatsapp sabría usarla (o sea, no te
            pasará como otras plantillas de internet que luego no sabes ni por
            dónde coger y terminas no usándola).
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <p>Sigo...</p>

          <ul className="pl-6">
            <li>
              Empezar la casa por el tejado: lo primero que debes saber{" "}
              <b>
                cuando abras Notion por primera vez, y que casi todo el mundo
                aprende mal.
              </b>
            </li>

            <li>
              <b>
                Cómo una cosa muy simple y efectiva te ayudará a mantener a raya
                el desorden de tomar notas rápidas.
              </b>
            </li>

            <li>
              <b>
                ¿Sabes eso de buscar una aguja en un pajar… te enseñaré la
                sencilla forma en la que puedas encontrar cualquier documento o
                página en Notion aunque lo hayas dado por perdido.
              </b>
            </li>

            <li>
              Notion tiene muchas cosas de configuración. Muchísimas. Pero en
              este taller te diré las que realmente te interesan ahora, no como
              otros gurús que enseñan en un vídeo introductorio hasta cómo
              gestionar el panel-de-control-de-usuarios-administrados. Solo lo
              importante, todo lo importante, en la lección 4.
            </li>

            <li>
              <b>En qué se parece Notion a una estantería,</b> {""}y por qué
              cuando entiendas esto podrás crear tus propios sistemas en Notion
              que de verdad se adapten a tus necesidades.
            </li>

            <li>
              Da igual si no sabes nada de Notion o si has visto ya 12 vídeos en
              youtube que te han dejado más confusa de lo que estabas.{" "}
              <b> Cuando acabe el taller, sabrás usar Notion.</b>
            </li>
          </ul>
          <br></br>
          <br></br>
          <br></br>

          <h2 className="text-2xl text-red-500">
            Y esto es lo que incluye la plantilla que te doy con el taller…
          </h2>

          <br></br>
          <br></br>

          <ul className="pl-6">
            <li>
              <b>
                La forma más simple y efectiva de llevar un recuento de tus
                gastos
              </b>
              {""} mensuales, diarios, o por categorías, sin tener que recurrir
              a excel ni a ninguna otra app externa.
            </li>

            <li>
              <b>
                Lo mejor que puedes hacer un domingo por la tarde es organizar
                tu próxima semana
              </b>{" "}
              , y eso lo podrás hacer con esta plantilla.
            </li>

            <li>
              Incluye una template sin la que yo no podría vivir, y que llevo
              usando desde hace más de 3 años.{" "}
            </li>
            <li>
              Mi madre trabajaba como enfermera, cuidaba de 7 hijos, y siempre
              se acordaba de TODO y llegaba a tiempo a TODO. ¿Su secreto? Una
              agenda de anillas. Yo lo de llegar puntual lo llevo un poco mal,
              pero{" "}
              <b>
                {" "}
                he copiado su método y adaptado a Notion para que tú también
                puedas llevar un registro igual de eficaz que su agenda de
                anillas.
              </b>{" "}
              Te lo contaré en la última lección 15.
            </li>
            <li>
              Cuando llega nochevieja todo el mundo escribe en una nota que hará
              más deporte y leerá más libros el año que viene…{" "}
              <b>
                Pero luego no se acuerdan ni del libro, ni del deporte, ni de la
                noche, ni de la nota.
              </b>{" "}
              En esta plantilla no solo escribirás sino que podrás llevar un
              seguimiento, así aunque tengas una resaca del quince en año nuevo,
              no perderás tu objetivo durante el año.
            </li>

            <li>
              Hay gente que dice que un hábito se hace en 21 días, otros que en
              un mes, y luego estamos la mayoría que después de un año nos sigue
              costando. <b> Esta plantilla no lo hará más fácil,</b> pero al
              menos serás consciente de tu avance.
            </li>

            <li>
              <b>
                ¿Sabes ese momento cuando no sabes qué serie ver a continuación…
              </b>{" "}
              y te recomendaron una ayer, solo que no la recuerdas porque no la
              apuntaste? Pues esta plantilla incluye la herramienta para que eso
              no te pase. Y si eres de leer, tampoco te pasará.
            </li>
          </ul>
          <p>Entre otros.</p>

          <br></br>

          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>
          <br></br>
          <h2 className="text-2xl">Te contaría más, pero no quiero.</h2>

          <br></br>

          <p>
            Podría explicar con más detalle lo que encontrarás en el directo,
            pero no lo haré, y hay un buen motivo para ello.
          </p>
          <p>
            Cuando explico lo que contiene un curso siempre me callo los mejores
            detalles. Me gusta que cuando el alumno los descubra, sonría y
            piense, «qué cabrona, pues no era tan difícil».
          </p>
          <p>Me encanta mucho provocar esa reacción.</p>
          <p>
            Cada lección contenida en este taller es tan sencilla de entender y
            tan progresiva con respecto a la siguiente, que{" "}
            <b>
              {" "}
              podrás empezar a usar Notion con seguridad nada más terminar el
              taller, o hacerte el interensate en el trabajo contando todo lo
              que sabes.
            </b>
          </p>

          <h3 className="font-alternate pl-8">Te lo digo claro,</h3>

          <br></br>

          <p>
            quizás pienses que esto no es para ti porque tú ya te organizas
            perfectamente utilizando Trello, Assana, Excel, Google docs, notas,
            y recordatorios, todas a la vez. Y no te culpo por ello.
          </p>

          <p className="text-red-500">Pero te equivocas.</p>

          <p>
            Dividir tu información entre 5 aplicaciones diferentes no solo hace
            que pierdas el tiempo duplicando información.{" "}
          </p>
          <p>
            Tanto si eres emprendedor como si usas Notion para tu uso personal,
            sabes la importancia que tienen tus notas personales.{" "}
            <b>
              Sabes lo que jode estar buscando un archivo entre 5 apps
              diferentes y después darte cuenta que lo has perdido, ese en el
              que invertiste toda la puta tarde.
            </b>
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
          <h1 className="pb-12">Preguntas frecuentes</h1>

          <div className="pb-12">
            <h2 className="text-2xl">
              No entiendo de qué va el taller. ¿Qué me vas a explicar?
            </h2>
            <br></br>
            <p>
              Te podría decir que es un curso de Notion que va de nivel básico
              hasta a nivel medio, pero no es eso. O más bien, no sólo es eso
              (porque eso lo puedes aprender más o menos con otros gurús de
              notion).{" "}
            </p>
            <p>
              Lo que conseguirás con este taller es ser capaz de crear tus
              propios sistemas de organización hechos en Notion. Podrás de
              crearte tus propias plantillas, sencillas, o con relaciones y
              fórmulas, tú decidirás con criterio. Y si te descargas/compras
              plantillas de internet, también sabrás perfectamente cómo
              adaptarlas a ti sin miedo a editarlas, porque serás capaz de
              entender la configuración interna de cualquier plantilla.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Cuándo es el taller? ¿Qué cosas recibo si compro?
            </h2>
            <br></br>
            <p>
              <b>
                <span className="text-red-500">
                  El taller consiste en un directo el día 6 de octubre a las
                  18:00 (hora España, Madrid).
                </span>{" "}
                <br></br>O sea, el 6 a las 6. Fácil de recordar.
              </b>
            </p>
            <p>
              Además del directo,{" "}
              <b>
                {" "}
                recibirás una <span className="text-red-500">
                  {" "}
                  plantilla
                </span>{" "}
                de Notion
              </b>
            </p>

            <p className="pl-6">
              {" "}
              <i>Importante</i>: Esta plantilla tendrá un nivel acorde al que
              vas a recibir en el taller, ese es el motivo de que{" "}
              <b>
                no comparta contigo la plantilla hasta que el directo haya
                finalizado.{" "}
              </b>
              Me interesa que aprendas, no que te frustres con una plantilla que
              seguramente no sepas personalizar aún.{" "}
            </p>

            <p>
              Nada más hacer la compra recibirás un email con las instruccioens
              de cómo acceder al taller y{" "}
              <span className="font-bold text-red-500">algo más… </span> Pero
              esto solo lo descubrirá la gente que acceda al taller.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">¿Cuánto dura el taller?</h2>
            <br></br>
            <p>
              No sé cuánto durará, estaremos el tiempo que haga falta, ni me
              enrollaré con paja ni cortaré a una hora.
            </p>
            <p>
              Si te tienes que ir antes, no pasa nada. Se quedará grabado y
              podrás verlo cuando quieras y las veces que quieras.
            </p>
            <p>
              En cuanto la compres recibirás un mensaje de correo eléctrónico de
              cómo acceder.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">¿Vale para mi caso?</h2>
            <br></br>
            <p>Este taller es ideal para 4 tipos personas:</p>
            <ol className="pl-6">
              <li>
                <b>Cualquier persona que no sepa dónde organizar sus cosas: </b>{" "}
                apuntes de universidad, notas de tu emprendimiento, tus gastos,
                tus hábitos… ¿Dónde van, a notas del móvil, en un posit, a
                trello, word, assana? Ese caos es el que aprender Notion te va a
                solucionar.{" "}
              </li>
              <li>
                <b> Personas que no hayan abierto Notion en su puta vida,</b>
                vamos, que ni idea de dónde se hace clic.{" "}
              </li>
              <li>
                <b>Si ya has estado viendo tutoriales</b>
                de gurús de Notion pero cada vez te confunden más. No llegas a
                pillarle el punto y sientes que pierdes más tiempo tratando de
                organizarte que trabajando.{" "}
              </li>
              <li>
                <b>
                  Si eres una persona híper organizada pero aún no has
                  encontrado esa herramienta digital que te permita clasificarlo
                  todo tanto como a ti te gustaría
                </b>
                (mi pareja dice que soy la única friki de la organización del
                mundo pero yo sé que somos más, si es tu caso, Notion y este
                curso es para ti).{" "}
              </li>
            </ol>

            <p>Y es totalmente desaconsejable si…</p>

            <ul className="pl-6">
              <li>
                Sabes organizar tu vida y además tienes un nivel avanzado en
                Notion, si es así, enhorabuena, no compres.
              </li>

              <li>
                Si tienes una empresa con un huevo de empleados y no es que
                necesites aprender Notion, es que el plan business se te queda
                corto y tienes que configurar todo un sistema para tu empresa.
                Amigo, si esta formación fuera para ti tendría que valer 50
                veces más. Mínimo.
              </li>
              <li>
                Si eres una persona pasiva incapaz de aprender currando, en
                lugar de eso, prefieres ponerte tutoriales de fondo mientras te
                tocas un pie y culpas al que enseña de que no te has enterado.
                <b> Si es tu caso, no compres.</b>
              </li>
            </ul>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              Me parece poco material para el precio que tiene.
            </h2>
            <br></br>
            <p>Entonces no lo compres.</p>
            <p>
              Te lo digo completamente en serio. No es una estrategia de venta,
              no lo compres, porque si valoras un contenido formativo por su
              duración o cantidad de contenido no tienes la mentalidad adecuada
              para sacarle provecho al curso.
            </p>
            <p>
              Es decir, lo entenderás e incluso lo podrás poner en práctica,
              pero hay pequeños detalles, cuestiones de actitud, cosas casi
              imperceptibles, que te harán tomar decisiones incorrectas que
              harán que lo que contamos en el curso no te sirva de nada.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">¿Tiene soporte? ¿Y si tengo dudas?</h2>
            <br></br>
            <p>
              <span className="font-bold text-red-500">Resolveré dudas</span>,
              pero no en directo, si no se alargará demasiado y quiero poder
              atender al máximo número de personas posible.{" "}
            </p>
            <p>
              Cuando finalice el taller en directo, me podrás enviar tus dudas
              durante dos semanas. Me parece tiempo más que de sobra para que si
              no has podido acudir al directo, puedas verlo. Pasado ese tiempo
              resvisaré todas las dudas, las agruparé y te compartiré las
              respuestas. O sea, no solo contestaré a tu duda, si no que podrás
              ver las preguntas de otras personas y que seguramente también te
              ayuden.{" "}
            </p>
            <p>
              Eso sí, responderé dudas que tengan que ver con el taller. Me
              explico. si me preguntas cómo hacer una fórmula avanzada para que
              puedas contabilizar los pelos de tu mano… pues no. No porque tenga
              nada en contra de los pelos de tu mano, sino porque{" "}
              <b>
                {" "}
                este taller va de un nivel básico a nivel medio, todo lo que se
                salga de ese nivel, por respeto a quienes lo compréis, no lo
                responderé.
              </b>{" "}
            </p>
            <br></br>
            <p>Y te digo una cosa.</p>
            <p>
              Nunca más tendrás acceso a un taller donde puedas preguntarme
              dudas de notion a este precio. Nunca.{" "}
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              Si no puedo asistir al directo… <br></br> ¿Queda grabado? ¿Durante
              cuánto tiempo tendré acceso a la grabación?
            </h2>
            <br></br>
            <p>
              Sí. Todo se quedará grabado, podrás acceder a él cuando quieras,
              las veces que quieras.{" "}
            </p>
            <p>
              Además el taller tendrá lecciones bien estructuradas, para que
              cuando vuelvas a ver la grabación te sea mucho más fácil el
              aprendizaje.{" "}
            </p>
            <p>
              Estará colgado durante al menos un año, eso está garantizado,
              aunque probablemente será más. No sé cuánto, pero vamos, que
              podrás verlo 100 veces si eso es lo que te mola.
            </p>
            <p>
              Esto es así porque alojarlo cuesta dinero, me puedo morir y mil
              otras cosas. Al ser un curso online hay varios servicios de pago
              que tienen que estar en funcionamiento para poder ofrecerlo.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">¿En qué plataforma será el directo?</h2>
            <br></br>
            <p>
              Será una conferencia por una paltaforma online. Unas horas antes
              del directo te mandaré un email con el enlace de acceso a la
              reunión .
            </p>
            <p>
              De todas formas, toda la información de acceso la encontrarás
              también en la página principal del taller a la que tendrás acceso
              nada más comprar.{" "}
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Necesito algún material para realizar el taller?
            </h2>
            <br></br>
            <p>
              En la página principal del taller tendrás todas las
              recomendacioens para venir preparada al directo.
            </p>
            <p>
              Por resumir,
              <b>
                {" "}
                tener una cuenta de Notion creada, y no sirve estar de oyente
                pasivo,
              </b>{" "}
              no aprenderás. Este no es un taller que puedas ponerte de fondo
              mientras te tocas un pie.{" "}
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Será complicado si yo no tengo ni idea de Notion?
            </h2>
            <br></br>
            <p>En absoluto. Empezaremos de 0. </p>
            <p>
              La curva de aprendizaje, para que te hagas una idea de la
              complejidad, es parecida a la que te llevó aprender Whatsapp, por
              ponerte un ejemplo.{" "}
            </p>
            <p>
              ¿Esto quiere decir que Notion es fácil de aprender? No te voy a
              mentir, si fuera tan intuitivo no estarías comprando esto, ¿no?
              Pero el taller está pensado para que el aprendizaje sea tan
              sencillo, que cuando acabes digas joder, pues en realidad sí que
              era fácil.{" "}
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Existe algún tipo de garantía de devolución?
            </h2>
            <br></br>
            <p>No.</p>
            <p>
              Se trata de un trabajo serio y de alta calidad, y espero el mismo
              compromiso por tu parte. Si te da miedo comprarlo, no lo hagas.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Cuál es su precio? ¿Bajará alguna vez?
            </h2>
            <br></br>
            <p>
              El precio de este taller en directo es de 40 € y nunca bajará.
            </p>
            <p>
              Nunca hago ofertas, ni black fridays, ni rebajas, ni nada. Es más,
              si de algo puedes estar seguro es que con el paso del tiempo el
              precio subirá.
            </p>
            <p>Dicho esto, la decisión final por supuesto, es tuya.</p>
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

export default TallerEmpezarEnNotionEsFacil;
