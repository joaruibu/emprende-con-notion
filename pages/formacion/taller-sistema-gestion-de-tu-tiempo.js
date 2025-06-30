import React from "react";
import StripeButton from "../../components/StripeButton";

const TallerSistemaGestionTiempo = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: "Taller: Sistema Gestión de tu tiempo",
    buttonText: "Upss, llegas tarde",
    price: "140€",
    isDisabled: true,
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/session/554f7fe9d84b056197db3559dac594fe0acd1e92/init",
  };
  return (
    <article className=" border-2 bg-stone-50 border-stone-950 px-4 sm:p-8 rounded-xl my-8">
      <div className=" sm:overflow-hidden sm:rounded-xl"></div>
      <section className="pt-10 ">
        <h1 className="mb-4 font-alternate text-4xl leading-[52px]">
          {" "}
          Tienes tu día planeado, vas a madrugar y ser productivo, mucho.
          <br></br>
          <br></br>
          Vas a hacer lo que se supone que debes hacer y no te vas a desviar de
          tu plan.
          <br></br>
          <br></br>
          Hoy no.
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Vas a madrugar, desayunar en condiciones, ir al gym, trabajar sin
          permitir interrupciones que te sacan del foco, vas a salir a tu hora y
          regresar a casa para empezar tu proyecto personal.
        </p>
        <p>
          Y por supuesto te vas a ir dormir pronto, nada de transnochar viendo
          series de neftlix, y sin no vas a mirar el móvil dos horas antes de
          dormir, que los que saben dicen que va fatal para el insomnio.
        </p>
        <br></br>
        <p>Tienes tu día planeado.</p>
        <br></br>
        <p>Pero…</p>
        <br></br>
        <p>Pero…</p>
        <br></br>
        <p>Te levantas y tres imprevistos a primera hora.</p>
        <p>
          Se te sale la leche del microondas, lo que te querías poner está
          manchado, les un email con el proveedor que la ha liado y el wáter
          roto en casa.
        </p>
        <p>Y entonces…</p>
        <br></br>
        <p>Ay, entonces.</p>
        <br></br>
        <p>
          Entonces el desayuno en condiciones se convierte en una paquete de
          galletas y un café rápido, cancelas el gym, sales dos horas más tarde
          y cuando llegas a casa de comprar en Mercadona y hacerte el táper para
          el próximo día, te tiras al sofá y solo quieres ver Neftlix y vídeos
          de gatos en tu móvil hasta la hora de dormir, que, por supuesto, es
          tres horas después de lo que deberías.
        </p>
        <p>
          Te dices cosas como que la vida es así, que nos pasa a todos, que
          mañana irá mejor, que conseguirás sacar tiempo para tu proyecto alguna
          tarde, o que mas adelante estarás más tranquilo, cuando te asciendan,
          o cuando te echen y así cobras el paro…
        </p>
        <br></br>
        <p>¿Te das cuenta?</p>
        <br></br>
        <p>Sigo por si no te das cuenta. </p>
        <p>Por si no lo entiendes.</p>
        <p>
          Porque en realidad tú estás <i> motivada, tú quieres hacerlo.</i>
        </p>
        <br></br>
        <p>
          Simplemente, es que <i> “no tienes tiempo”. </i>
        </p>
        <p>
          Es que <i>“siempre pasan cosas”. </i>{" "}
        </p>
        <br></br>
        <p>Pero tú estás motivada. </p>
        <br></br>
        <p>Tú quieres, es la vida… que está de que no.</p>
        <p>La vida…, o si tuvieras más dinero.</p>
        <p>
          O esa cosa que te queda por aprender, ese curso que te falta por
          hacer.{" "}
        </p>
        <p>
          Si tuvieras carisma, la inteligencia o la belleza, que no tienes
          suficiente.{" "}
        </p>
        <p>
          Esa tarea que acabar o solucionar y que cuando esté hecha entonces ya
          sí, por fin podrás hacer lo que te propongas.
        </p>
        <br></br>
        <p>O el tiempo, que te falta. </p>
        <br></br>
        <p>
          {" "}
          <span className="text-red-500 italic font-bold">Lo sé</span> porque no
          te he escrito esto a ti.
        </p>
        <p>
          Me lo escribí a <b>mí </b> hace un tiempo.
        </p>
        <p>¿Y sabes qué?? que la solución, duele, acojona, escuece.</p>
        <p>
          <b>Tu mayor dificultad,</b> tu mayor enemigo, lo que te impide hacer
          lo que deberías hacer y, por tanto, conseguir lo que quieres
          conseguir, es, no tengas la menor duda, es que no asumes tu
          responsabilidad sobre tu tiempo.
        </p>
        <br></br>
        <p>
          {" "}
          <b>Porque te acojona. </b>
        </p>
        <br></br>
        <p>
          No quieres asumirla, porque eso significa aprender a priorizar y
          esforzarte, y porque es más fácil decir “me falta tiempo”.
        </p>
        <p>Y también, más de pobres, por cierto. </p>
        <p>
          Cómo le gusta a la gente decir: “estoy muy liado”, “ no tengo tiempo
          para nada”.
        </p>
        <p>
          Si tú también “estás muy liada” y “no tienes tiempo para nada”,
          quédate con una cosa, solo con una. Esta.
        </p>
        <p>
          <b>
            La responsabilidad sobre tu tiempo es todo, es la primera pieza del
            efecto dominó que lo arregla todo.
          </b>
        </p>
        <br></br>
        <p>
          Si te interesa solucionarlo apúntate al Taller: El Sistema De Gestión
          De Tu Tiempo.
        </p>
        <br></br>
        <br></br>
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
        <h2 className="font-alternate px-16 ">
          Se trata de un taller de dos días.{" "}
        </h2>
        <h2 className="font-alternate px-16 ">
          Y esto es lo que vas a aprender en el{" "}
          <span className="text-red-500">primer día…</span>
        </h2>
        <br></br>
        <br></br>
        <ul className="pl-6">
          <li>
            <b>
              No volverte a acostar con la sensación de culpa por no haber hecho
              lo que querías y decir, “bueno, mañana lo vuelvo a intentar.”
            </b>
          </li>

          <li>
            <b>
              El extraño y sencillo hábito que hacen el 100% de los
              asalariados{" "}
            </b>
            (y casi ningún emprendedor), por el que son capaces de tomarse una
            cerveza al salir del trabajo, o ir al gym, o hacer cerámica, o
            tocarse la minga, sin sentir culpa por no seguir hincando codos.
            Esto me pasó mucho tiempo a mí.
          </li>

          <li>
            <b>
              Si empiezas el día apagando fuegos (que algunos ni son tuyos), y
              dejas lo importante para después,
            </b>
            necesitas saber lo que te explico en el primer día
          </li>
          <li>
            <b>
              Las 5 sencillas técnicas que casi nadie aplica de la gestión del
              tiempo{" "}
            </b>{" "}
            y hace que sientas que el día se te escapa y cómo solucionarlo en
            una sola tarde (y eso que el taller son dos días).{" "}
          </li>

          <li>
            La manera en la que usas tu tiempo define si avanzas o te estancas.
            e explicaré las herramientas para que{" "}
            <b>
              {" "}
              nunca más sientas que pierdes el control y aun si lo pierdes, cómo
              retomarlo de un día para otro. Porque imprevistos tenemos todos.
            </b>
          </li>

          <li>
            <b>La razón real de que tengas mil cosas empezadas </b> (proyectos,
            tareas, ideas…) y ninguna terminada, todo a medias, sientes que no
            avanzas, y eso te frustra más todavía.{" "}
            <b>Y la solución a ese problema de prioridades,</b> durante el
            primer día.{" "}
          </li>
        </ul>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>
          <b>Por cierto.</b>
        </p>
        <p>
          <b>Por cierto.</b>
        </p>
        <p>
          Si piensas que hay dos grupos de personas, los que son productivos y
          orgnaizados y los que son un desastre y caos, y crees que es algo
          imposible de aprender.
        </p>
        <p>
          Si no tienes una rutina diaria. Si cada día empiezas de cero,
          improvisando, apagando incendios. Sin un plan claro, sin una
          constante, y al final del día, te preguntas por qué no avanzas en lo
          que realmente importa.{" "}
          <b>
            Si quieres saber cómo generar un sistema de gestión de tiempo diario
            sin caer en tópicos como “date recompensas”.
          </b>
        </p>
        <p>
          Esto NO lo veremos en el taller, lo recibirás en un BONUS{" "}
          <b>en cuanto compres.</b>{" "}
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>Sigo</p>
        <br></br>
        <ul className="pl-6">
          <li>
            Hay gente que no se planifica la semana, y gente que se la planifica
            mal.{" "}
            <b>Siento decirte que, posiblemente, lo estés haciendo mal.</b>{" "}
          </li>
          <li>
            La forma en la que organices tus horas{" "}
            <b>
              {" "}
              va a definir si tu negocio crece o si simplemente te quedas como
              estás.
            </b>{" "}
            Te enseño cómo hacerlo. Y cuando digo negocio, puede ser trabajo,
            estudios, oposición, proyecto… Tu vida.
          </li>
          <li>
            Si tú también te pones excusas como “mi vida es más complicada” “yo
            no puedo hacer esto”, al principio del primer día del taller
            hablaremos sobre por qué victimizarte te está robando tiempo por qué
            tu situación en realidad es igual que la tu vecino.{" "}
            <b>
              ¿No te gusta esta idea? Apúntate porque lo necesitas más que
              nadie.
            </b>{" "}
          </li>
          <li>
            <b>
              La solución a sentirte atrapado donde no quieres estar, viendo
              cómo otros sí avanzan,
            </b>{" "}
            y la solución a no ser capaz de sacar ni 30 minutos al día para
            cambiar tu situación.{" "}
          </li>
          <li>
            <b>
              ¿Y si lo intento y no funciona cómo pago la hipoteca / alquiler?
            </b>
            Aunque sepas que esa estabilidad te está deprimiendo. Veremos cómo
            responsabilizarte del tiempo que inviertes en lo que no te gusta por
            culpa de estos miedos. El primer día.{" "}
          </li>
        </ul>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="font-alternate px-16 ">
          Y esto es lo que vas a aprender en el{" "}
          <span className="text-red-500">segundo día…</span>
        </h2>
        <br></br>
        <br></br>
        <ul className="pl-6">
          <li>
            <b>
              {" "}
              La pregunta que debes hacerte cada vez que te sientas a trabajar y
              cada vez que te fijas una meta.
            </b>{" "}
            Durante la última lección del último día del taller.{" "}
          </li>
          <li>
            Si has probado toggl, Notion, assana, trello… Y aún así nada te
            funciona porque sientes que pierdes más tiempo organizando tus
            objetivos que trabajando. Te diré cómo volcar esa situación,{" "}
            <b>
              usando la herramienta que uses, con una idea totalmente
              contraintuitiva.{" "}
            </b>
          </li>
          <li>
            Un detalle crucial, y muy sutil, para que tu tiempo trabaje a tu
            favor (y no al revés).{" "}
            <b> Te lo contaré el segundo día del taller.</b>
          </li>
          <li>
            <b>
              Puedes seguir autoengañándote y decirte que "ya habrá tiempo" para
              ese proyecto.{" "}
            </b>{" "}
            Pero en el fondo sabes que si no haces algo ahora, seguirás
            esperando el "momento perfecto" forever and ever.
          </li>
          <li>
            Si piensas que este tipo de talleres no te funcionan porque{" "}
            <b> “es solo para los organizados” </b>con el segundo día del taller
            aprenderás un Sistema de gestión del tiempo muy sencillo, que de tan
            sencillo te hará tomar el control de tus metas incluso si odias
            planificar.
          </li>

          <li>
            El error que muchos cometen al gestionar sus objetivos y que les
            deja
            <b>sintiéndose agotados pero sin avanzar.</b> El segundo día veremos
            la solución.
          </li>
          <li>
            Una manera muy sutil de ser{" "}
            <b>mucho más productivo (sin hacer más horas).</b> Te enseño cómo.
          </li>
          <li>
            <b>¿Estás trabajando hacia tus metas o solo tachando tareas? </b>La
            razón de que pasen los días sin que hayas avanzado con tu proyecto,
            con esa sensación de{" "}
            <b> “solo he estado en reunions” “solo he contestado emails”</b>, y
            la forma de evitarlo para focalizarte en lo que realmente
            quieres.{" "}
          </li>
        </ul>
        <br></br>
        <br></br>
        <br></br>
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
        <h2 className="font-alternate ">
          Vale, pero soy un ansias de las plantillas de Notion y quiero saber de
          qué va la plantilla que me vas a dar.
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <p className="pl-6">Dos cosas antes de seguir.</p>
        <br></br>
        <p>Dos.</p>
        <p>
          <b> Primero,</b> no es una plantilla lo que estás comprando,{" "}
          <b>es un sistema para aprender a gestionar tu tiempo.</b>
        </p>
        <p>
          <b> Segundo,</b> no solo te doy una plantilla, te doy dos, con dos
          niveles de complejidad diferentes según lo que se adapte más a ti o a
          tu empresa (trabajes en equipos o no). Y al acabar el taller sabrás
          exactamente cuál te conviene usar.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="text-2xl">
          Dicho esto, te cuento las 9 herramientas que incluyen las plantillas:
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <ol className="pl-6">
          <li>
            <span className="font-bold ">
              ¿Quién paga el pato: tú o tu cliente?
            </span>
            <br></br>Si trabajas por hora, descubre en tiempo real si estás
            quemando horas de más en un proyecto y decide si ajustas tu bolsillo
            o ajustas el presupuesto. Esta plantilla lo calcula todo por ti.
          </li>

          <li>
            <strong>¿Cobras por proyecto fijo? Esto te interesa.</strong>{" "}
            <br></br> A cada hora extra que dedicas, tu rentabilidad se
            desploma. Pero con esta herramienta sabrás exactamente cuánto estás
            perdiendo (o ganando) y pondrás un petardo en el culo a tu
            productividad.
          </li>

          <li>
            <strong> Fichar nunca fue tan honesto.</strong> <br></br> ¿Equipo o
            solitario? Con esta plantilla sabrás al minuto cuánto tiempo dedicas
            a cada tarea, proyecto o cliente. Y si trabajas en equipo, todos
            verán la verdad del tiempo invertido. Si emprendes solo serás
            honesto contigo mismo y con tu tiempo, que no es poco.
          </li>

          <li>
            <strong> El kit anti-reuniones absurdas.</strong> <br></br>Programa,
            define asistentes, establece objetivos y calcula el tiempo que te
            roban (o te aportan).
          </li>

          <li>
            <strong>
              Lo peor que te puede pasar en una reunión es no sirva para
              nada.{" "}
            </strong>{" "}
            <br></br>Con plantillas específicas para cada tipo de reunión: 1to1,
            brainstorming, retrospectiva… podrás añadir recursos útiles y
            asegurarte de que todos llegan preparados. Reuniones que funcionan,
            punto.
          </li>

          <li>
            <strong>No necesitas gráficos cuquis; necesitas resultados.</strong>
            . <br></br> Si no tienes forma de contabilizar el avance… de poco te
            sirve ver los proyectos en una gráfica cuqui. <br></br> En esta
            plantilla tienes la gráfica <em>cuqui</em> junto con barras de
            progreso asociadas a las tareas que vas completando. Y como la
            plantilla es un Time Tracker, podrás{" "}
            <strong>
              fijarte objetivos de tiempo para cada proyecto y ver a tiempo real
              las horas trabajadas por proyecto
            </strong>
            .
          </li>

          <li>
            <strong>Dónde pierdes el tiempo y cómo dejar de perderlo.</strong>{" "}
            <br></br>
            Personaliza y contabiliza bloques de gestión de tiempo, para saber
            dónde pierdes más tiempo (llamadas, reuniones, emails), qué te
            bloquea, qué puedes delegar.
          </li>

          <li>
            <strong>Ponle un límite al tiempo que pierdes.</strong> <br></br>
            Calcula automáticamente la{" "}
            <strong>suma del tiempo invertido en una tarea</strong>, además
            marcarás de antemano <strong>límites de tiempo</strong> para ser
            consciente de si algo te está bloqueando.
          </li>

          <li>
            <strong>Olvídate de duplicar datos.</strong>
            <br></br>
            Registra tus tareas una sola vez: fichar en toggl, para luego añadir
            a mano esas mismas tareas en Trello, y hacer el cronograma en excel.
            Deja que todo se enlace automáticamente. Tiempos, proyectos,
            clientes… Todo sincronizado sin malgastar un segundo más.
          </li>
        </ol>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <iframe
          src="https://drive.google.com/file/d/1vv0i66CBv-BICN6M7Yu65IZPQ8VgEfkg/preview"
          width="100%"
          height="432px"
          allowFullScreen
        ></iframe>
        <br></br>
        <br></br>
        <br></br>
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
        <h1 className="pb-12">Preguntas frecuentes</h1>
        <div className="pb-12">
          <h2 className="text-2xl">Realmente, ¿qué incluye?</h2>
          <br></br>
          <ul className="pl-6">
            <li>
              <b>
                {" "}
                Dos directos y si no puedes asistir, tendrás las grabaciones:
              </b>{" "}
              <br></br>
              <span className="text-red-500 font-bold ml-8">
                Día 14 de diciembre a las 16.00 h(Valencia)
              </span>
              <br></br>
              <span className="text-red-500 font-bold ml-8">
                Día 15 de diciembre a las 16.00 h(Valencia)
              </span>
            </li>
            <li>
              {" "}
              <b>Soporte durante un mes</b> con resolución de dudas
              grupales.{" "}
            </li>
            <li>
              {" "}
              <b>Vídeo privado </b>para aprender a usar Notion Calendar
            </li>
            <li>
              Las <b>plantillas de Notion </b> para conocer cuánto has ganado{" "}
              <b>
                contabilizando tus horas con este gestor de proyectos, tareas y
                clientes (para equipos, o no).{" "}
              </b>
            </li>
          </ul>

          <p>
            <i>
              Importante: Estas plantillas tendrá un nivel acorde al que vas a
              recibir en el taller, ese es el motivo de que no comparta contigo
              la plantilla hasta que el directo haya finalizado. Me interesa que
              aprendas, no que te frustres con una plantilla que seguramente no
              sepas personalizar aún. Después del taller, sabrás.
            </i>
          </p>

          <ul className="pl-6">
            <li>
              Un <b>bonus de bienvenida </b> sobre gestión de tiempo diario que
              solo por el valor que te va a aportar (si lo implementas), ya
              justifica con creces el precio del taller.{" "}
            </li>
          </ul>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Cuánto durarán los directos del día 14 y 15?
          </h2>
          <br></br>
          <p>
            No sé cuánto durará, estaremos el tiempo que haga falta, ni me
            enrollaré con paja ni cortaré a una hora. <br></br> Si te tienes que
            ir antes, no pasa nada. <br></br>Se quedará grabado y podrás verlo
            cuando quieras y las veces que quieras. <br></br>En cuanto la
            compres recibirás un mensaje de correo eléctrónico de cómo acceder.
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">
            Si no puedo asistir al directo… ¿Queda grabado? ¿Durante cuánto
            tiempo tendré acceso a la grabación?
          </h2>
          <br></br>
          <p>
            Sí. Todo se quedará grabado, podrás acceder a él cuando quieras, las
            veces que quieras. Además el taller tendrá lecciones bien
            estructuradas, para que cuando vuelvas a ver la grabación te sea
            mucho más fácil el aprendizaje. Estará colgado durante al menos un
            año, eso está garantizado, aunque probablemente será más. No sé
            cuánto, pero vamos, que podrás verlo 100 veces si eso es lo que te
            mola.
          </p>

          <p>
            Esto es así porque alojarlo cuesta dinero, me puedo morir y mil
            otras cosas.<br></br> Al ser un curso online hay varios servicios de
            pago que tienen que estar en funcionamiento para poder ofrecerlo.
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Qué perfil de persona le sacará mejor partido? ¿Sirve para equipos?
          </h2>
          <br></br>

          <ul className="pl-6">
            <li>
              Si sientes que <b> no tienes las herramientas adecuadas,</b> que
              has probado Notion, assana, trello, toggl, google, tooodas, pero
              no hay forma de tener objetivos y tareas claras.
            </li>
            <li>
              Si no has probado ninguna de esas herramientas, y solo usabas una
              agenda de papel.
            </li>
            <li>
              <b>
                Si pasan los días, meses, semanas, sin que avances en tu
                proyecto y sin embargo no paras de trabajar.{" "}
              </b>
              ¿El problema está en tus metas, en tus tareas? ¡¿Qué está mal?!
            </li>
            <li>
              Si estás hasta el moño de que{" "}
              <b> tus vacaciones dependan de lo que dice un convenio </b>y del
              mood de tu jefe machirulo cuando le vas a pedir las vacaciones.
            </li>
            <li>
              Si has probado{" "}
              <b>
                {" "}
                gestión de objetivos con Smart goals, con OKRs, el método Woop,
                la Matriz de Prioridades… De todo.
              </b>{" "}
              Y te dedicas a perder tiempo probando otro nuevo método de
              objetivos para tu equipo, y sigues viendo que no funciona. Y
              pruebas otro método. Y vuelves a ver que no funciona.
            </li>
            <li>
              Si sufres de <b>procrastinación constante </b> pero no te ves
              capaz de dejar de ver la tele 2 horas por la noche antes de
              dormir.{" "}
            </li>

            <li>
              <b>
                Si te sientes agotada constantemente y trabajas un huevo, pero a
                la vez no llegas a tus metas.
              </b>{" "}
              Veremos cómo puedes gestionar bien tu energía y tus prioridades.
            </li>
            <li>
              <b>Si tienes sentimiento de culpa</b> cuando te dedicas tiempo a
              ti, pensando en lo que no has hecho para avanzar. Pero realmente
              no tienes{" "}
              <b>
                ni puta idea de cuánto tiempo le dedicas al trabajo, y por
                tanto, qué tiempo te dedicas a ti misma,
              </b>{" "}
              trabajes solo, en equipo, vendas pisos, o hagas mentorías.{" "}
            </li>
          </ul>

          <p>
            Si estás en al menos una de las situaciones anteriores,{" "}
            <b> deberías apuntarte.</b>{" "}
          </p>
          <p>
            Y si estás ahí, sabes que son situaciones que se sufren tanto a
            nivel individual, pero tb cuando se trabaja en equipo. Además, una
            de las plantillas está específicamente pensada para trabajo en
            equipo y para gestión de tiempo en equipo. ¿Que trabajas solo?
            Perfecto, tendrás otra plantilla adaptada a trabajo individual.{" "}
          </p>
          <p>
            En cualquier caso, nadie mejor que tú para saber si te
            conviene.{" "}
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">¿Tiene sorporte?</h2>
          <br></br>
          <p>
            Cuando finalice el taller en directo, me podrás enviar tus dudas
            durante 1 mes. <br></br>Me parece tiempo más que de sobra para que
            si no has podido acudir al directo, puedas verlo. Pasado ese tiempo
            resvisaré todas las dudas, las agruparé y te compartiré las
            respuestas. O sea, no solo contestaré a tu duda, si no que podrás
            ver las preguntas de otras personas y que seguramente también te
            ayuden.
          </p>

          <p>
            Eso sí, responderé dudas que tengan que ver con el taller. Me
            explico. si me preguntas cómo hacer una fórmula avanzada para
            contabilizar el tiempo en el que te quitas los pelos de tu pie, pues
            no. No porque tenga nada en contra de los pelos de tu pie, sino{" "}
            <b>
              {" "}
              por respeto a mi tiempo y al de quienes lo compréis que vais a
              recibir las respuestas.
            </b>
          </p>

          <p>
            La experiencia me ha demostrado que hacer la resolución grupal
            duplica el valor del soporte dado, porque respondes dudas que aún no
            tienes pero seguramente en el futuro sí.{" "}
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Puedo ver la plantilla antes de comprarla?
          </h2>
          <br></br>
          <p>
            Por supuesto. En esta carta de ventas encontrarás el vídeo. Míralo.
            Y míralo bien. <br></br> La que te enseño es la plantilla más
            completa que sirve para equipos. Si trabajas tú sola, te daré la
            opción de utilizar una plantilla con las mismas funcionalidades,
            pero simplificada al trabajo individual. <br></br> Dicho esto, tú
            sabrás mejor que nadie si te interesa perder tiempo replicando la
            plantilla después de verla, el video lo tienes arriba y no recibir
            toda la formación de gestión de tiempo. A esos vídeos, obviamente,
            no puedes acceder si no compras.
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Si hay una actualización de Notion, seguirá funcionando la
            plantilla?
          </h2>
          <br></br>
          <p>
            No solo seguirá funcionando, es que funcionará mejor.<br></br>{" "}
            Cualquier actualización que Notion saque y afecte al uso o interfaz
            de la plantilla te la comunicaré por email, para que tanto tú como
            la plantilla estéis actualizados.{" "}
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Una vez obtenga la plantilla, la información de dentro es privada?
          </h2>
          <br></br>

          <p>
            Nadie puede acceder a tu información de Notion sin tu
            consentimiento. <br></br>Es así de fácil la respuesta.<br></br> Una
            vez dupliques la plantilla en tu cuenta de Notion (te explico cómo
            hacerlo en el vídeo), la plantilla ya es tuya y nadie más que tú
            podrá acceder a esa información. <br></br>En el caso de que trabajes
            en equipo, podrás dar permisos específicamente a esas personas para
            que tengan acceso a la plantilla.
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Será complicado si yo no tengo ni idea de Notion?
          </h2>
          <br></br>
          <p>
            No te voy a decir que es como ir en barca porque si usas Notion,
            sabes que tiene una curva de aprendizaje. Esto lo sabemos todos y
            decir lo contrario sería mentirte. Pero con que conozcas Notion, te
            vale.
          </p>
          <p>
            Las técnicas de gestión de tiempo que voy a enseñar podrías
            aplicarlas con cualquier herramienta, no solo Notion. Pero
            obviamente todo lo aplicaremos usando Notion.{" "}
          </p>
          <p>
            Respecto a las plantillas, ya vienen con todo predefinido y en el
            taller veremos cómo usarlas paso a paso. Además recibirás la
            grabación por si en el futuro te entrasen dudas puedas volver a
            verlo.
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Necesito algún material para realizar el taller?
          </h2>
          <br></br>
          <p>
            En la página principal del taller tendrás todas las recomendacioens
            para venir preparada al directo. Por resumir,{" "}
            <b>
               tener una cuenta de Notion creada, y no sirve estar de oyente
              pasivo,
            </b>
             no aprenderás. Este no es un taller que puedas ponerte de fondo
            mientras te tocas un pie.
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Existe algún tipo de garantía de devolución?
          </h2>
          <br></br>
          <p>No.</p>
          <p>
            De nuevo, se trata de un producto serio y de alta calidad, y espero
            el mismo compromiso por tu parte. Si te da miedo comprarlo, no lo
            hagas.
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-2xl">¿Cuál es su precio? ¿Bajará alguna vez?</h2>
          <br></br>
          <p>
            El precio de este taller en directo es de{" "}
            {STRIPE_BUTTON_CONFIG.price} y nunca bajará.
          </p>
          <p>
            <b>Nunca hago ofertas, ni black fridays, ni rebajas, ni nada.</b> Es
            más, si de algo puedes estar seguro es que con el paso del tiempo el
            precio subirá.
          </p>
          <p>
            ¿Por? Porque el contenido es de alto valor. Y si tú eres la típica
            persona que juzga una formación por la cantidad de horas de
            formación en vídeo que recibe, no tienes la mentalidad adecuada para
            sacarle provecho al taller. Es decir, lo entenderás e incluso lo
            podrás poner en práctica, pero habrá pequeños detalles, cuestiones
            de actitud, cosas sutiles, que te harán tomar decisiones incorrectas
            que harán que lo que cuento en el taller no te sirva de nada.
          </p>
          <p>Dicho esto, la decisión final por supuesto, es tuya.</p>
        </div>
        <StripeButton
          urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
          price={STRIPE_BUTTON_CONFIG.price}
          title={STRIPE_BUTTON_CONFIG.title}
          isDisabled={STRIPE_BUTTON_CONFIG.isDisabled}
        >
          {STRIPE_BUTTON_CONFIG.buttonText}
        </StripeButton>
      </section>
    </article>
  );
};

export default TallerSistemaGestionTiempo;
