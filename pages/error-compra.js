import React from "react";

const UltimoPaso = () => {
  return (
    <div className="w-full h-[90vh] grid place-content-center">
      <div className="  border-2 border-stone-950 bg-stone-50 p-4 rounded-xl   px-4 grid place-content-center leading-10">
        <h1>Compra NO confirmada.</h1>

        <br></br>
        <p>Ha ocurrido un error en el proceso.</p>
        <p>
          No se te ha realizado ningun cargo, por favor vuelve a realizar el
          proceso de compra, y en el caso de que el problema persista, puedes
          escribirnos a laura@emprendeconnotion.com..
        </p>
        <h2 className="pt-4 font-alternate font-bold">Emprende con Notion</h2>
      </div>
    </div>
  );
};

export default UltimoPaso;
