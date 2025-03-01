import React from "react";
import TitlePage from "../components/TitlePage";
import SubscriptionForm from "../components/Form";

const TITLE_DATA = {
  title: "Sobre mí",
  subtitle: "",
};

const FORM_DATA = {
  titleForm: "",
  textButton: "Suscribirme",
  label: "subs-about",
  id: "fieldjkthnl",
  name: "cm-f-jkthnl",
};

const About = () => {
  return (
    <main className=" border-2 border-stone-950 bg-stone-50 p-4 rounded-xl my-8">
      <TitlePage subtitle={TITLE_DATA.subtitle}>{TITLE_DATA.title}</TitlePage>
      <br></br>
      <p>
        {" "}
        En mi infancia no tenía muchos recursos. A ver, mi familia no pasaba
        hambre en absoluto, pero la situación familiar era terrible (abusos,
        jerarquías, religión por defensa). Algún día supongo que hablaré de
        ello, pero la cosa es que aprendí a ser productiva porque tenía que
        conseguir dinero para pagar esa vida social “normal” que tenían mis
        compañeros, y cosas del día a día (como ropa interior nueva).
      </p>
      <p>
        A partir de los 14 tuve trabajo, practicaba deporte, estudiaba, ayudaba
        en casa y tenía vida social.
      </p>
      <p>
        Al terminar bachiller con matrícula de honor estudié arquitectura y
        siempre trabajé mientras estudiaba. No te digo lo de la matrícula de
        honor por demostrarte nada, simplemente es que necesitaba sacar buenas
        notas para conseguir becas y hacer lo que todos los jóvenes hacen a esa
        edad para divertirse, como ir a fiestas.{" "}
      </p>
      <p>
        <b>
          Con poco tiempo disponible, me proponía administrar de la mejor manera
          posible las horas del día.{" "}
        </b>
      </p>
      <p>
        <b>Aprendí a ser productiva porque no tenía otra alternativa.</b>
      </p>
      <p>
        <b>Y, gracias a ello, estamos aquí ahora.</b>
      </p>
      <br></br>

      <div className="flex justify-center">
        <img
          className="text-center"
          src={"/img/lauradearquer_perfil.webp"}
          alt="Foto de Laura de Arquer sobre fondo amarillo."
          width={400}
          height={100}
        />
      </div>
      <br></br>
      <h1>Soy Laura de Arquer</h1>
      <br></br>

      <p>
        En 2020 creé mi canal de YouTube Emprende con Notion para enseñar cómo
        me organizaba. Nunca me propuse ser una “experta en productividad” ni
        una “gurú” ni nada similar. De hecho, cuando comencé mi canal no sabía
        realmente qué era la productividad.
      </p>
      <p>
        Simplemente trataba de compartir los sistemas de organización que a mí
        me funcionaban, creados con una nueva herramienta que había descubierto
        y que se adaptaba a mi situación:
      </p>

      <ul className="mx-10">
        <li>
          compaginar trabajo por cuenta ajena de 8 horas (soy
          arquitecta-interiorista y en lugar de sistemas de organización, a
          veces diseño espacios);
        </li>

        <li>
          un emprendimiento de formación para interioristas que si te interesa
          es{" "}
          <a href="https://beinteriordesigner.com/" target="_blank">
            aquí
          </a>
          ;
        </li>

        <li>y mi crecimiento personal en terapia, hábitos y demás;</li>
      </ul>

      <p>
        Esa herramienta como te imaginarás, es Notion. Y cada sistema de
        organización que creaba lo compartía de forma gratuita. Aún lo
        hago.{" "}
      </p>
      <br></br>
      <p>
        Tratar de compaginarlo todo y al mismo tiempo disfrutar por el camino,
        fue lo que me llevó a investigar la ciencia detrás de la productividad.
        Hasta el punto de que a la lista anterior súmale que estoy estudiando
        una nueva carrera, psicología. Desde entonces me dedico a comprender y
        enseñar todo lo que puedo sobre la productividad sana, para que{" "}
        <b>
          todos podamos hacer{" "}
          <i>más de aquellas cosas que de verdad nos importan.</i>
        </b>{" "}
      </p>
      <br></br>
      <br></br>
      <p>
        Desde 2024 escribo una newsletter semanal donde comparto consejos de
        productividad para tu negocio y vida personal, o como a mí me gusta
        llamarlos: tips para tocarte la papaya (porque si sigues estos tips
        tendrás más tiempo para tocártela), a veces también doy algún regalo
        pero, claro, solo a los suscriptores.{" "}
      </p>
      <p>Si te gusta la idea te apuntas ahí: </p>

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
      <h2>
        Algunos comentarios no solicitados de mis vídeos de formación sobre
        productividad con Notion.
      </h2>
      <br></br>
      <br></br>

      <p className="mx-20 ">
        <i className=" bg-gray-200">
          “fui a parar a tu canal buscando algún tutorial de Notion... Y total,
          que acabé apuntada a tu boletín y sólo quería decirte que siempre
          consigues sacarme una sonrisa y darme esa colleja que tanta falta me
          hace para dejar de procrastinar y ponerme de una vez con el proyecto
          con el que llevo, literalmente, años soñando.”
        </i>
      </p>
      <br></br>
      <p className="mx-20 ">
        <i className=" bg-gray-200">
          “Hola, he visto varios videos sobre el tema, y hasta ahora este ha
          sido el mas pedagógico para comprender e iniciar el uso de esta
          herramienta, incluso realice un curso on line donde escuche por
          primera vez de esta plataforma y ni ellos son tan precisos como tu en
          este video... gracias…”.
        </i>
      </p>
      <br></br>
      <p className="mx-20 ">
        <i className=" bg-gray-200">
          “Laura, tu contenido me ha enamorado, y lo explicas de forma súper
          sencilla. Estoy usando Notion para mi empresa de Pinterest Marketing.
          Me gustaría saber (…) Gracias”
        </i>
      </p>
      <br></br>
      <p className="mx-20 ">
        <i className=" bg-gray-200">
          “Wow reina! Está increíble, era justo lo que necesitaba! Muchas
          gracias por el contenido de valor, suscrito para seguir aprendiendo a
          usar Notion”.
        </i>
      </p>
      <br></br>
      <p className="mx-20 ">
        <i className=" bg-gray-200">
          “(…) tengo tdah diagnosticado hace poco y ya estoy cansada de no tener
          control en mi vida, y vengo utilizando notion pero las plantillas que
          encontre relmente no las utilizaba. Pero hoy te encontre y ya
          personalize esta plantilla y la de habit tracker y me gusta mucho.
          Gracias por compartir tus plantillas gratis. Super bien explicado
          todo. Espero poder mantenerme constante, a ver que tal. Voy a sugerir
          tus videos y plantillas, te mereces todo. Gracias”
        </i>
      </p>
      <br></br>
      <p>
        {" "}
        <b>
          Por cierto, si quieres ver las plantillas de Notion a las que hacen
          referencia, es{" "}
          <a href="https://emprendeconnotion.com/plantillas" target="_blank">
            aquí
          </a>
          .{" "}
        </b>
      </p>
      <br></br>
      <p className="mx-20 ">
        <i className=" bg-gray-200">
          “Hola Laura! Estoy encantada con tus vídeos! A parte de que eres un
          encanto como persona y te expresas súper bien, lo explicas todo súper
          fácil. Había intentado usar Notion años atrás y no terminaba de
          encontrarle el punto hasta que te descubrí! Y ahora estoy encantada
          con el, organizando toda mi vida y mi empresa con él.”
        </i>
      </p>
      <br></br>
      <p className="mx-20 ">
        <i className=" bg-gray-200">
          “(…)tu canal ayuda a organizarnos, sea cual sea la razon (negocios,
          colegio,vida,etc). tu canal me a ayudado Muchisimos a organizar mi
          vida y mi negocio. EN FIN GRACIAS.”
        </i>
      </p>
      <br></br>
      <p className="mx-20 ">
        <i className=" bg-gray-200">
          {" "}
          “(…)supe de Notion hace varios días, he visto varios muchos videos, ya
          abrí una cuenta... la cerré porque no me di "mañas", un poco
          impaciente. Seguí viendo tutoriales, hasta que apareció el tuyo, es
          fantástico, explicas perfecto y conviertes el vídeo en uno de consulta
          permanente. El esmero de tu vídeo lo hace muy valioso.”
        </i>
      </p>
      <br></br>
      <p className="mx-20 ">
        <i className=" bg-gray-200">
          {" "}
          “muchas gracias por tu canal y tu labor también respecto a los
          consejos que das de desarrollo personal!”
        </i>
      </p>
      <br></br>
      <p>
        {" "}
        Lo que está claro es que las personas no ganan nada por recomendarme.
        Nadie les ha pedido que me dejen un comentario, no les doy un jamón a
        cambio.{" "}
      </p>
      <br></br>
      <p>
        Si tú también quieres formar parte de los más de 2000 personas suscritas
        que reciben la newsletter semanal gratuita donde comparto recursos y
        consejos de productividad (ya sabes, para hacer más de aquello que de
        verdad te importa), es aquí:
      </p>
      <SubscriptionForm
        titleForm={FORM_DATA.titleForm}
        textButton={FORM_DATA.textButton}
        label={FORM_DATA.label}
        id={FORM_DATA.id}
        name={FORM_DATA.name}
      />
      <br></br>
      <p>Un abrazo y que Notion te acompañe.</p>
      <p>Laura de Arquer.</p>
    </main>
  );
};

export default About;
