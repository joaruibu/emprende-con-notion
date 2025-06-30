import React from "react";
import StripeButton from "../../components/StripeButton";

const GrupoPrivadoPlantillaZettelkasten = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: "Plantilla Zettelkasten para grupo privado.",
    buttonText: " Acceder ahora",
    price: "70 €",
    isDisabled: false,
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/session/6c1300c58f98ba86fdbf82ac6869f4fdc730f739/init",
  };
  return (
    <>
      <article className=" border-2 bg-stone-50 border-stone-950 px-4 sm:p-8 rounded-xl my-8">
        <div className=" sm:overflow-hidden sm:rounded-xl"></div>
        <section className="pt-10 ">
          <h1 className="mb-24 font-alternate text-4xl leading-[40px]">
            {" "}
            Plantilla Zettelkasten para grupo privado.
          </h1>

          <p>
            Zettelkasten template, plantilla knowledge hub, second brain,
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
            <br></br>
            <br></br>
            <br></br>
          </div>
          <p>
            Si has llegado a esta página ya sabes de lo que va esto. La
            plantilla estará disponible para{" "}
            <b>un grupo de máximo 10 personas</b> y la seguiré vendiendo durante
            este mes o hasta que se agoten plazas.
          </p>
          <p>
            <b>Accedes al grupo privado aquí: </b>{" "}
          </p>

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
              un enlace y contraseña para acceder al contenido del grupo
              privado: la plantilla, el enlace para el próximo directo del
              viernes, y cualquier otro recurso que te quiera dar.
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
                En parte sí. Pero el grupo va a ser un toma y daca: tú me vas a
                preguntar y yo voy a poder ver en directo cómo usas la plantilla
                y tus necesidades para luego venderla a mayor precio. Todos
                ganamos.{" "}
              </li>
              <li>
                <b>
                  Posteriormente tendrás acceso a la plantilla 2.0 que se
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
              Además podrás participar en las sesiones grupales semanales, donde
              podrás compartir pantalla si quieres y enseñarme directamente lo
              que necesitas adaptar en tu Notion.
            </p>
          </div>
          <div className="pb-12">
            <h2 className="text-2xl">
              ¿Será complicado si yo no tengo ni idea de Notion?
            </h2>
            <br></br>
            <p>
              Para participar en este grupo privado te recomiendo tener un nivel
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

          <div className="pb-6">
            <h2 className="text-2xl">¿Bajará de precio alguna vez?</h2>
            <br></br>
            <p>
              El precio es de {STRIPE_BUTTON_CONFIG.price} y nunca bajará. Es
              más, dado todo el soporte que hay, subirá las próximas semanas.
            </p>
            <p>
              El objetivo de este grupo privado precisamente es entender mejor
              tus necesidades para luego sacar una plantilla 2.0, más cara, a
              partir del mes que viene. Si tú quieres comprarla el mes que viene
              por 100 €, está bien. Puedes esperar. En caso de que quieras
              comprar ahora por {STRIPE_BUTTON_CONFIG.price}, te apuntas al
              grupo aquí:
            </p>
            <p>
              Accedes al grupo reducido, con precio reducido (hasta el día 28 a
              las 23:59 horas), aquí:{" "}
            </p>
          </div>

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
