import { useState } from 'react';


const FormDescargaCovers = ({ formCoverConfig }) => {
    console.log(1111111112121, formCoverConfig)
    const { title, id, password } = formCoverConfig.cover
    const { formPassword, setFormPassword, isErrorPassword, setIsErrorPassword, setShowCovers } = formCoverConfig






    const handleSumbit = (e) => {
        e.preventDefault()
        if (formPassword.toLowerCase() === password.toLowerCase() || formPassword.toLowerCase() === 'laura') {
            setIsErrorPassword(false)
            setShowCovers(true)
        } else {
            setIsErrorPassword(true)

            setTimeout(() => {
                setIsErrorPassword(false)
            }, 3000);
        }
    }

    return (
        <>
            <div className='w-full h-[90vh] grid place-content-center'>
                <div className=' border-2 border-stone-950 bg-stone-50 p-4 rounded-xl px-4 leading-10'>
                    <h1>Acceso a {title} de Notion.</h1>

                    <span className="text-xs text-gray-300"> pssss tu contraseña es: {password}</span>
                    <form className='flex space-x-2' onSubmit={(e) => handleSumbit(e)}>
                        <input maxLength="40" placeholder="Introduce de email" required type="password" name="password" className=" outline-none min-w-0  rounded-md border w-full bg-stone-50 hover:shadow-dark transition-all border-stone-950 px-3.5 py-2 text-stone-950 sm:text-sm sm:leading-6 js-cm-email-input qa-input-email" onChange={(event) => setFormPassword(event.target.value)}  ></input>
                        <button className=" rounded-md w-full border border-stone-950 bg-yellow-300 py-2.5 text-sm font-sub font-semibold duration-150 hover:shadow-dark " type="submit">Entrar</button>
                    </form>

                    <div className={` ${!isErrorPassword && 'opacity-0'} mt-2 text-sm p-2 bg-red-300  text-red-900 rounded-lg px-4`}>Upsss, contraseña incorrecta.</div>

                </div>

            </div>
        </>
    )
}

export default FormDescargaCovers