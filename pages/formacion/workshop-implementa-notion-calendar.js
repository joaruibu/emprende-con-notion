import React from "react";
import StripeButton from "../../components/StripeButton";

const TallerEmpezarEnNotionEsFacil = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: "Workshop: implementa Notion Calendar",
    buttonText: "Upps llegas tarde",
    price: "9€",
    isDisabled: true,
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/session/22802460d61220b5df498d96f111806582a92ba2/init",
  };
  return (
    <>
      <article className=" border-2 bg-stone-50 border-stone-950 px-4 sm:p-8 rounded-xl my-8">
        <div className=" sm:overflow-hidden sm:rounded-xl"></div>
        <section className="pt-10 ">
          <h2 className="mb-4 font-alternate text-2xl leading-[38px]">
            “ Pues me di cuenta a mis 26, que más vale un lápiz corto que una
            memoria larga. ”
          </h2>
          <br></br>
          <br></br>
          <h2 className="mb-4 font-alternate text-2xl leading-[38px]">
            “ Agenda de mano, Google calendar? ”
          </h2>
          <br></br>
          <br></br>
          <h2 className="mb-4 font-alternate text-2xl leading-[38px]">
            “ Siempre se me olvidan las mitad de las cosas que tengo que hacer y
            he probado mil formas. Una agenda física, la que mejor me funciona,
            pero claro, no me la llevo a la mitad de sitios, Google
            calendar/todo list de móvil/etc...no me funciona ni una, nunca las
            reviso. ¿Ideas? ”
          </h2>
          <br></br>
          <br></br>
          <h2 className="mb-4 font-alternate text-2xl leading-[38px]">
            “ Entre reuniones, entrenos y conciliación familiar... Muy
            complicado. Actualmente tiro de Google calendar pero se me queda
            corto... Feliz sabado. ”
          </h2>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>
            Lo que has leído <b>antes</b>, es tu voz interna cada mes de
            diciembre cuando toca comprarse una agenda nueva de papel, o cada
            vez que dejas de usar tu gestor de calendarios porque te saturas o
            simplemente porque se te olvida.
          </p>
          <p>
            Y lo que te voy a contar <b>a continuación</b>, será algo en lo que
            no dejarás de pensar en los próximos días hasta la fecha del
            workshop y que, probablemente, cambie la idea de organización que
            tienes en la cabeza y la transforme en algo mucho más sencillo,
            excitante y efectivo.
          </p>
          <br></br>
          <p>Te cuento, para que lo mires con calma.</p>
          <p className="text-red-500">Allá va:</p>
          <br></br>
          <br></br>
          <ul className="pl-6">
            <li>
              Qué hacer si has probado apps de Calendario que no te funcionan… y
              qué hacer para volcar esa situación (uses el calendario que uses,
              como si es de papel),{" "}
              <b>con una idea totalmente contraintuitiva.</b>
            </li>

            <li>
              <b> Los tres errores que con toda seguridad cometes,</b> y que te
              impiden planificar tu semana.
            </li>

            <li>
              Las dos soluciones al miedo real de no solo no acordarte de tus
              citas,{" "}
              <b>
                {" "}
                sino apuntarlas, y olvidar mirarlo o que no te lo recuerde tu
                app.
              </b>
            </li>

            <li>
              La razón (razonada) de que no seas capaz de mantener 1 hora la
              concentración sin mirar el móvil. Y no, no es lo típico de que las
              rrss han acabado con nuestras neuronas. Y el{" "}
              <b>
                {" "}
                método para solucionarlo sin sentirte culpable por querer ver
                vídeos de gatos.
              </b>
            </li>

            <li>
              <b>
                {" "}
                La razón por la que no consigues el hábito de mirar el
                calendario,
              </b>
              la agenda de papel o la app donde sea que te apuntas tus cosas a
              diario, y que solo saberla te ayudará a implementarlo.
            </li>

            <li>
              <b>
                Motivos (o no) por los que cambiar de Google Calendar, Outlook,
                Apple o el gestor que tengas, a Notion Calendar y ganar tiempo
                gracias a ello.
              </b>{" "}
              Ejemplos, dentro.
            </li>

            <li>
              Por qué si viajas mucho <b>no te recomendaría nunca </b> Notion
              Calendar.
            </li>

            <li>
              3 razones por las que{" "}
              <b>
                {" "}
                planificar tus reuniones, entrenos, conciliación familiar es
                complicado,
              </b>{" "}
              y 3 soluciones prácticas que podrás aplicar en cualquier
              calendario (en el caso de que después del taller decidas no usar
              Notion Calendar, será raro, pero puede pasar).
            </li>
            <li>
              <b>
                Si Google Calendar se te queda corto a la hora de conciliar
                entre vida laboral y personal,{" "}
              </b>{" "}
              te diré cómo Notion Calendar es la única aplicación que te
              permitirá solventarlo.{" "}
            </li>
            <li>
              Lo que jamás debes hacer al planificar tu semana.{" "}
              <b> Siento decirte que, posiblemente, lo estés haciendo.</b>{" "}
            </li>
            <li>
              <b>
                {" "}
                La razón principal por la que fracasan casi todos los intentos
                de hábito por llevar una planificación semanal.
              </b>{" "}
              (Visto y solucionado desde dentro muchas veces).
            </li>
          </ul>
          <br></br>
          <br></br>

          <div className="flex justify-center">
            <img
              className="text-center"
              src={"/img/gato-calendar.png"}
              alt="Imagen meme ventilador"
              width={250}
              height={100}
            />
          </div>

          <br></br>
          <br></br>

          <p>Y algunas cosas más “técnicas” como:</p>
          <br></br>
          <ul className="pl-6">
            <li>
              <b> Pasos para empezar con Notion Calendar</b> (o mejorar
              notablemente su uso) lleves los horarios que lleves o tengas el
              negocio que tengas.{" "}
            </li>

            <li>
              <b>
                {" "}
                “truco” para conectar tus cuentas de Outlook y Apple con Notion
                Calendar
              </b>{" "}
              (aunque muchos dicen que no se puede).
            </li>
            <li>
              La forma paso a paso para{" "}
              <b>
                {" "}
                poder ver todos los calendarios que tengas creados en Notion, a
                la vez que tu calendario de Google, Outlook y/o Apple, en un
                mismo sitio.{" "}
              </b>
              Gratis, fácil, y para toda la familia.
            </li>

            <li>
              <b>
                {" "}
                La forma sencilla, muy sencilla, de compartir tu disponibilidad
                horaria con tus clientes para crear una reunión,
              </b>{" "}
              sin necesidad de usar calendly ni doscientas llamadas de “esta
              hora me viene mejor”.{" "}
            </li>

            <li>
              Pros y <b>contras</b> de usar Notion Calendar (no me dejaré nada
              en el tintero) para que puedas{" "}
              <b>
                decidir libremente si te interesa usarlo o no según tu contexto.
              </b>{" "}
            </li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <p className="pl-12 font-bold text-2xl text-red-500">
            Atención, hay algo que no te esperas:
          </p>
          <br></br>
          <br></br>
          <p>
            La masterclass no se cuánto durará. Quizá 1 hora, quizá dos horas.
          </p>
          <p>
            Pero{" "}
            <b>
              {" "}
              en el módulo IV del workshop, veremos casos prácticos, reales, de
              cómo usar Notion de forma integrada con Notion Calendar:
            </b>
          </p>
          <br></br>
          <ul className="pl-6">
            <li>
              Caso práctico para gestionar tus reuniones desde Notion + Notion
              Calendar.
            </li>
            <li>
              Caso práctico para gestionar tus redes sociales y ver en un mismo
              sitio tus fechas de grabación y deadlines con Notion + Notion
              Calendar. Trabajes solo o con colaboradores.{" "}
            </li>
            <li>
              Caso práctico para gestionar tus proyectos (bien un viaje a Japón
              bien el lanzamiento de productos), con Notion + Notion
              Calendar.{" "}
            </li>
            <li>
              Caso práctico para gestionar tus tareas y recordatorios diarios y
              poder reducir apps. O sea, te enseñaré cómo prescindir de usar
              google keep, google tasks, to-doist, recordatorios, etc. para usar
              solo Notion + Notion Calendar.{" "}
            </li>
          </ul>
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
          <h1 className="pb-12">
            Preguntas frecuentes que igual tienes y te interesa leer:
          </h1>
          <div className="pb-12">
            <h2 className="text-2xl">¿Qué incluye?</h2>
            <br></br>
            <p>
              Casi todo. Me refiero a casi todo sobre si de verdad te vale la
              pena o no usar Notion Calendar. Lo peor y lo mejor, y los fallos
              que no deberás cometer nunca y que son muy habituales a la hora de
              planificar un calendario. <b> Además de eso,</b> el módulo IV va
              de casos prácticos y directamente aplicables (vamos, que podrás
              aplicar nada más terminar el workshop) para utilizar de forma
              eficiente Notion + Notion Calendar.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">¿Cómo es el material?</h2>
            <br></br>
            <p>
              Será un directo el viernes 8 de noviembre a las 16:00h (Madrid).
              Si no puedes acudir, tendrás la grabación disponible al día
              siguiente. Además, veremos casos prácticos que luego podrás
              aplicar tú en tu día a día, en concreto, 4 casos profesionales de
              cómo conectar Notion con Notion Calendar. Además de eso, podrás
              preguntarme dudas sobre el workshop. <br></br>En cuanto compres te
              llegará un email con todos los datos para acceder al contenido.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Me servirá si no tengo ni idea de Notion??
            </h2>
            <br></br>
            <p>
              Este workshop es para aquellas personas que estén usando,
              empezando a usar, o piensen empezar a usar Notion, y tienen la
              necesidad de poder ver todos sus calendarios (de Notion, Google o
              lo que sea), en un solo lugar. Si tú no usas Notion ni piensas
              empezar a usarlo, no te recomiendo usar Notion Calendar.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Sirve si trabajo en equipo o solo como calendario personal?
            </h2>
            <br></br>
            <p>
              Sirve en ambos casos. Tiene funcionalidades pro muy guays para
              trabajo en equipo:
            </p>
            <ul className="pl-6">
              <li>
                como poder compartir tu disponbilidad con clientes o con
                compañeros con los que vayas a reunirte{" "}
              </li>
              <li>
                o, si tienes médico, poder bloquear esa franja horaria de forma
                automática para que no te asignen reuniones (sin necesidad de
                mostrar tu motivo personal de que no puedes).{" "}
              </li>
            </ul>

            <p>
              Pero también es perfecto para usarlo como tu calendario personal y
              poder vincularlo con todos tus calendarios hechos en Notion, de
              rrss, de tareas, de proyectos…
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Necesito algún material para el workshop?
            </h2>
            <br></br>
            <p>
              Depende.
              <br></br>Si quieres implementar Notion Calendar desde ya, entonces
              deberás tener creada una cuenta gmail de Google (necesaria para
              hacer log in en Notion Calendar).
              <br></br> Si simplemente quieres asistir al taller para saber si
              te conviene o no usar Notion Calendar, entonces no te hace falta
              nada. Solo tener en cuenta de que hay probabilidades de que
              cambies de opinión.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Me sirve el workshop si ya uso Notion Calendar? ¿Y si ya lo he
              probado pero he preferido usar Google Calendar por ahora?
            </h2>
            <br></br>

            <p>
              Sí, en ambos casos. Si ya tienes la app descargada y sabes hacer
              las funciones básicas de calendario, te sirve (veremos también
              funcionalidades pro). Si ya la probaste y no te convención,
              también te sirve. ¿Por? Porque la primera lección, y en mi opinión
              la que tiene más valor, va de los 3 errores más frecuentes que nos
              hacen no hacer una buena planificación semanal (y siento decirte
              que, posiblemente, lo estés haciendo) y que son aplicables uses la
              aplicación de calendario que uses.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              Si no puedo asistir al workshop en directo… <br></br> ¿Queda
              grabado? ¿Durante cuánto tiempo tendré acceso a la grabación?
            </h2>
            <br></br>
            <p>
              Sí. Todo se quedará grabado, podrás acceder a él cuando quieras,
              las veces que quieras.{" "}
            </p>
            <p>
              Además el taller estará estructurado en módulos para que cuando
              vuelvas a ver la grabación te sea mucho más fácil el
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
            <h2 className="text-2xl">¿Cómo acceder al directo?</h2>
            <br></br>
            <p>
              Será una conferencia por una paltaforma online el viernes 8 de
              noviembre a las 16:00h (Madrid). Toda la información de acceso la
              encontrarás en la página principal del workshop a la que solo
              tienen acceso los compradores del mismo.{" "}
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Me vas a vender Notion Calendar porque te llevas comisión, o
              realmente me vas a decir pros y contras?
            </h2>
            <br></br>
            <p>
              No, no me llevo comisión (no tendría problema en decirlo). Mira.
              Notion Calendar salió hace 10 meses y jamás antes había hablado
              del tema ni en redes sociales. ¿Por qué? Porque solo recomiendo
              aquellas herramientas que, <b>después de usarlas</b>, me han
              ayudado a mí y a las personas que trabajan conmigo. Ahora sí,{" "}
              <b className="text-red-500">sé de lo que hablo </b>y por eso te
              contaré en qué casos lo recomiendo, en qué casos no, y todo
              aquello en lo que aún tienen que mejorar, para que tú decidas
              libremente si empezar a usarla (como he hecho yo) o todavía no.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Tiene soporte?</h2>
            <br></br>
            <p>
              En el directo dejaré unos minutos para resolver dudas sobre lo
              visto en el workshop, fuera de eso no.
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
            <h2 className="text-2xl">¿Qué precio tiene?</h2>
            <br></br>
            <p>
              {STRIPE_BUTTON_CONFIG.price} hasta el domingo 3 de noviembre a las
              23:59h. A partir de ahí subirá.
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
          <br></br>
          <br></br>
          <p>P.D.: Si te interesa botón de arriba.</p>
          <p>
            P.D.2: Si te parece barato, es porque lo es. Y aún no sabes todo lo
            barato que es... Ni lo vas saber... Aún.<br></br>El día del
            workshop, solo las personas que hayan participado recibirán un
            regalo. Es un regalo que hará que este workshop te haya salido
            gratis, casi que a devolver.{" "}
          </p>
          <p>
            P.D.3: Disponible solo hasta el día 7 de noviembre a las 23:59h.
            Después, hasta luego MariCarmen.{" "}
          </p>
          <br></br>
          <p>Un abrazo, y que Notion te acompañe, </p>
          <p>Laura de Arquer</p>
        </section>
      </article>
    </>
  );
};

export default TallerEmpezarEnNotionEsFacil;
