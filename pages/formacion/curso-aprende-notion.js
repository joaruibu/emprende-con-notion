import React from "react";
import StripeButton from "../../components/StripeButton";

const CursoNotion = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: "Curso Notion",
    buttonText: " Acceder ahora",
    price: "9 €",
    isDisabled: false,
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/link/ed8819c9aec49dc340f88c7d4e95eacd8cc8bb63",
  };
  return (
    <>
      <article className=" border-2 bg-stone-50 border-stone-950 p-4 rounded-xl my-8">
        <div className=" sm:overflow-hidden sm:rounded-xl"></div>
        <section className="pt-10 ">
          <h1 className="mb-14 font-alternate text-6xl leading-[75px]">
            {" "}
            Empezar en Notion,{" "}
            <span className="text-red-500 block">es difícil.</span>
          </h1>
          <h2 className="text-3xl">Pero aprender Notion, puede no serlo.</h2>
          <br></br>
          <br></br>
          <p>A ver. </p>
          <p>x Le ves potencial a Notion pero a la vez estás abrumada. </p>
          <p>
            x Has visto tutoriales en YouTube durante horas en lugar de escribir
            esas entradas de blog que tenías planeadas y te sientes peor.
          </p>
          <p>
            x Quizás has intentado duplicar algunas plantillas prediseñadas, y
            te has frustrado porque no son útiles.{" "}
          </p>
          <br></br>
          <br></br>
          <h2>
            ¿Y ahora vengo yo a decirte que{" "}
            <i>aprender Notion puede ser fácil</i>??
          </h2>
          <br></br>
          <br></br>
          <p>Atiende.</p>
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
          <br></br>
          <p>
            Pero si te apuntas a este curso tienes que tener una cosa
            clara:{" "}
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
          <br></br>
          <br></br>
          <h2>Y eso es lo que vamos a ver en el curso.</h2>
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
              √ Si en lugar de un vino con amigas lo que te gusta es pasar la
              tarde del domingo organizando tu próxima semana
            </b>{" "}
            lo podrás hacer desde la lección 3.
          </p>
          <p>
            <b>√ </b> Una template sin la que yo no podría vivir, y que llevo
            usando desde hace más de 4 años. La crearás tú misma en la lección
            11.
          </p>
          <p>
            <b>
              √ En la lección 12 veremos la forma de crear páginas web
              gratuitas,
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

          <div className="flex justify-center mb-24">
            <img
              className="text-center"
              src={"/img/gato-consultoria.png"}
              alt="Foto de Laura de Arquer sobre fondo amarillo."
              width={400}
              height={100}
            />
          </div>

          <p>
            <b>√ </b> Hay gente que dice que un hábito se hace en 21 días, otros
            que en un mes, y luego estamos la mayoría que después de un año nos
            sigue costando. <b>Esta plantilla no lo hará más fácil,</b> pero al
            menos serás consciente de tu avance.
          </p>
          <p>
            <b>√ </b> Te enseñaré <b>todo para lo que yo uso Notion,</b> tanto a
            nivel personal como profesional para que tengas referencias reales
            de todo que luego tú puedas aplicar. Porque sí, en cuanto termine el
            taller, serás capaz de aplicar todo lo que hayamos visto.
          </p>
          <p>
            <b>
              √ Por qué entendiendo cómo funcionan las muñecas rusas, sabrás más
              de Notion que un 90% de los gurús{" "}
            </b>{" "}
            que hacen tutoriales de Notion.
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
          <br></br>
          <br></br>
          <br></br>
          <p>
            <b>√ </b> Cómo una cosa muy simple y efectiva te ayudará a mantener
            a raya <b>el desorden de tomar notas rápidas.</b>
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
          <p>
            <b>
              √ El plan gratuito no incluye IA, pero eso no significa que no
              puedas automatizar...
            </b>{" "}
            Te enseñaré cómo acortar tus acciones más frecuentes con un solo
            botón (como anotar un gasto), o cómo crear reuniones periódicas
            automáticamente.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <p className="ml-12">Todo esto, en menos de dos horas.</p>
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
            El problema es que <i>solo</i> aprendas Notion per se, en lugar de
            <i>cómo crear sistemas en Notion</i>. Es una sutil pero gran
            diferencia.{" "}
          </p>
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
          <h1 className="pb-12">Más preguntas.</h1>
          <br></br>
          <div className="pb-12">
            <h2 className="text-2xl ">¿Qué incluye?</h2>
            <br></br>
            <p>
              Tiempo total del curso unas 2h en vídeo. Esas 2h se distribuyen en
              20 lecciones de menos de 10 minutos. Cada lección tiene una
              práctica. O sea, practicas todo lo que ves y lo aplicas para ti.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Cómo funciona?</h2>
            <br></br>
            <p>
              Compras. A los pocos minutos te llega un email exclusivo con una
              url de acceso y contraseña. <br></br> 1. Primer vídeo: ves la
              lección, haces la práctica, corriges la práctica (en el propio
              vídeo de la lección viene resuelta). / 2. Segundo vídeo: ves la
              lección, haces la práctica, corriges la práctica. / 3. Tercer
              vídeo: ves la lección, haces la práctica, corriges la práctica. /
              Así hasta llegar a 20. <br></br>Las prácticas son sistemas de
              organización que vas a aprender a construir y adaptar a ti
              (plantillas de gastos, diario, gestión de proyectos…). Por lo que
              en una tarde puedes tener el curso terminado, y un sistema
              centralizado de organización creado y en funcionamiento.
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
              x Si buscas algo que funcione "de inmediato" sin ningún esfuerzo.
              Entiendo que hay boomers que quieren esa promesa. No es el caso de
              este curso. Notion requiere una curva de aprendizaje.
            </p>
            <p>
              x Para equipos. En el curso veremos cuestiones básicas sobre
              gestión de equipos pero nada en profundidad. Si tú necesitas una
              formación específica de Notion para tu equipo considera una
              consultoría.
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
              Sí. Existen planes de pago pero el curso está pensado para uso
              individual con una cuenta gratuita. Si más adelante necesitas
              pasarte al plan de pago (por ejemplo porque trabajas en equipo o
              porque quieres la IA), en el curso te explico cómo se hace. Pero
              te adelanto que para un uso individual normal, lo que hacemos la
              mayoría, el gratuito va genial.
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
              El objetivo es darte el nivel necesario para crear tus propios
              sistemas de organización utilizando el plan gratuito, tanto a
              nivel personal como para tu negocio. Es decir, las funcionalidades
              de planes de pago (como automatizaciones o IA) no las vemos. Por
              el mismo motivo tampoco veremos fórmulas avanzadas para las que
              básicamente necesitas saber de programación porque no, ese no es
              el objetivo del curso. Si tienes necesidades más técnicas para tu
              negocio, lo mejor es que contrates una consultoría.
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
              el curso y terminarlo en ese tiempo.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Cuánto tiempo me llevará el curso? </h2>
            <br></br>
            <p>
              Depende de ti. Quiero decir, somos adultos. Yo puedo decirte que
              el tiempo total de las grabaciones es menos de dos horas. Lo que
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
              precio). Así que, sí, es barato.
            </p>
            <p>
              Pero solo tú sabes si te conviene este curso o no. Si es que sí,
              accedes abajo:
            </p>
          </div>

          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
            isDisabled={STRIPE_BUTTON_CONFIG.isDisabled}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>

          <p>Un abrazo, y que Notion te acompañe, </p>
          <p>Laura de Arquer</p>
        </section>
      </article>
    </>
  );
};

export default CursoNotion;
