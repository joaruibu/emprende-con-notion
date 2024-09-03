import React from "react";

const StripeButton = ({ urlStripe, children, title, price }) => {
  return (
    <div className="py-12">
      <span className="block italic">*Pago seguro con tarjeta de crédito</span>
      <span className="block text-center text-4xl py-8 font-alternate">
        {title} <span className="text-terracotta">{price} </span>
      </span>
      <span className="block text-center underline pb-12">
        {" "}
        Impuestos incluidos
      </span>
      <a href={urlStripe} target="_self">
        <button
          className={`rounded-md w-full border border-stone-950 bg-yellow-300  text-2xl text-stone-950 p-4 font-sub font-semibold duration-150 hover:shadow-dark `}
        >
          {children}
        </button>
      </a>
      <p className=" pt-2 italic text-xs">
        ** Si necesitas retención del IRPF en tu facura porque eres autonomo o
        empresa español escríbenos a laura@emprendeconnotion.com.
      </p>
      <div className="flex mt-3 justify-center">
        <img
          className="text-center"
          src={"/img/cards-methods.png"}
          alt="stripe"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
};

export default StripeButton;
