import React from 'react'
import TitlePage from '../components/TitlePage'
import SubscriptionForm from '../components/Form'
import { FORM_TYPE } from '../helpers/types'

const TITLE_DATA = {
    title: 'Mi CV',
    subtitle: 'Chismorreos, aquí te cuentos cosas.'
}
const FORM_DATA = {
    titleForm: 'Hay cosas que no se dan #degratis.  <br /> Esas cosas, las especiales, solo se las doy a mi lista de suscriptores.',
    textButton: 'Suscribete',
    code: '5221946',
    trackerId: '88519530185229347'
}

const About = () => {
    return (
        <main className=" border-2 border-stone-950 bg-stone-50 p-4 rounded-xl my-8">

            <TitlePage subtitle={TITLE_DATA.subtitle}>{TITLE_DATA.title}</TitlePage>
            <SubscriptionForm type={FORM_TYPE.banner} titleForm={FORM_DATA.titleForm} textButton={FORM_DATA.textButton} code={FORM_DATA.code} trackerId={FORM_DATA.trackerId} />
            <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className="pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <p className="pt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <SubscriptionForm type={FORM_TYPE.banner} titleForm={FORM_DATA.titleForm} textButton={FORM_DATA.textButton} code={FORM_DATA.code} trackerId={FORM_DATA.trackerId} />
        </main>
    )
}

export default About