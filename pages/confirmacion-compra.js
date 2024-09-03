import React from "react";

const ConfirmacionCompra = () => {
  return (
    <div className="w-full h-[90vh] grid place-content-center">
      <div className="border-2 border-stone-950 bg-stone-50 p-4 rounded-xl my-8  px-4 grid place-content-center leading-10">
        <h1>Compra confirmada.</h1>
        <br></br>
        <p>Todo ha salido bien.</p>

        <p>
          En breves recibirás un email con toda la información. Puede tardar
          unos minutos. <br></br> En cualquier caso, si tienes algún problema,
          puedes escribirnos a laura@emprendeconnotion.com.
        </p>

        <h2 className="pt-4 font-alternate font-bold">Emprende con Notion</h2>
      </div>
    </div>
  );
};

export default ConfirmacionCompra;
