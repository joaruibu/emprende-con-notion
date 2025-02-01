import React from "react";
import StripeButton from "../../components/StripeButton";

const GrupoPrivadoPlantillaZettelkasten = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: "Plantilla Zettelkasten para grupo privado.",
    buttonText: " Acceder ahora",
    price: "60€",
    isDisabled: false,
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/session/6c1300c58f98ba86fdbf82ac6869f4fdc730f739/init",
  };
  return (
    <>
      <article className=" border-2 bg-stone-50 border-stone-950 p-4 rounded-xl my-8">
        <div className=" sm:overflow-hidden sm:rounded-xl"></div>
        <section className="pt-10 ">
          <h1 className="mb-24 font-alternate text-4xl leading-[40px]">
            {" "}
            Plantilla Zettelkasten para grupo privado.
          </h1>
          <p>Si estás aquí ya sabes lo que es esto.</p>
          <p>
            zettelkasten template, plantilla knowledge hub, second brain,
            knowledge pool,  o como coño quieras llamarla. En castellano, tu
            propio centro de conocimiento en Notion. 
          </p>

          <div className="flex flex-col items-center">
            <iframe
              src="https://drive.google.com/file/d/1_pGPhJDpkbWAtzf8kIqUBowAVLS8Oyx_/preview"
              width="100%"
              height="432px"
              allowFullScreen
            ></iframe>
          </div>
          <p className="py-12">
            ¿Te queda alguna duda? Me puedes escribir{" "}
            <a href="mailto:laura@emprendeconnotion.com"> aquí</a>
          </p>
          <p>Si no, accedes aquí abajo</p>
          <br></br>
          <br></br>
          <br></br>
          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
            isDisabled={STRIPE_BUTTON_CONFIG.isDisabled}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>
          <br></br>
          <br></br>
          <h1 className="pb-12">Preguntas frecuentes</h1>
          <div className="pb-12">
            <h2 className="text-2xl">¿Qué pasa cuando compro?</h2>
            <br></br>
            <p>
              Te llegará automáticamente un email de confirmación de compra con
              un enlace y contraseña para acceder al contenido del Workshop: la
              plantilla, el enlace para el próximo directo del viernes, y
              cualquier otro recurso que te quiera dar.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Cuándo son los directos?</h2>
            <br></br>
            <p>
              Días 7, 14, 21, y 28 de febrero a las 16:00 (Valencia).{" "}
              <b> Si no puedes asistir quedará grabado</b> (por ejemplo, si
              compras el día 10 de febrero, podrás ver la grabación del día 7).
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Realmente qué incluye?</h2>
            <br></br>
            <ol>
              <li>
                <b>Plantilla con sistema Zettelkasten.</b>
              </li>
              <li>
                <b>Soporte por email hasta el día 28 de febrero.</b>
              </li>
              <li>
                <b>Formación en directo los viernes del mes de febrero. </b> Si
                no puedes asistir quedará grabado. En el primer directo te
                enseñaré a usar la plantilla. <br></br>
                En el resto podrás preguntarme lo que quieras tanto del uso de
                la plantilla como de cómo integrarla en tu día a día. Pero,
                <i>
                  ¿se te ha ido la pinza con el precio tan bajo? ¿Eso no es lo
                  que se hace en una consultoría?{" "}
                </i>{" "}
                En parte sí. Pero va a ser un toma y daca. Tú me vas a preguntar
                y yo voy a poder ver en directo cómo usas la plantilla y ver tus
                necesidades, para luego venderla mas cara. Todos ganamos.{" "}
              </li>
              <li>
                <b>
                  Posteriormente tendrás acceso a la plantilla definitiva que se
                  venderá a mayor precio.{" "}
                </b>
              </li>
            </ol>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">¿Tiene soporte?</h2>
            <br></br>
            <p>
              Sí. Tienes{" "}
              <b>
                 soporte por email durante un mes, hasta el 28 de febrero a las
                23:59h.
              </b>{" "}
              Si compras el día 2, tienes soporte el mes menos un día. Si
              compras el día 3, el mes menos dos días. Y así.
            </p>
            <p>
              Además tendrás soporte en directo donde podrás compartir pantalla
              si quieres y enseñarme directamente lo que necesitas hacer en tu
              Notion.{" "}
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Será complicado si yo no tengo ni idea de Notion?
            </h2>
            <br></br>
            <p>
              Para participar en este Workshop te recomiendo tener un nivel
              mínimo. No vale que no hayas abierto la aplicación en tu vida,
              tienes que saber por lo menos lo que es un bloque, una base de
              datos, cosas así. En el directo te voy a explicar a usar la
              plantilla, no a usar la aplicación (son cosas distintas). Si no
              estás segura de si tienes nivel y te gustaría participar escríbeme
              a{" "}
              <a href="mailto:laura@emprendeconnotion.com">
                laura@emprendeconnotion.com.
              </a>
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-2xl">¿Bajará de precio alguna vez?</h2>
            <br></br>
            <p>El precio es de {STRIPE_BUTTON_CONFIG.price} y nunca bajará.</p>
            <p>
              <b>Nunca hago ofertas, ni black fridays, ni rebajas, ni nada.</b>{" "}
              Es más, si de algo puedes estar seguro es que con el paso del
              tiempo el precio subirá.
            </p>
          </div>
          <br></br>

          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
            isDisabled={STRIPE_BUTTON_CONFIG.isDisabled}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>

          <p>Un abrazo, y que Notion te acompañe, </p>
          <p>Laura de Arquer</p>
        </section>
      </article>
    </>
  );
};

export default GrupoPrivadoPlantillaZettelkasten;
