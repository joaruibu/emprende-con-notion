import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html lang='es'>
            <Head>
                <meta name="description" content="Plantillas de Notion para mejorar tu productividad" />
                <meta httpEquiv="content-language" content="es"></meta>
                <meta name='robots' content='index, follow'></meta>
                <link rel="icon" href="/favicon.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap" rel="stylesheet" />


            </Head>
            <body className=' text-stone-950 '>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}