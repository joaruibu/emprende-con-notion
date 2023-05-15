
import SubscriptionForm from "../components/SubscriptionForm"
import TitlePage from "../components/TitlePage"



// import '../styles/globals.css'
const Home = () => {

    const TITLE_INFO = {
        title: 'Suscribete',
        subtitle: 'Todos los días, nuevo contenido sobre Notion'
    }
    return (
        <article className=" border-2 border-stone-950 p-4 rounded-xl my-8">

            <TitlePage subtitle={TITLE_INFO.subtitle}>{TITLE_INFO.title}</TitlePage>
            <SubscriptionForm />
            <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <img className="rounded-xl" src='https://res.cloudinary.com/dwsa2s0pn/image/upload/v1683132343/emprende-con-notion/blog/Portfolio_interiorismo_notion-lauradearquer-cover_xxmytw.gif'></img>
            <p className="pt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <SubscriptionForm />
        </article>


    )
}

export default Home