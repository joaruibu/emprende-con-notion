import React, { useEffect } from 'react'
import { FORM_TYPE } from '../helpers/types'

const Form = ({ type, titleForm, textButton, code, trackerId }) => {


    useEffect(() => {
        const js = `
    function ml_webform_success_${code}() {
    var $ = ml_jQuery || jQuery;
    $('.ml-subscribe-form-${code} .row-success').show();
    $('.ml-subscribe-form-${code} .row-form').hide();
  };
`
        const script = document.createElement("script")
        const scriptText = document.createTextNode(js)
        script.appendChild(scriptText)
        document.body.appendChild(script)

        const script2 = document.createElement("script")
        script2.src = `https://groot.mailerlite.com/js/w/webforms.min.js?v08a893c96141fbc55feeeeac1fda7508`
        document.body.appendChild(script2)
    }, [])


    return (

        <div className={` p-6 mb-6 ${type === FORM_TYPE.banner && 'bg-yellow-300'} border border-stone-950 rounded-md items-center`}>
            <div className=" mb-4 sm:mb-2 font-bold lg:col-span-7">
                <h6 dangerouslySetInnerHTML={{ __html: titleForm }}></h6>
            </div>
            <div
                // id - mailerlite
                id={`mlb2-${code}`}
                className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${code} w-full  lg:col-span-5`}
            >
                <div className="ml-form-align-center">
                    <div className="ml-form-embedWrapper embedForm">
                        <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">

                            <form className="ml-block-form" action={`https://assets.mailerlite.com/jsonp/440813/forms/${trackerId}/subscribe`} data-code="" method="post" target="_blank">
                                <div className="ml-form-formContent horozintalForm">
                                    <div className="ml-form-horizontalRow flex flex-col sm:flex-row gap-x-4">
                                        <div className="ml-input-horizontal grow mb-2 sm:mb-0">
                                            <div className="horizontal-fields">
                                                <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                                    <input
                                                        type="email"
                                                        className="form-control outline-none min-w-0 flex-auto rounded-md border w-full bg-stone-50 hover:shadow-dark transition-all border-stone-950 px-3.5 py-2 text-stone-950 sm:text-sm sm:leading-6"
                                                        data-inputmask=""
                                                        required
                                                        name="fields[email]"
                                                        placeholder="Entroduce tu email"
                                                        autoComplete="email"

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-button-horizontal primary">
                                            <div>
                                                <button
                                                    type="submit"
                                                    className={`flex-none rounded-md w-full border border-stone-950  ${type === FORM_TYPE.banner ? ' bg-stone-50 px-16 ' : ' bg-yellow-300 px-2.5'}  py-2.5 text-sm font-sub font-semibold  hover:shadow-dark `}
                                                >
                                                    {textButton}
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="ml-submit" value="1" />

                                <div className="ml-form-checkboxRow ml-validate-required ">

                                    <label className="checkbox flex items-center my-2">
                                        <input required type="checkbox"></input>
                                        <p className='p-0 ml-2'>Acepto la <a href="https://emprendeconnotion.com/privacidad/" target="_blank">política de privacidad</a>.</p>
                                    </label>

                                </div>
                                <p className=' text-[8px] leading-3 pb-0 text-gray-700'> Para cumplir con el RGPD (Reglamento General de Protección de Datos) y entender que tus datos están seguros, debes leer y aceptar <a href="https://emprendeconnotion.com/politica-de-privacidad/" target="_blank">la política de privacidad.</a> Tus datos serán guardados en MailerLite proveedor de email marketing. MailerLite también cumple con el RGPD, así que todo está bien protegido y amparado por la ley. Recuerda que puedes darte de baja cuando quieras.</p>

                            </form>
                        </div>
                        <div
                            className="ml-form-successBody row-success"
                            style={{ display: "none" }}
                        >
                            <div
                                className="ml-form-successContent whitespace-pre-line text-center  rounded-md border border-stone-950  bg-yellow-300 py-2.5 font-sub text-sm font-semibold  shadow-sm  "
                            >
                                Formulario enviado. <br />
                                Revisa tu email

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        // <div className=" p-6 mb-6  border border-stone-950 rounded-md items-center">
        //     <div className=" mb-4 sm:mb-2 font-bold lg:col-span-7">
        //         <h6 dangerouslySetInnerHTML={{ __html: titleForm }}></h6>
        //     </div>
        //     <div
        //         // id - mailerlite
        //         id={`mlb2-${code}`}
        //         className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${code} w-full  lg:col-span-5`}
        //     >
        //         <div className="ml-form-align-center">
        //             <div className="ml-form-embedWrapper embedForm">
        //                 <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">

        //                     <form className="ml-block-form" action={`https://assets.mailerlite.com/jsonp/440813/forms/${trackerId}/subscribe`} data-code="" method="post" target="_blank">
        //                         <div className="ml-form-formContent horozintalForm">
        //                             <div className="ml-form-horizontalRow flex flex-col sm:flex-row gap-x-4">
        //                                 <div className="ml-input-horizontal grow mb-2 sm:mb-0">
        //                                     <div className="horizontal-fields">
        //                                         <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
        //                                             <input
        //                                                 type="email"
        //                                                 className="form-control outline-none min-w-0 flex-auto rounded-md border w-full bg-stone-50 hover:shadow-dark transition-all border-stone-950 px-3.5 py-2 text-stone-950 sm:text-sm sm:leading-6"
        //                                                 data-inputmask=""
        //                                                 required
        //                                                 name="fields[email]"
        //                                                 placeholder="Entroduce tu email"
        //                                                 autoComplete="email"

        //                                             />
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 <div className="ml-button-horizontal primary">
        //                                     <div>
        //                                         <button
        //                                             type="submit"
        //                                             className='flex-none rounded-md w-full border border-stone-950  bg-yellow-300 py-2.5 px-2.5 text-sm font-sub font-semibold  hover:shadow-dark '
        //                                         >
        //                                             {textButton}
        //                                         </button>

        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <input type="hidden" name="ml-submit" value="1" />

        //                         <div className="ml-form-checkboxRow ml-validate-required ">

        //                             <label className="checkbox flex items-center my-2">
        //                                 <input required type="checkbox"></input>
        //                                 <p className='p-0 ml-2'>Acepto la <a href="https://emprendeconnotion.com/privacidad/" target="_blank">política de privacidad</a>.</p>
        //                             </label>

        //                         </div>
        //                         <p className=' text-[8px] leading-3 pb-0 text-gray-700'> Para cumplir con el RGPD (Reglamento General de Protección de Datos) y entender que tus datos están seguros, debes leer y aceptar <a href="https://emprendeconnotion.com/politica-de-privacidad/" target="_blank">la política de privacidad.</a> Tus datos serán guardados en MailerLite proveedor de email marketing. MailerLite también cumple con el RGPD, así que todo está bien protegido y amparado por la ley. Recuerda que puedes darte de baja cuando quieras.</p>

        //                     </form>
        //                 </div>
        //                 <div
        //                     className="ml-form-successBody row-success"
        //                     style={{ display: "none" }}
        //                 >
        //                     <div
        //                         className="ml-form-successContent whitespace-pre-line text-center  rounded-md border border-stone-950  bg-stone-50 py-2.5 font-sub text-sm font-semibold  shadow-sm  "
        //                     >
        //                         Formulario enviado. <br />
        //                         Revisa tu email

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}

export default Form
