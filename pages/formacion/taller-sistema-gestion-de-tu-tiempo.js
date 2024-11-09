import React from "react";
import StripeButton from "../../components/StripeButton";

const TallerSistemaGestionTiempo = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: "Taller: Sistema Gestión de tu tiempo",
    buttonText: "Empieza a gestionar tu tiempo",
    price: "95€",
    isDisabled: false,
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/session/554f7fe9d84b056197db3559dac594fe0acd1e92/init",
  };
  return (
    <article className=" border-2 bg-stone-50 border-stone-950 p-4 rounded-xl my-8">
      <div className=" sm:overflow-hidden sm:rounded-xl"></div>
      <section className="pt-10 ">
        <h1 className="mb-4 font-alternate text-4xl leading-[52px]">
          Tienes tu día planeado, vas a madrugar y ser responsable.
          <br></br>
          <br></br>
          Vas a hacer lo que se supone que debes hacer y no te vas a desviar.
          <br></br>
          <br></br>
          <br></br>O no.
        </h1>
        <br></br>
        <br></br>
        <br></br>

        <p>
          Vas a madrugar, desayunar en condiciones, ir al gym, trabajar sin
          permitir interrupciones, vas a salir a cierta hora y regresar a casa
          para empezar tu proyecto personal.
        </p>
        <p>
          Y vas a dormir pronto sin mirar el móvil dos horas antes que dicen que
          va fatal para el insomnio.
        </p>
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
          Entonces cancelas el gym, sales dos horas más tarde y te abrazas al
          móvil hasta la hora de dormir que, por supuesto, es tres horas después
          de lo que deberías.
        </p>
        <p>
          Te dices cosas como que ya la vida es así, que mañana irá mejor, que
          conseguirás sacar tiempo para tu proyecto alguna tarde, o que
          necesitas un rato de desconexión.
        </p>
        <br></br>
        <p>¿Te das cuenta?</p>
        <br></br>
        <p>Sigo por si no te das cuenta. </p>
        <p>Por si no lo entiendes.</p>
        <p>
          Porque tú estás <i>motivada</i> .
        </p>

        <br></br>

        <p>Simplemente, es que “no tienes tiempo”. </p>
        <p>Es que “siempre pasan cosas”. </p>
        <br></br>
        <p>Pero tú estás motivada. </p>
        <br></br>
        <p>Y sé lo que piensas.</p>
        <p>Sé que piensas que es el dinero, si tuvieras más. </p>
        <p>O el conocimiento, esa cosa que te queda por aprender. </p>
        <p>
          El carisma, la inteligencia o la belleza, que no tienes suficiente.{" "}
        </p>
        <p>
          Esa cosa que acabar o solucionar y que cuando esté hecha entonces ya
          sí, por fin podrás hacer lo que te propongas.
        </p>
        <br></br>
        <p>O el tiempo, que te falta. </p>
        <br></br>
        <p>
          {" "}
          <span className="text-red-500 italic font-bold">Lo sé</span> porque yo
          también me he dicho esas cosas.{" "}
        </p>
        <p>Pero no. </p>

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
          esforzarte, y porque más fácil decir “me falta tiempo”.
        </p>
        <p>Y también, más de pobres, por cierto. </p>
        <br></br>
        <p>
          Eso es lo que te quería decir en esta carta de ventas. Que la
          responsabilidad sobre tu tiempo es todo, es la primera pieza del
          efecto dominó que lo arregla todo.
        </p>
        <br></br>
        <p>
          Si te interesa solucionarlo apúntate al taller: Sistema gestión de tu
          tiempo.
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
              A solucionar la sensación de culpa al acostarte sin haber hecho lo
              que querías y decir, “bueno, mañana lo vuelvo a intentar.”
            </b>
          </li>

          <li>
            Mi madre tenía la agenda más gorda y organizada del mundo. <br></br>
            <br></br> Consistía en una carpeta muy pequeña con tapas de piel
            granate y anillas interiores donde iba añadiendo, minuto a minuto,
            sus tareas del día.<br></br>
            <br></br>
            Con siete hijos, trabajando y su agenda, llegó a ser tremendamente
            productiva. <br></br>
            <br></br>{" "}
            <b>
              En el vídeo que te incluyo te enseñaré todo lo que aprendí sobre
              el conocido <i>time blocking</i> , y cómo poder adaptar el método
              de bloques de tiempo a ti y a tu empresa{" "}
            </b>
            sin necesidad de tener una agenda de ama de casa ni ser rígida
            minuto a minuto.
          </li>

          <li>
            Las <b>3 cosas que casi nadie sabe de la gestión del tiempo</b> y
            hace que sientas que el día se te escapa y cómo solucionarlo en una
            sola tarde. Y eso que el taller son dos días.
          </li>

          <li>
            Un detalle crucial para que tu tiempo trabaje a tu favor (y no al
            revés). <b> Te lo contaré el primer día del taller.</b>
          </li>

          <li>
            La forma en la que organices tus horas{" "}
            <b>
              va a definir si tu negocio crece o si simplemente te quedas como
              estás.
            </b>{" "}
            En este taller te enseño cómo hacerlo. Y cuando digo negocio, puede
            ser trabajo, estudios, oposición, proyecto… Tu vida.
          </li>

          <li>
            <b>
              La pregunta que debes hacerte cada vez que te sientas a trabajar.
              El primer día del taller.
            </b>{" "}
          </li>
        </ul>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Por cierto. Seguro que tú tb te has dicho alguna vez eso de:{" "}
          <b> esto es solo para los “organizados”.</b> Bueno. Con el primer día
          del taller aprenderás un Sistema de gestión del tiempo que te hará
          tomar el control de tus objetivos incluso si odias planificar.
        </p>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <ul className="pl-6">
          <li>
            La manera en la que usas tu tiempo define si avanzas o te estancas.
            Este taller te da una estructura para que{" "}
            <b> nunca más sientas que pierdes el control.</b>
          </li>

          <li>
            <b>Una manera muy sutil de ganar tiempo cada día… </b>que no se te
            había ocurrido porque nadie te la ha explicado.
          </li>

          <li>
            El error que muchos cometen con el tiempo y que les deja{" "}
            <b>sintiéndose agotados</b> pero sin avanzar. Aquí tendrás la forma
            de solucionarlo.
          </li>

          <li>
            Una manera muy sutil de ser{" "}
            <b>mucho más productivo (sin hacer más horas).</b> Te enseño cómo.
          </li>

          <li>
            La pregunta que transforma cómo te organizas cada día:{" "}
            <b>
              {" "}
              ¿Estás trabajando hacia tus objetivos o solo tachando tareas?
            </b>{" "}
            Con este taller de Notion lo verás claro.
          </li>

          <li>
            La razón de que pasen los días sin que hayas avanzado con tu
            proyecto, con esa sensación de{" "}
            <b> “solo he estado en reunions” “solo he contestado emails”,</b> y
            la forma de evitarlo para focalizarte en lo que realmente quieres.
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
        <h2 className="font-alternate px-16 ">
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

        <h2>
          Dicho esto, te cuento las 9 herramientas que incluyen las plantillas:
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <ol>
          <li>
            Es fácil decirte que{" "}
            <strong>
              si cobras por hora la plantilla calcula el total ganado por cada
              proyecto.
            </strong>{" "}
            Sí, también hace eso.<br></br> Pero lo que duele más es saber si has
            cumplido las horas que estimabas al principio o si te has pasado y,
            por tanto, quién paga el pato: tú cobrando menos, o el cliente.
            <br></br> Con esta plantilla podrás calcularlo.
          </li>

          <li>
            Si en cambio{" "}
            <strong>trabajas con presupuestos fijos por proyecto</strong>, como
            es mi caso actualmente,{" "}
            <strong>
              es jodido ver que cuánto más tiempo inviertes en un proyecto,
              menos rentable te sale la hora.
            </strong>{" "}
            <br></br>
            Pero saberlo te mete un petardo en tu culo para ser más productivo.
            Podrás establecer ese presupuesto en la plantilla y saber con
            fórmulas automatizadas, o sea, sin que tengas que hacer tú nada,
            cuánto repercute cada hora a tiempo real vs el tiempo que estimabas
            invertir.
          </li>

          <li>
            Si trabajáis en <strong>equipo</strong> tendréis la{" "}
            <strong>herramienta más completa y honesta para fichar</strong>,
            siendo accesible para todos el tiempo que dedica cada persona por
            proyecto, por tarea, por día… Si emprendes solo serás honesto
            contigo mismo y con tu tiempo, que no es poco.
          </li>

          <li>
            La herramienta de{" "}
            <strong>
              gestión de reuniones que te hará evitar uno de los errores más
              comunes
            </strong>{" "}
            cuando se empieza a trabajar en equipo: decenas de reuniones no
            contabilizadas e inútiles. <br></br> Podrás programarlas, definir
            asistentes, objetivos, conclusiones y, sobre todo, contabilizarlas.
            Sabrás exactamente cuánto tiempo de cada proyecto se ha invertido en
            reuniones.
          </li>

          <li>
            El gestor de reuniones también incluye{" "}
            <strong>plantillas específicas según el tipo de reunión</strong>:
            1to1, brainstorming, retrospectiva… podrás definir los objetivos de
            la reunión antes de que empiece o añadir recursos para que los
            asistentes vayan preparados.
          </li>

          <li>
            Los gurús de productividad pusieron de moda hace unos años los{" "}
            <strong>cronogramas de proyectos</strong>. <br></br> Pero si no
            tienes forma de contabilizar el avance… de poco te sirve ver los
            proyectos en una gráfica cuqui. <br></br> En esta plantilla tienes
            la gráfica <em>cuqui</em> junto con barras de progreso asociadas a
            las tareas que vas completando. Y como la plantilla es un Time
            Tracker, podrás{" "}
            <strong>
              fijarte objetivos de tiempo para cada proyecto y ver a tiempo real
              las horas trabajadas por proyecto
            </strong>
            .
          </li>

          <li>
            Con esta plantilla podrás personalizar y contabilizar bloques de
            gestión de tiempo, para saber dónde pierdes más tiempo (llamadas,
            reuniones, emails), qué te bloquea, qué puedes delegar.
          </li>

          <li>
            El tiempo que perdía obcecada en una misma tarea, una hora, tras
            otra, no lo sabe nadie. Yo tampoco. Con esta plantilla de Time
            Tracker no solo se calcula automáticamente la{" "}
            <strong>suma del tiempo invertido en una tarea</strong>, además
            marcarás de antemano <strong>límites de tiempo</strong> para ser
            consciente de si algo te está bloqueando.
          </li>

          <li>
            Cuando intraemprendí con una interiorista tenía que fichar en toggl
            las tareas, para luego añadir a mano esas mismas tareas en un
            Trello, donde se desarrollaban. Con esta plantilla{" "}
            <strong>
              no perderás tiempo duplicando información de tus proyectos
            </strong>
            . Tiempos, tareas, proyectos, clientes… Todo queda enlazado
            automáticamente.
          </li>
        </ol>

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
          <ul>
            <li>
              <b> Dos directos y si no puedes asistir, las grabaciones:</b>{" "}
              <br></br>
              <span className="text-terracotta font-bold">
                Día 14 de diciembre a las 16.00 h(Valencia):{" "}
              </span>{" "}
              sistema para gestionar tu tiempo. <br></br>{" "}
              <span className="text-terracotta font-bold">
                Día 14 de diciembre a las 16.00 h(Valencia):{" "}
              </span>{" "}
              taller para aprender a usar e implementar las plantillas en tu
              flujo de trabajo (aplicando las técnicas que vimos el día
              anterior.{" "}
            </li>
            <li>
              {" "}
              <b>Soporte durante un mes</b> con resolución de dudas grupales.{" "}
            </li>
            <li>
              {" "}
              <b>Vídeo privado </b>para aprender a usar Notion Calendar
            </li>
            <li>
              Las <b>plantillas de Notion </b> para conocer cuánto has ganado
              <b>
                contabilizando tus horas con este gestor de proyectos, tareas y
                clientes (para equipos, o no).{" "}
              </b>
            </li>
          </ul>
        </div>

        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Cuánto durarán los directos del día 14 y 15?
          </h2>
          <br></br>
          {/* Voy por aqui */}
          <p>
            No sé cuánto durará, estaremos el tiempo que haga falta, ni me
            enrollaré con paja ni cortaré a una hora. Si te tienes que ir antes,
            no pasa nada. Se quedará grabado y podrás verlo cuando quieras y las
            veces que quieras. En cuanto la compres recibirás un mensaje de
            correo eléctrónico de cómo acceder.
          </p>
        </div>

        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Qué perfil de persona le sacará mejor partido? ¿Sirve para equipos?
          </h2>
          <br></br>
          <p>
            La respuesta a esta pregunta es muy sencilla. No te voy a decir una
            frase motivacional del tipo “cualquier persona que quiera despedir a
            su jefe y ser más libre”. No. No hace falta despedir a tu jefe para
            tener el control de tu tiempo, de eso va este taller. Este taller es
            para cualquier persona que quiera gestionar su tiempo de forma
            consciente. Qué tiempo dedicas en el trabajo y, por tanto, qué
            tiempo te dedicas a ti misma, trabajes solo, en equipo, vendas
            pisos, o hagas mentorías. En cualquier caso, nadie mejor que tú para
            saber si te conviene.
          </p>
        </div>

        <div className="pb-12">
          <h2 className="text-2xl">¿Tiene sorporte?</h2>
          <br></br>
          <p>
            Sí. Incluye soporte durante 1 mes desde el día 15. La resolución
            será grupal, es decir, no solo recibirás soporte a tus dudas, sino
            que recibirás las preguntas y respuestas del resto de los
            asistentes. La experiencia me ha demostrado que hacerlo duplica el
            valor del soporte dado, porque respondes dudas que aún no tienes,
            pero seguramente en el futuro sí.{" "}
          </p>
        </div>

        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Si hay una actualización de Notion, seguirá funcionando la
            plantilla?
          </h2>
          <br></br>
          <p>
            No solo seguirá funcionando, es que funcionará mejor. Cualquier
            actualización que Notion saque y afecte al uso o interfaz de la
            plantilla te la comunicaré por email, para que tanto tú como la
            plantilla estéis actualizados.{" "}
          </p>
        </div>

        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Una vez obtenga la plantilla, la información de dentro es privada?
          </h2>
          <br></br>

          <p>
            Nadie puede acceder a tu información de Notion sin tu
            consentimiento. Es así de fácil la respuesta. Una vez dupliques la
            plantilla en tu cuenta de Notion (te explico cómo hacerlo en el
            vídeo), la plantilla ya es tuya y nadie más que tú podrá acceder a
            esa información. En el caso de que trabajes en equipo, podrás dar
            permisos específicamente a esas personas para que tengan acceso a la
            plantilla.
          </p>
        </div>

        <div className="pb-12">
          <h2 className="text-2xl">
            ¿Será complicado si yo no tengo ni idea de Notion?
          </h2>
          <br></br>
          <p>
            No te voy a decir que es como ir en barca porque si usas Notion,
            sabes que tiene una curva de aprendizaje. Pero es eso, con que
            conozcas Notion te vale. El sistema de gestión de tiempo podrías
            aplicarlo en cualquier herramienta, no solo Notion. Pero obviamente
            lo aplicaremos usando Notion. Respecto a las plantillas, ya vienen
            con todo predefinido y en el taller veremos cómo usarlas paso a
            paso, y posteriormente recibirás la grabación por si en el futuro te
            entrasen dudas.
          </p>
        </div>

        <div className="pb-12">
          <h2 className="text-2xl">¿Das algún bonus?</h2>
          <br></br>
          <p>Puede que sí. O no. Lo sabrás cuando compres.</p>
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
          <h2 className="text-2xl">¿Es muy caro? ¿Es barato?</h2>
          <br></br>
          <p>Si te planteas eso, entonces no lo compres. </p>
          <p>
            Te lo digo completamente en serio. No es una estrategia de venta, no
            lo compres, porque si valoras un contenido formativo por su duración
            o cantidad de contenido no tienes la mentalidad adecuada para
            sacarle provecho al taller.
          </p>
          <p>
            Es decir, lo entenderás e incluso lo podrás poner en práctica, pero
            hay pequeños detalles, cuestiones de actitud, cosas casi
            imperceptibles, que te harán tomar decisiones incorrectas que harán
            que lo que cuento en el taller no te sirva de nada.
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
          isDisabled={STRIPE_BUTTON_CONFIG.isDisabled}
        >
          {STRIPE_BUTTON_CONFIG.buttonText}
        </StripeButton>
      </section>
    </article>
  );
};

export default TallerSistemaGestionTiempo;
