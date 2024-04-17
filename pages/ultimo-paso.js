import React from 'react'

const UltimoPaso = () => {
    return (

        <div className='w-full h-[90vh] grid place-content-center'>
            <div className='  border-2 border-stone-950 bg-stone-50 p-4 rounded-xl   px-4 grid place-content-center leading-10'>
                <h1>Último paso.</h1>
                <br></br>
                <p>Ya no queda nada para recibir tu plantilla.</p>
                <p>Lo único que debes hacer es <b> clicar en el enlace del mail que te acabo de mandar</b> al correo que me has dejado.</p>
                <p>Puede que esté en spam, en ese caso añade la dirección laura@emprendeconnotion.com a tus lista de contactos.</p>
                <br></br>
                <h2>MUY IMPORTANTE:</h2>
                <p> <b>Una vez confirmes tu suscripción se abrirá una nueva página con tu plantilla.</b> </p>
                {/* <p>P.D.: Te llegará también al email junto con otros recursos para poder implementarla. </p> */}
            </div>
        </div>
    )
}

export default UltimoPaso
