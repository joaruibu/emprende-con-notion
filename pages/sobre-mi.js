import React from 'react'
import TitlePage from '../components/TitlePage'
import SubscriptionForm from '../components/Form'


const TITLE_DATA = {
    title: 'Sobre mí',
    subtitle: 'O, mi Currículum Vitae.'
}
const FORM_DATA = {
    titleForm: 'El acceso a mis formaciones privadas y a mis plantillas de pago es exclusivo para mis suscriptores. Si te interesa, es aquí.',
    textButton: 'Suscribirme',
    id: '191722FC90141D02184CB1B62AB3DC2666CEB8A31636BD4D3A71BB2DBA449EDE3FCCE6D48BABF849F8F4C6E50A91FD85E19A5610F60343109DECB5668DDE017',
}

const About = () => {
    return (
        <main className=" border-2 border-stone-950 bg-stone-50 p-4 rounded-xl my-8">

            <TitlePage subtitle={TITLE_DATA.subtitle}>{TITLE_DATA.title}</TitlePage>

            <p>Laura de Arquer</p>

            <p>Santa Cruz de Tenerife, España</p>

            <p>Contacto personal: laura@emprendeconnotion.com</p>

            <br></br>

            <p> En mi infancia no tenía muchos recursos. Mientras estaba en la escuela secundaria tenía un trabajo, practicaba deporte, sentía obligación de sacar buenas notas para conseguir becas, y hacía las cosas que hacen todos los jóvenes a esa edad como divertirse, ir a fiestas.</p>

            <p>Aprendí a ser productiva porque tenía que conseguir suficiente dinero para pagar esa vida social “normal” que tenían mis compañeros, y cosas del día a día como ropa nueva. </p>

            <p>Al terminar bachiller con matrícula de honor estudié arquitectura y siempre trabajé mientras estudiaba. </p>

            <p>Con poco tiempo disponible, me proponía administrar de la mejor manera posible las horas del día. </p>

            <p>Aprendí a ser productiva porque no tenía otra alternativa.</p>

            <br></br>

            <br></br>

            <h2>Trabajos</h2>

            <br></br>

            <ul className="mx-8">

                <li>Mi primer trabajo, con apenas 14 años, fue de profesora particular a niños con padres esnobs que les gusta presumir de estar estresados. A mí nunca me han gustado los niños. Y a los <i>padres-esnobs-que-les-gusta-presumir-de-estar-estresados</i> tampoco les gustaban sus niños.
                    <br></br>
                    Cuando yo terminaba la clase particular es cuando ellos llegaban a casa de trabajar y casi siempre se quedaban hablando conmigo.
                    <br></br>
                    Había padres directores de colegio, empresarios e incluso azafatas que pasaban la semana fuera de casa. Y de lo que les encantaba hablar es de lo muy ocupados y estresados que estaban. Y al mismo tiempo, de lo maravillosamente bien que se organizaban, a pesar de todo su trabajo. Como justificándose por no estar en casa porque ellos eran <i>padres-esnobs-que-les-gusta-presumir-de-estar-estresados</i>, sabes.
                    <br></br>
                    Pensaba entonces y sigo pensando ahora que con ese nivel de estrés y dejadez de su vida personal… Muy bien organizados no estaban. No sé.</li>

                <li>En 2013 fui dependienta en una óptica en el centro de Valencia. Lo único que sabía de gafas es que yo llevaba unas y, por cierto, las cambiaba aproximadamente cada cinco años. No me interesaban ni las gafas ni venderlas, pero estudiaba en los ratos muertos el teórico de conducir. Entre eso, las clases particulares y la carrera, me sentía más ocupada que los <i>padres-esnobs-que-les-gusta-presumir-de-estar-estresados</i>.  </li>

                <li>En 2016 tuve mi primeras prácticas como arquitecta. Estaba en tercero de carrera y tuve claro que no quería dedicarme a la arquitectura.</li>

                <li>En 2017 trabajé en otro despacho de proyectos más instagrameables. Eran tres socios, de los cuales realmente hincaba codos solo uno. Pero, claro, no había ningún tipo de organización interna. Ni un calendario. Nada. Así que, ¿cómo iban a ser conscientes de cuánto tiempo le metía cada uno a la empresa? Un día tenía médico y salí pronto. Me dijeron que sin problema pero que tendría que recuperar esas horas. Les contesté que ya las había recuperado. No lo entendieron y les envié por email mi registro de horas con todos los días que me había quedado de más. Era un excel, todavía no existía Notion.</li>

                <li>En 2018 estaba de Erasmus en Milán. No me daba para pagarme una habitación propia así que compartía habitación en un piso antiguo cerca de la universidad. Me gestioné mis ahorros, una pequeña asignación familiar y las becas para poder pasar ese año sin trabajar. Me apuntaba hasta las botellas de agua que compraba. Como no existía Notion me resignaba con excel. Al volver tuve un trabajo temporal recorriendo toda la universidad politécnica de Valencia para actualizar las medidas de evacuación acorde a la SUA (una normativa de Seguridad de Utilización y Accesibilidad). A mano. Las horas también las apuntábamos a mano, claro. Al menos nos las pedían apuntadas, que entre eso y nada, eso es algo.</li>

                <li>Poco después fui dependienta en Bimba y Lola: a punto de independizarme necesitaba volver a ahorrar. A una semana vista, nos pasaban el calendario con los turnos. Llamarlo calendario es un poco denigrante para los calendarios. Era una captura de pantalla cutre de un excel cutre. Los turnos variaban entre las 10.00 y las 22.00, de forma totalmente arbitraria. A una semana vista era imposible organizarse nada. Al mes envié una carta de renuncia.</li>

                <li>En 2019 conseguí trabajo de arquitecta en una de las multinacionales más importantes a nivel mundial del sector cerámico. Suena importante, ¿verdad? Pues no. Jefes machistas, homófobos y racistas. Lo tenían todo. El regalo de bienvenida era una agenda de polipiel verde con el logo de la empresa en letras doradas. Guau.
                    <br></br>
                    Una vez se me ocurrió mencionar la idea de utilizar Assana, aún no conocía Notion, pero teníamos prohibido organizarnos con aplicaciones externa por temas de privacidad. Excel estaba permitido, así que pude llevar allí un seguimiento de los clientes. Era desesperante, pero funcionaba mejor que la <i>agenda-de-polipiel-verde</i>.
                    <br></br>
                    Eso sí, la <i>agenda-de-polipiel-verde</i> era obligatoria en cualquier reunión.</li>

                <li>A partir de 2020 decidí no aguantar a nadie más, hacerme autónoma y buscarme un trabajo sin jefes. Di muchas formaciones a profesionales que querían especializarse en interiorismo o en herramientas digitales para interioristas como AutoCad, SketchUp, PS, etc. Muchas. Desde carpinteros a metalistas, interioristas, un ingeniero civil de EEUU, una cajera que querían cambiar su profesión y meterse en el sector del interiorismo, e incluso un hombre que hacía chimeneas tradicionales en el País Vasco.
                    <br></br>
                    <b>Esta fue mi mejor escuela. Donde aprendí a escuchar lo que cada profesional necesita.</b>
                    <br></br>
                    Todos los calendarios y recursos que creaba y compartía los gestionaba a través de Notion, por supuesto. </li>

                <li>A finales de 2020 empecé mi canal de Emprende con Notion en YouTube, y para 2021 ya me escribían las primeras personas pidiéndome consultorías después de haber probado mis plantillas</li>

            </ul>

            <p>Esos meses combiné las formaciones con colaborar con otros estudios e inmobiliarias haciendo planos y renders de sus proyectos. Pero me equivoqué de estrategia. Acabé teniendo muchos jefes en lugar de ninguno. Te cuento...</p>

            <ul className="mx-8">

                <li>Con la que más duré fue con una interiorista de Gijón que quería una intraemprendedora. Pasé de una agenda-de-polipiel-verde, a un estudio de interiorismo que usaba todo para organizarse: excel, assana, trello, word, toggl. Te puedes imaginar el caos. Le creé en mi tiempo libre todo un ecosistema interno brutal en Notion para que pudiese organizar los proveedores, entregas, clientes, etc., pero ella no quiso implementarlo. A los seis meses corté con ella. Creo que ha habido rupturas menos dramáticas. </li>

                <li>En 2022 seguía siendo autónoma. Y ser autónoma en España es difícil. Cosas de la vida me obligaron a necesitar ingresos fáciles, no difíciles. O sea, volver al trabajo por cuenta ajena. Trabajé como interiorista en una importante cadena de restauración valenciana. Y a diferencia de las anteriores empresas, aquí no imponían un control absurdo al empleado: lo que importaba es que cumpliera objetivos. Mientras cumpliera tenía libertad para organizarme como quisiera. Y cumplía, vaya si cumplía. Además creé en Notion todo un ecosistema interno para gestionar los proyectos, entregas, fichajes de horas, etc.  </li>

                <li>En 2023 estuve en un proceso de contratación en Notion para un puesto como creadora de plantillas. Me salí del proceso tras la primera entrevista. El ritmo frenético americano no lo quiero para mí ni para la gente que se forma conmigo. </li>

                <li>Hasta ahora, en 2024, cuando mi canal ha superado ya los 10.000 suscriptores, y eso que por cosas de la vida estuve dos años sin poder publicar nuevo contenido. Pero los vídeos tienen el suficiente valor y estructura para que funcionen sin que estuviera yo pendiente. He creado plantillas en consultoría para muchos emprendedores: estudios de interiorismo, CRMs para desarrolladores web, consultores inmobiliarios, o ideas de emprendimiento menos convencionales como crear desayunos para profesionales. Por cierto, ya no acepto consultorías. </li>


            </ul>

            <br></br>

            <br></br>

            <h2>Detalles que quizás te interesen</h2>

            <br></br>

            <p>Fui de las cinco primeras consultoras de Notion de habla hispana. Cuando empecé, Notion tenía solo dos años de vida y ni siquiera estaba traducido a español. Así que también fui de las primeras en crear recursos de Notion en español.</p>

            <br></br>

            <br></br>

            <h2>Aptitudes</h2>

            <br></br>

            <p>Para poner aquí un montón de cosas buenas como lo productiva y maravillosa que soy, mejor me lo ahorro yo y te lo ahorro a ti. Es que verás, acabé harta de los jefes que te dicen lo importante que es el trabajo en equipo mientras ellos se tocaban las pelotas literal y figuradamente en el despacho. Entonces si te interesa lo que hago te suscribes. Si no, no lo hagas.</p>

            <br></br>

            <br></br>

            <h2>Qué hago en la actualidad</h2>

            <br></br>

            <p>Sigo creando plantillas y formaciones para que otros profesionales puedan implementar Notion y no convertirse en aquellos <i>padres-esnobs-que-les-gusta-presumir-de-estar-estresados</i> que conocí en mi primer trabajo. </p>

            <p>Eso sí, el acceso a mis formaciones privadas y a mis plantillas de pago, son solo para mis suscriptores.</p>

            <p>Si quieres entrar, abajo en la caja de suscripción.</p>

            <br></br>

            <p>Un abrazo y que Notion te acompañe.</p>

            <p>Laura de Arquer.</p>

            <br></br>

            <SubscriptionForm
                titleForm={FORM_DATA.titleForm}
                textButton={FORM_DATA.textButton}
                id={FORM_DATA.id} />

        </main>
    )
}

export default About