import React from 'react'

const SubscriptionForm = () => {
    React.useEffect(() => {
        const js = `
        function ml_webform_success_3869348() {
        var $ = ml_jQuery || jQuery;
        $('.ml-subscribe-form-3869348 .row-success').show();
        $('.ml-subscribe-form-3869348 .row-form').hide();
      };
    `
        const script = document.createElement("script")
        const scriptText = document.createTextNode(js)
        script.appendChild(scriptText)
        document.body.appendChild(script)

        const script2 = document.createElement("script")
        script2.src = `https://groot.mailerlite.com/js/w/webforms.min.js?v300817f630ad0e957914d0b28a2b6d78`
        document.body.appendChild(script2)
    }, [])

    return (

        <div className=" p-6 mb-6 bg-yellow-300 border border-stone-950 rounded-md items-center">
            <div className="max-w-xl mb-4 sm:mb-2 font-bold lg:col-span-7">
                <h6 className="">Hay cosas que no se dan #degratis.  <br /> Esas cosas, las especiales, solo se las doy a mi lista de suscriptores. </h6>{' '}
            </div>
            <div

                // id - mailerlite
                id="mlb2-3869348"
                className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-3869348 w-full  lg:col-span-5"
            >
                <div className="ml-form-align-center">
                    <div className="ml-form-embedWrapper embedForm">
                        <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">

                            <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/25720/forms/81925411081029188/subscribe" data-code="" method="post" target="_blank">

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
                                                    className='flex-none rounded-md w-full border border-stone-950  bg-stone-50 py-2.5 px-16 text-sm font-sub font-semibold  hover:shadow-dark '
                                                >
                                                    Suscribirme
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="ml-submit" value="1" />
                            </form>
                        </div>
                        <div
                            className="ml-form-successBody row-success"
                            style={{ display: "none" }}
                        >
                            <div
                                className="ml-form-successContent whitespace-pre-line text-center flex-none rounded-md border border-orange-600 py-2.5 px-3.5 text-sm font-semibold text-orange-500 shadow-sm  cursor-none"
                            >
                                Formulario enviado. <br />
                                Revisa tu email

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubscriptionForm
