
import SubscriptionForm from "../components/Form"
import TitlePage from "../components/TitlePage"
import { FORM_TYPE } from "../helpers/types"


const Home = () => {

    const TITLE_DATA = {
        title: 'Suscribete',
        subtitle: 'Todos los días, nuevo contenido sobre Notion'
    }

    const FORM_DATA = {
        titleForm: 'Hay cosas que no se dan #degratis.  <br /> Esas cosas, las especiales, solo se las doy a mi lista de suscriptores.',
        textButton: 'Suscribete',
        code: '5221946',
        trackerId: '88519530185229347'
    }

    return (
        <main className=" border-2 bg-stone-50 border-stone-950 p-4 rounded-xl my-8">

            <TitlePage subtitle={TITLE_DATA.subtitle}>
                {TITLE_DATA.title}
            </TitlePage>

            <SubscriptionForm
                type={FORM_TYPE.banner}
                titleForm={FORM_DATA.titleForm}
                textButton={FORM_DATA.textButton}
                code={FORM_DATA.code}
                trackerId={FORM_DATA.trackerId} />

            <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <img className="rounded-xl" src='https://res.cloudinary.com/dwsa2s0pn/image/upload/v1684169504/emprende-con-notion/template/plantilla_diario_de_agradecimiento_habit_tracker_en_Notion-emprende_con_notion_ynwztd.jpg'></img>

            <p className="pt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <img className="rounded-xl pb-6" src='https://res.cloudinary.com/dwsa2s0pn/image/upload/v1684169504/emprende-con-notion/template/plantilla_de_objetivos_a%C3%B1o_nuevo_2022_con_Notion-emprende_con_notion_z1ujux.jpg'></img>

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