
import SubscriptionForm from "../components/Form"
import TitlePage from "../components/TitlePage"
import { FORM_TYPE } from "../helpers/types"


const Home = () => {

    const TITLE_DATA = {
        title: 'Suscribete',
        subtitle: 'Todos los días, nuevo contenido sobre Notion'
    }

    const FORM_DATA = {
        titleForm: '',
        textButton: 'Suscribete',
        code: '5221946',
        trackerId: '88519530185229347'
    }

    return (
        <main className=" border-2 bg-stone-50 border-stone-950 p-4 rounded-xl my-8">

            <TitlePage subtitle={TITLE_DATA.subtitle}>
                {TITLE_DATA.title}
            </TitlePage>

            <p className="font-bold">Suscríbete a mi lista y recibe los mejores consejos para ser mucho más productivo con Notion, en tu trabajo y en tu vida. </p>

            <br></br>

            <p className="pb-8">Ir a clases de cerámica mientras tenía proyectos pendientes, me daba bastante remordimiento y no me dejaba disfrutarlo. Ahora es diferente. Te lo digo porque mi tiempo libre ha aumentado sin rechazar proyectos ni invertir ni un euro más. Yo enseño a mis suscriptores cómo hacer eso utilizando Notion mejor. </p>

            <SubscriptionForm
                type={FORM_TYPE.banner}
                titleForm={FORM_DATA.titleForm}
                textButton={FORM_DATA.textButton}
                code={FORM_DATA.code}
                trackerId={FORM_DATA.trackerId} />

            <p>Pero no es para todos los que les gusta la productividad. Ni para todos los amantes de Notion.</p>
            <p> Es solo para los que creen que para ser más productivos en el trabajo y en la vida, hay que hacer menos. Menos, de mejor calidad. Menos. Pero ay ese menos cómo te lo vas a trabajar, amigo.</p>
            <p className="pb-8">Si tú prefieres intentar levantarte a las 5 am, darte duchas de agua fría y trabajar 12 horas porque así te sientes más productivo aunque tu cuerpo te diga que es una mierda… Te aviso ya de que este no es tu sitio.</p>

            <SubscriptionForm
                type={FORM_TYPE.banner}
                titleForm={FORM_DATA.titleForm}
                textButton={FORM_DATA.textButton}
                code={FORM_DATA.code}
                trackerId={FORM_DATA.trackerId} />

            <p>La gente quiere cumplir objetivos muy rápido y muy fácil. No les culpo, pero es complicado. Bastante. Ahora, como ese sueño está ahí, pues hay muchos supuestos gurús de la productividad que venden cursos, formaciones, podcast y cosas alrededor de la industria de la productividad tipo…</p>
            <p>¿Cómo cambiaría tu vida si fueras una persona <i> ESTRUCTURADA y ORGANIZADA? 8 AÑOS de MÁXIMA PRODUCTIVIDAD personal.</i> </p>
            <p><i>Los 5 SECRETOS de la PRODUCTIVIDAD EXTREMA.</i></p>
            <p><i>Vive la EFECTIVIDAD y sé FELIZ.</i></p>
            <p>Cómo logro hacer <i>TODO.</i></p>
            <p>¿Pero sabes qué?</p>
            <p>Son idioteces para incautos. No lo digo porque no puedas lograr ser más estructurado y organizado, pero jamás durante 8 años seguidos.</p>
            <p>Y desde luego, lo que sí te digo es que no vas a lograr hacerlo TODO siempre. No lo harás. La efectividad extrema no te hará feliz.</p>
            <p>Lo único que hará será frustrarte más y perder el dinero del curso de productividad que hayas hecho.</p>
            <p>Ahora, hay una manera bastante sensata de mejorar tu productividad vital y laboral, incluso si eres un desastre que se olvida de ponerse las bragas al salir de casa o aunque tengas poquísimas horas libres por todas las horas extras que te obligan a hacer. No es nada milagroso ni es un “secreto” que conozcamos solo unos pocos y que te lo voy a revelar porque soy así de maja.</p>
            <p>Se llama gestiona tu vida. ¿En serio? En serio. No puedes pretender mejorar tu productividad si no gestionas antes tu vida. Es imposible. Eso sí, una vez te lo trabajas, tu relación con la organización y cómo vas a vivir a partir de ahora, cambia para siempre.</p>
            <p className="pb-8">Si quieres ver cómo hacer esto, es aquí.</p>

            <SubscriptionForm
                type={FORM_TYPE.banner}
                titleForm={FORM_DATA.titleForm}
                textButton={FORM_DATA.textButton}
                code={FORM_DATA.code}
                trackerId={FORM_DATA.trackerId} />

            <p className="pb-8">Al fin y al cabo, ¿qué sabrá Tony Robbins? Te lo digo porque Tony Robbins, el <i>coach yanki </i> que más sabe de vida y negocios, ha repetido frases como “El éxito es hacer lo que quieres, cuando quieres, donde quieres, con quién quieres y tanto como quieres”. O sea, este nº1 de EEUU en estrategia de vida y negocio, no liga el éxito profesional con una <i> productividad extrema</i> sino con la libertad personal, porque esa libertad es la que luego te hace ser más productivo en tu trabajo. Pero… ¿qué sabrá Tony Robbins, verdad?</p>

            <SubscriptionForm
                type={FORM_TYPE.banner}
                titleForm={FORM_DATA.titleForm}
                textButton={FORM_DATA.textButton}
                code={FORM_DATA.code}
                trackerId={FORM_DATA.trackerId} />

            <p>A los que se suscriben a mi lista les cuento: </p>

            <ul className="mx-8">
                <li>Por qué a veces se me olvidaban las bragas en casa, y cómo con Notion puedes definir tus objetivos de vida para ser más productivo en tu día a día. Como dice Tony Robbins “No puedes planificar tu día hasta que tengas un plan para tu vida”. O sea, tener un plan para no dejarte las bragas en casa, al menos sin querer. </li>
                <li>Actualizaciones del equipo de Notion explicadas de forma práctica para implementarlas en tu día a día y mejorar tu productividad. Las que no sirven para mejorar tu productividad diaria también te las contaré y simplemente te diré que no te sirven. No te vayas a liar.</li>
                <li>Cómo puedes implementar Notion en tu trabajo para ser más productivo, trabajes de lo que trabajes. O sea, cómo puedes implementarlo tú, no tu empresa. Que lo implemente tu empresa si no es una tecnológica… ya es otra historia. También te contaré esa otra historia.  </li>
                <li>De vez en cuando tendrás algún regalo especial solo por estar suscrito. Como por ejemplo, el regalo de bienvenida que recibirás nada más suscribirte. El regalo es que tendrás acceso prioritario a los vídeos que publique en mi canal de Emprende con Notion 24 horas antes de que se hagan públicos. Y claro, es mucho más probable que pueda responderte a los comentarios que me hagas en esas primeras 24 horas. Solo para mis suscriptores.</li>
                <li>Y, por supuesto, te voy a vender todos los cursos y plantillas que vaya haciendo, de los cuales si no estás suscrito no podrás acceder siquiera a la página de venta. </li>
            </ul>

            <p className="font-bold pb-8">Si todo esto no te interesa, no te suscribas. </p>

            <SubscriptionForm
                type={FORM_TYPE.banner}
                titleForm={FORM_DATA.titleForm}
                textButton={FORM_DATA.textButton}
                code={FORM_DATA.code}
                trackerId={FORM_DATA.trackerId} />

        </main>


    )
}

export default Home