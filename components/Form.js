import React, { useEffect, useState } from 'react'

const SubscriptionForm = ({ titleForm, textButton, label, id, name }) => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);


    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://js.createsend1.com/javascript/copypastesubscribeformlogic.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);



    return (
        <>
            {
                domLoaded &&
                <>
                    <div className='p-6 mt-6 mb-6 bg-yellow-300 border border-stone-950 rounded-md items-center'>

                        <div className=" mb-4 sm:mb-2 font-bold lg:col-span-7">
                            <h6 dangerouslySetInnerHTML={{ __html: titleForm }}></h6>
                        </div>

                        <form className="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="191722FC90141D02184CB1B62AB3DC2666CEB8A31636BD4D3A71BB2DBA449EDE3FCCE6D48BABF849F8F4C6E50A91FD85E19A5610F60343109DECB5668DDE017E">
                            <div className='flex space-x-2 mb-2'>

                                <input autoComplete="Email" aria-label="Dirección de email" id="fieldEmail" maxLength="200" name="cm-tlsuij-tlsuij" placeholder="Introduce de email" required="required" type="email" className="grow outline-none min-w-0  rounded-md border w-full bg-stone-50 hover:shadow-dark  transition-all border-stone-950 px-3.5 py-2 text-stone-950 sm:text-sm sm:leading-6 js-cm-email-input qa-input-email" ></input>
                                <input id="cm-privacy-consent-hidden" name="cm-privacy-consent-hidden" type="hidden" value="true"></input>
                                <div><input type="hidden" value="1" aria-label={label} id={id} maxlength="200" name={name}></input></div>
                                <button className={`grow-0 rounded-md w-full border border-stone-950 bg-stone-50  py-2.5 text-sm font-sub font-semibold duration-150 hover:shadow-dark `} type="submit">{textButton}</button>

                            </div>

                            <div className='flex items-center mb-2'>
                                <input aria-required="" className='mr-2' id="cm-privacy-consent" name="cm-privacy-consent" required type="checkbox"></input>
                                <label className='text-xs sm:text-sm font-light' htmlFor="cm-privacy-consent">Acepto la  <a className='underline text-gray-900' href="https://emprendeconnotion.com/privacidad/" target="_blank">política de privacidad</a> y suscribirme.</label>
                            </div>

                            <p className=' text-[10px] leading-3 pb-0 text-gray-700'> Para cumplir con el RGPD (Reglamento General de Protección de Datos) y entender que tus datos están seguros, debes leer y aceptar <a className='underline text-gray-900' href="https://emprendeconnotion.com/politica-de-privacidad/" target="_blank">la política de privacidad.</a> Tus datos serán guardados en Campaing Monitor proveedor de email marketing. Campaing Monitor también cumple con el RGPD, así que todo está bien protegido y amparado por la ley. Recuerda que puedes darte de baja cuando quieras.</p>
                        </form>
                    </div>

                </>
            }
        </>


    )
}

export default SubscriptionForm
