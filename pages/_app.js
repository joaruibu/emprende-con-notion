import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'


const MyApp = ({ Component, pageProps }) => {

    return (
        <>
            <Head>
                <title>Emprende con Notion</title>
                <meta name="description" content="Plantillas de Notion para mejorar tu productividad" />
                <meta httpEquiv="content-language" content="es"></meta>
                <meta name='robots' content='index, follow'></meta>
                <link rel="icon" href="/favicon.png" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap');
                </style>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp