import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { useRouter } from 'next/router';


const MyApp = ({ Component, pageProps }) => {
    const { pathname } = useRouter();
    console.log(123444, pathname)

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
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
                </style>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&display=swap');
                </style>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp