import React from "react";
import TitlePage from "../components/TitlePage";
import SubscriptionForm from "../components/Form";

const TITLE_DATA = {
  title: "Sobre mí",
  subtitle: "Currículum Vitae. El CV que siempre quise escribir... ",
};

const FORM_DATA = {
  titleForm:
    "El acceso a mis formaciones privadas y a mis plantillas de pago es exclusivo para mis suscriptores. Si te interesa, es aquí.",
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
      <h2> Laura de Arquer</h2>
      <p>
        Santa Cruz de Tenerife, España <br></br>
        Contacto personal: Suscríbete y tendrás mi email.{" "}
      </p>
      <br></br>
      <h2>Estudios</h2>
      <br></br>
      <p>
        {" "}
        En mi infancia no tenía muchos recursos. A ver, mi familia no pasaba
        hambre pero la situación familiar era terrible. Algún día te hablaré de
        ello, pero la cosa es que aprendí a ser productiva porque tenía que
        conseguir suficiente dinero para pagar esa vida social “normal” que
        tenían mis compañeros, y cosas del día a día como ropa nueva.
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
        <b>
          Aprendí a ser productiva porque no tenía otra alternativa. Y, gracias
          a ello, estamos aquí ahora.
        </b>
      </p>
      <br></br>
      <br></br>
      <h2>Trabajos</h2>
      <br></br>
      <ul>
        <li>
          Mi primer trabajo, con apenas 14 años, fue de profesora particular. A
          mí nunca me han gustado los niños. Pero a esos padres esnobs tampoco
          les gustaban mucho sus niños.
          <br></br>
          Cuando yo terminaba la clase particular es cuando ellos llegaban a
          casa de trabajar y casi siempre se quedaban hablando conmigo.
          <br></br>
          Había padres directores de colegio, empresarios e incluso azafatas que
          pasaban la semana fuera de casa. Y de lo que les encantaba hablar es
          de lo muy ocupados y estresados que estaban. Y al mismo tiempo, de lo
          maravillosamente bien que se organizaban, a pesar de todo su trabajo.
          Como justificándose por no estar en casa porque ellos eran{" "}
          <i>padres-esnobs-que-presumen-de-estar-estresados</i>, sabes.
          <br></br>
          Pensaba entonces y sigo pensando ahora que con ese nivel de estrés y
          dejadez de su vida personal… Muy bien organizados no estaban. No sé.
        </li>

        <li>
          En 2013 fui dependienta en una óptica en el centro de Valencia. Lo
          único que sabía de gafas es que yo llevaba unas y, por cierto, las
          cambiaba aproximadamente cada cinco años. No me interesaban ni las
          gafas ni venderlas, pero estudiaba en los ratos muertos el teórico de
          conducir. Entre eso, las clases particulares y la carrera, me sentía
          más ocupada que los{" "}
          <i>padres-esnobs-que-presumen-de-estar-estresados</i>.{" "}
        </li>

        <li>
          En 2016 tuve mi primeras prácticas como arquitecta. Estaba en tercero
          de carrera y tuve claro que no quería trabajar como arquitecta.
        </li>

        <li>
          En 2017 trabajé en otro despacho de proyectos más instagrameables.
          Eran tres socios, de los cuales realmente hincaba codos solo uno.
          Pero, claro, no había ningún tipo de organización interna. Ni un
          calendario. Nada. Así que, ¿cómo iban a ser conscientes de cuánto
          tiempo le metía cada uno a la empresa? Un día tenía médico y salí
          pronto. Me dijeron que sin problema pero que tendría que recuperar
          esas horas. Les contesté que ya las había recuperado. No lo
          entendieron y les envié por email mi registro de horas con todos los
          días que me había quedado de más. Era un excel, todavía no existía
          Notion.
        </li>

        <li>
          En 2018 estaba de Erasmus en Milán. No me daba para pagarme una
          habitación propia así que compartía habitación en un piso antiguo
          cerca de la universidad. Me gestioné mis ahorros, una pequeña
          asignación familiar y las becas para poder pasar ese año sin trabajar.
          Me apuntaba hasta las botellas de agua que compraba en excel (no
          existía Notion). Al volver tuve un trabajo temporal recorriendo toda
          la universidad politécnica de Valencia para actualizar las medidas de
          evacuación acorde a la SUA (una normativa). A mano. Las horas también
          las apuntábamos a mano, claro.
        </li>

        <li>
          Poco después fui dependienta en Bimba y Lola: a punto de
          independizarme necesitaba volver a ahorrar. A una semana vista, nos
          pasaban el calendario con los turnos. Llamarlo calendario es un poco
          denigrante para los calendarios. Era una captura de pantalla cutre de
          un excel cutre. Los turnos variaban entre las 10.00 y las 22.00, de
          forma totalmente arbitraria. A una semana vista era imposible
          organizarse nada. Al mes envié una carta de renuncia.
        </li>

        <li>
          En 2019 conseguí trabajo de arquitecta en una de las multinacionales
          más importantes a nivel mundial del sector cerámico. Suena importante,
          ¿verdad? Pues no. Jefes machistas, homófobos y racistas. Lo tenían
          todo. El regalo de bienvenida era una agenda de polipiel verde con el
          logo de la empresa en letras doradas. Guau.
          <br></br>
          DEbía usar Excel para llevar un seguimiento de los clientes. Era
          desesperante, pero funcionaba mejor que la{" "}
          <i>agenda-de-polipiel-verde</i>.<br></br>
          Eso sí, la <i>agenda-de-polipiel-verde</i> era obligatoria en
          cualquier reunión.
        </li>

        <li>
          A partir de 2020 decidí no aguantar a nadie más, hacerme autónoma y
          buscarme un trabajo sin jefes. Di muchas formaciones a profesionales
          que querían especializarse en interiorismo o en herramientas digitales
          para interioristas como AutoCad, SketchUp, PS, etc. Muchas. Desde
          carpinteros a metalistas, interioristas, un ingeniero civil de EEUU,
          una cajera que querían cambiar su profesión y meterse en el sector del
          interiorismo, e incluso un hombre que hacía chimeneas tradicionales en
          el País Vasco.
          <br></br>
          <b>
            Esta fue mi mejor escuela. Donde aprendí a escuchar lo que cada
            profesional necesita.
          </b>
          <br></br>
          Todos los calendarios y recursos que creaba y compartía los gestionaba
          a través de Notion, por supuesto.{" "}
        </li>

        <li>
          A finales de 2020 empecé mi canal de Emprende con Notion en YouTube, y
          para 2021 ya me escribían las primeras personas pidiéndome
          consultorías después de haber probado mis plantillas
        </li>
      </ul>
      <p>
        Esos meses combiné las formaciones con colaborar con otros estudios e
        inmobiliarias haciendo planos y renders de sus proyectos. Pero me
        equivoqué de estrategia. Acabé teniendo muchos jefes en lugar de
        ninguno. Te cuento...
      </p>
      <ul>
        <li>
          Con la que más duré fue con una interiorista de Gijón que quería una
          intraemprendedora. Pasé de una agenda-de-polipiel-verde, a un estudio
          de interiorismo que usaba todo para organizarse: excel, assana,
          trello, word, toggl. Te puedes imaginar el caos. Le creé en mi tiempo
          libre todo un ecosistema interno brutal en Notion para que pudiese
          organizar los proveedores, entregas, clientes, etc., pero ella no
          quiso implementarlo. A los seis meses corté con ella. Creo que ha
          habido rupturas menos dramáticas.{" "}
        </li>

        <li>
          En 2022 seguía siendo autónoma. Pero cosas de la vida me obligaron a
          necesitar ingresos fáciles, no difíciles (y ser autónomo es difícil).
          O sea, volver al trabajo por cuenta ajena. Trabajé como interiorista
          en una importante cadena de restauración valenciana. Y a diferencia de
          las anteriores empresas, aquí no imponían un control absurdo al
          empleado: lo que importaba es que cumpliera objetivos. Mientras
          cumpliera tenía libertad para organizarme como quisiera. Y cumplía,
          vaya si cumplía. Además creé en Notion todo un ecosistema interno para
          gestionar los proyectos, entregas, fichajes de horas, etc.{" "}
        </li>

        <li>
          En 2023 estuve en un proceso de contratación en Notion para un puesto
          como creadora de plantillas. Me salí del proceso tras la primera
          entrevista. El ritmo frenético americano no lo quiero para mí ni para
          la gente que se forma conmigo.{" "}
        </li>

        <li>
          Hasta ahora, en 2024, cuando mi canal ha superado ya los 10.000
          suscriptores. He creado plantillas en consultoría para muchos
          emprendedores: estudios de interiorismo, CRMs para desarrolladores
          web, consultores inmobiliarios, o ideas de emprendimiento menos
          convencionales como crear desayunos para profesionales. <br></br>Por
          cierto, ya no acepto consultorías.{" "}
        </li>
      </ul>
      <br></br>
      <br></br>
      <h2>Detalles que quizás te interesen</h2>
      <br></br>
      <p>
        Fui de las cinco primeras creadoras de un canal de difusión sobre Notion
        de habla hispana. Cuando empecé, Notion tenía solo dos años de vida y ni
        siquiera estaba traducido a español. Así que sí, también fui de las
        primeras en hacer consultorías de Notion en España.
      </p>
      <br></br>
      <br></br>
      <h2>Aptitudes</h2>
      <br></br>
      <p>
        Me ahorro y te ahorro las idioteces de: trabajo en equipo, productiva y
        tal. Verás, acabé hasta los ovarios de los jefes que te dicen lo
        importante que es el trabajo en equipo mientras ellos se tocaban las
        pelotas literal y figuradamente en el despacho. Entonces si te interesa
        lo que hago te suscribes. Si no, no lo hagas.
      </p>
      <br></br>
      <br></br>
      <h2>Qué hago en la actualidad</h2>
      <br></br>
      <p>
        {" "}
        Soy cocreadora de un negocio llamado Be Interior Designer, donde vendo
        formaciones de alto nivel a más de 10k arquitectos e interioristas, esa
        formación sin colores rosas que yo siempre quise recibir pero que ni la
        universidad ni los másters de miles de euros enseñan.
      </p>
      <p>Pero quizás eso te interese poco si no eres arqutiecto. </p>

      <p>
        Lo que sí te puede interesar es que tanto Be Interior Designer como
        Emprende con Notion son las dos líneas de negocio que me han permitido
        alcanzar la libertad sobre mi tiempo, eso que siempre había buscado y
        que ahora te puedo enseñar a encontrar aquí, en Emprende con Notion,
        donde enseño a cualquier persona a implementar Notion en sus negocios y
        en sus vidas para no convertirse en aquellos{" "}
        <i>padres-esnobs-que-presumen-de-estar-estresados</i> que conocí en mi
        primer trabajo.{" "}
      </p>
      <p>
        Eso sí, el acceso a mis formaciones privadas y a mis plantillas de pago,
        son solo para mis suscriptores.
      </p>
      <p>Si quieres entrar, abajo en la caja de suscripción.</p>
      <br></br>
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
