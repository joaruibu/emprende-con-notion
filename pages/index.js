import { useEffect, useState } from "react";
import SubscriptionForm from "../components/Form"
import TitlePage from "../components/TitlePage"


const Home = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    const TITLE_DATA = {
        title: 'Suscríbete',
        subtitle: 'Suscríbete a mi lista y recibe los mejores consejos para ser mucho más productivo con Notion, en tu trabajo y en tu vida.'
    }

    const FORM_DATA = {
        titleForm: '',
        textButton: 'Suscribirme',
        id: '191722FC90141D02184CB1B62AB3DC2666CEB8A31636BD4D3A71BB2DBA449EDE3FCCE6D48BABF849F8F4C6E50A91FD85E19A5610F60343109DECB5668DDE017E',
        name: 'cm-tlsuij-tlsuij'

    }

    useEffect(() => {
        setDomLoaded(true);
    }, []);


    return (
        <main className=" border-2 bg-stone-50 border-stone-950 p-4 rounded-xl my-8">

            {
                domLoaded &&
                <>

                    <TitlePage subtitle={TITLE_DATA.subtitle}>
                        {TITLE_DATA.title}
                    </TitlePage>

                    <p>Ir a clases de cerámica mientras tenía proyectos pendientes, me daba bastante remordimiento y no me dejaba disfrutarlo. Y te podría decir que ahora es diferente. Que mi tiempo libre ha aumentado sin rechazar proyectos ni invertir ni un euro más, y que voy a cerámica sin remordimientos y disfrutando. Lo siento. No es verdad.</p>

                    <p>No es verdad lo de que no tenga remordimiento. Lo de que mi tiemop libre ha aumentado sin rechazar proyectos ni invertir ni un euro más sí es verdad.</p>

                    <p>Lo que pasa es que buena parte de ese nuevo tiempo libre lo dedico a hacer más proyectos para no sentirme mal... ¿Culpa emprendedora? ¿No sentirse nunca lo suficiente productiva? Puede ser. Sigo trabajándomelo. Lo que está claro es que yo enseño a mis suscriptores como aumentar su tiempo libre sin rechazar proyectos ni invertir ni un euro más. Lo que luego hagas con ese tiempo libre de más... Ya es cosa tuya, claro. </p>

                    <p>Si te interesa empezar aprender conmigo, es abajo, en la caja de suscripción.</p>

                    <br></br>



                    <SubscriptionForm
                        titleForm={FORM_DATA.titleForm}
                        textButton={FORM_DATA.textButton}
                        id={FORM_DATA.id}
                        name={FORM_DATA.name} />



                    <br></br>

                    <br></br>

                    <p>Y hablando de culpa emprendedora... Muchas personas que llegan a mi canal de YouTube, Emprende con Notion, piensan que solo por empezar a utilizar Notion van a empezar a ser más productivos. </p>

                    <p>Que Notion es igual a productividad. Y ojalá fuera tan fácil.</p>

                    <br></br>

                    <p>La gente quiere cumplir objetivos muy rápido y muy fácil. No les culpo, pero es complicado. Bastante. Ahora, como ese sueño está ahí, pues hay muchos supuestos gurús de la productividad que venden cursos, formaciones, podcast y cosas alrededor de la industria de Notion y la productividad tipo…</p>

                    <p><i>¿Cómo cambiaría tu vida si fueras una persona ESTRUCTURADA y ORGANIZADA? 8 AÑOS de MÁXIMA PRODUCTIVIDAD personal.</i> </p>

                    <p><i>AVANZA 2 DÍAS EN 1, usando NOTION.</i></p>

                    <p><i>Los 5 SECRETOS de la PRODUCTIVIDAD EXTREMA.</i></p>

                    <p><i>Vive la EFECTIVIDAD y sé FELIZ.</i> </p>

                    <p><i>Cómo logro hacer TODO.</i> </p>

                    <br></br>

                    <p>¿Pero sabes qué?</p>

                    <p>Son idioteces para incautos. No lo digo porque no puedas lograr ser más estructurado y organizado, pero jamás durante 8 años seguidos. Uses Notion, o una agenda de papel.</p>

                    <p>Y desde luego, lo que sí te digo es que no vas a lograr hacerlo TODO siempre. No lo harás. La efectividad extrema no te hará feliz. </p>

                    <p>Lo único que hará será frustrarte más y perder el dinero y el tiempo del curso de productividad que hayas hecho. </p>

                    <br></br>

                    <p>Ahora, hay una manera bastante sensata de mejorar tu productividad vital y laboral, incluso si eres un despiste que se olvida las llaves al salir de casa o aunque tengas poquísimas horas libres por todas las horas extras que te obligan a hacer. No es nada milagroso ni es un “secreto” que conozcamos solo unos pocos y que te lo voy a revelar porque soy así de maja.</p>

                    <p>El “secreto” es entender que la productividad es una forma de pensar, es una habilidad con la que tienes que gestionar tu vida. Estructurarla. Masticarla. Desde los cimientos. </p>

                    <p>En cambio, Notion, o Trello, o una agenda, o el método mágico de 5 pasos del gurú de turno… solo son una herramienta. ¿Ves la diferencia?  </p>

                    <p>No puedes pretender mejorar tu productividad si no gestionas antes tu vida. Es imposible. </p>

                    <p>Como dice Tony Robbins “No puedes planificar tu día hasta que tengas un plan para tu vida”. Eso sí, una vez te lo trabajas, tu relación con la organización y cómo vas a vivir a partir de ahora, cambia para siempre.</p>

                    <p>Si quieres ver cómo hacer esto, es aquí.</p>

                    <br></br>

                    <SubscriptionForm
                        titleForm={FORM_DATA.titleForm}
                        textButton={FORM_DATA.textButton}
                        id={FORM_DATA.id}
                        name={FORM_DATA.name} />


                    <br></br>

                    <br></br>

                    <p>Al fin y al cabo, ¿qué sabrá Tony Robbins? </p>

                    <p>Te lo digo porque Tony Robbins, el coach <i>yanki</i> que más sabe de vida y negocios, ha repetido frases como “El éxito es hacer lo que quieres, cuando quieres, donde quieres, con quién quieres y tanto como quieres”. </p>

                    <p>O sea, este nº1 de EEUU en estrategia de vida y negocio, no liga el éxito profesional con una <i>productividad extrema</i> sino con la gestión personal, porque esa gestión de vida es la que luego te hace ser más productivo en tu trabajo. </p>

                    <p>Pero… ¿qué sabrá Tony Robbins, verdad?</p>

                    <p>En cualquier caso, si quieres suscribirte es abajo, en la caja de suscripción.</p>

                    <br></br>

                    <SubscriptionForm
                        titleForm={FORM_DATA.titleForm}
                        textButton={FORM_DATA.textButton}
                        id={FORM_DATA.id}
                        name={FORM_DATA.name} />

                    <br></br>

                    <br></br>

                    <p>Ahora vamos con lo que puedes aprender si te suscribes a la lista. Digo puede, porque por mucho que yo te ayude y te comparta recursos, al final el que lleva a la acción todo esto, o no, eres tú. </p>

                    <p>Pues eso, vamos con lo que puedes conseguir si te suscribes:</p>

                    <ul className="mx-8">
                        <li><b>Te voy a enseñar por qué Notion es una herramienta fantástica para poder trabajar tus objetivos y priorizarlos. </b>¿Qué objetivos? Pues no sé. Eso lo sabes tú. Pero como te he dicho antes, mejorar tu productividad depende en buena parte de trabajar tus prioridades, sean las uqe sean.  </li>
                        <li><b>Cómo implementar Notion en tu trabajo para ser más productivo, trabajes de lo que trabajes:</b> construcción, ventas, derecho, fantasía… Sí, en cualquier sector. O sea, cómo puedes implementarlo tú, no tu empresa. Que lo implemente tu empresa si no es una tecnológica… ya es otra historia. También te contaré esa otra historia. </li>
                        <li><b>Cómo mejorar tu productividad de vida en el día a día: tus rutinas de gimnasio, tu dieta, tus oposiciones, tu terapia, la gestión de tus clientes… Vaya, tu vida diaria con Notion. Todo esto con anécdotas humanas y reales, como cuando se me olvidaban las bragas en casa.</b></li>
                        <li>Igual no lo sabías, pero <b>Notion lanza actualizaciones y nuevas funciones todas las semanas. Algunas son paja, otras son la leche (como cuando sacaron la función de hacer cronogramas, o de crear tareas recurrentes)</b>. Pues si eso no lo sabías ahora podrás enterarte en la newsletter. O no. Porque las que no sirvan para mejorar tu productividad diaria no las mencionaré.</li>
                        <li>Porque Notion se actualiza, muchas de las plantillas o cursos hechos por creadores de Notion se van quedando obsoletos. Por ponerte un ejemplo, en un habit tracker antes no se podían poner eventos recurrentes. Ahora sí. En mi newsletter tendrás acceso a mis plantillas actualizadas, solo para mis suscriptores.</li>
                        <li>También compartiré contigo plantillas... Obvio, ¿no? Bueno no sé, pero por si te quedaban dudas sí, mis suscriptores tb recibirán plantillas exclusivas. Eso sí, algunas serán de pago.</li>
                        <li>Tendrás muchas más probabilidades de que te conteste a comentarios en los tutoriales de mi canal de YouTube @emprendeconnotion. ¿Por estar suscrito a la newsletter? ¿Cómo es eso? <b>Porque tendrás acceso prioritario a los vídeos nuevos 24 horas antes de que se hagan públicos. Y claro, es mucho más probable que pueda responderte a los comentarios que me hagas en esas primeras 24 horas. Como te digo, esto es exclusivo para mis suscriptores de la newsletter.</b> </li>
                        <li><b>Por qué te interesa enterarte de todos los talleres que voy sacando. Que luego los compres o no es otra histoira, pero si no estás suscrito no podrás acceder siquiera a la página de ventas. Y por tanto, no podrás saber si te interesa o no…</b></li>

                    </ul>

                    <br></br>

                    <p>Si crees que esto te puede interesar puedes suscribirte abajo. Si ves que no va contigo, no te suscribas. </p>

                    <br></br>

                    <SubscriptionForm
                        titleForm={FORM_DATA.titleForm}
                        textButton={FORM_DATA.textButton}
                        id={FORM_DATA.id}
                        name={FORM_DATA.name} />

                    <br></br>
                    <br></br>

                    <h2>Opiniones reales, de gente real, no solicitadas.</h2>

                    <br></br>

                    <p>Todas son opiniones no solicitadas de gente que me sigue desde hace tiempo en mi canal, y el no ser solicitadas es lo que las hace reales. Tan reales son que las puedes ver en mi canal.</p>

                    <p>No compro opiniones, ni buenas ni malas, como estas:</p>

                    <br></br>

                    <p className="mx-12 sm:mx-16"><i>“No sirve”.</i></p>

                    <br></br>

                    <p className="mx-12 sm:mx-16"><i>“No explicas como creas las plantillas, no sirve”.</i></p>

                    <br></br>


                    <p>Lo que está claro es que nadie les ha pedido a las personas que me escriben que me dejen un comentario positivo. No les doy regalos a cambio, sabes. A los que me dejan comentarios negativos tampoco les doy regalos, por si te lo preguntabas.</p>

                    <p>Copio-pego:</p>


                    <br></br>

                    <p className="mx-12 sm:mx-16"><i>“(…)tu canal ayuda a organizarnos, sea cual sea la razon (negocios, colegio,vida,etc). tu canal me a ayudado Muchisimos a organizar mi vida y mi negocio. EN FIN GRACIAS.”</i></p>

                    <br></br>

                    <p className="mx-12 sm:mx-16"><i>“Wow reina! Está increíble, era justo lo que necesitaba! Muchas gracias por el contenido de valor, suscrito para seguir aprendiendo a usar Notion”.</i></p>

                    <p className="mx-12 sm:mx-16">Esto me escribió el otro día un suscriptor sobre <a href="https://www.emprendeconnotion.com/plantillas/plantilla-contabilizar-horas-de-trabajo-en-notion-7" target="_blank">la plantilla de Fichero de horas</a>, te pongo aquí el enlace por si te interesa.</p>


                    <br></br>

                    <p className="mx-12 sm:mx-16"><i>“Hola Laura! Increible el conocimiento que tienes sobre notion. Una pregunta, si una misma tarea tiene interrupciones (…)”.</i></p>

                    <br></br>

                    <p className="mx-12 sm:mx-16"><i>“Laura, tu contenido me ha enamorado, y lo explicas de forma súper sencilla. Estoy usando Notion para mi empresa de Pinterest Marketing. Me gustaría saber (…) Gracias”.</i></p>


                    <br></br>

                    <p>El siguiente me hizo especial ilusión... Porque, lo dicho, las pesronas que me dejan estos mensajes no ganan nada por recomendarme:</p>

                    <br></br>

                    <p className="mx-12 sm:mx-16"><i>“(…)Hoy vi estos tutos porque tengo tdah diagnosticado hace poco y ya estoy cansada de no tener control en mi vida, y vengo utilizando notion pero las plantillas que encontre relmente no las utilizaba. Pero hoy te encontre y ya personalize esta plantilla y la de habit tracker  y me gusta mucho. Gracias por compartir tus plantillas gratis . . Super bien explicado todo. Espero poder mantenerme constante, a ver que tal. Voy a sugerir tus videos y plantillas, te mereces todo. Gracias”</i></p>


                    <br></br>

                    <p className="mx-12 sm:mx-16"><i>“Hola Laura! Estoy encantada con tus vídeos! A parte de que eres un encanto como persona y te expresas súper bien, lo explicas todo súper fácil. Había intentado usar Notion años atrás y no terminaba de encontrarle el punto hasta que te descubrí! Y ahora estoy encantada con el, organizando toda mi vida y mi empresa con él. Así que muchas gracias por tu canal y tu labor también respecto a los consejos que das de desarrollo personal! (…)”</i></p>

                    <p className="mx-12 sm:mx-16">Comentario de una suscriptora después de ver  <a href="https://www.emprendeconnotion.com/plantillas/plantilla-crea-tu-buyer-persona-en-notion-9" target="_blank"> la plantilla de Buyer Persona, te la dejo aquí.</a></p>



                    <br></br>

                    <p className="mx-12 sm:mx-16"><i>“Hola, he visto varios videos sobre el tema, y hasta ahora este ha sido el mas pedagógico para comprender e iniciar el uso de esta herramienta, incluso realice un curso on line donde escuche por primera vez de esta plataforma y ni ellos son tan precisos como tu en este video... gracias…”.</i></p>
                    <p className="mx-12 sm:mx-16">Muchos de estos comentarios me los dejaron tras el tutorial online para aprender a usar Notoin desde 0. Si es tu caso, a parte de cotillear el canal de YouTube <a href="https://www.emprendeconnotion.com/blog" target="_blank">te recomiendo que le eches un vistazo al blog.</a></p>

                    <br></br>

                    <p className="mx-12 sm:mx-16"><i>“(…)supe de Notion hace varios días, he visto varios muchos videos, ya abrí una cuenta... la cerré porque no me di "mañas", un poco impaciente. Seguí viendo tutoriales, hasta que apareció el tuyo, es fantástico, explicas perfecto y conviertes el vídeo en uno de consulta permanente. El esmero de tu vídeo lo hace muy valioso.”</i></p>

                    <br></br>

                    <p>Todas y cada una de las palabras que lees en esta página son de gente NO imaginaria que me comprará en el futuro formaciones y plantillas como loca y hará que pueda jubilarme a los 40...</p>

                    <p>Jaja no. No a lo de jubilarme a los 40, que yo soy muy culo inquieto. Lo de que me comprarán formaciones es muy probable que sí. Todas las que has leído son comentarios no solicitados dejados por gente que ha visto mis formaciones de YouTube o que se ha descargado las plantillas que tienes en esta web.</p>

                    <p>Pero vaya, que tú por apuntarte mi lista de email no tienes que pagar nada ¿vale?</p>

                    <br></br>

                    <SubscriptionForm
                        titleForm={FORM_DATA.titleForm}
                        textButton={FORM_DATA.textButton}
                        id={FORM_DATA.id}
                        name={FORM_DATA.name} />

                    <br></br>

                </>
            }



        </main >


    )
}

export default Home