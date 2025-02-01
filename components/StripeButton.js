import React from "react";

const StripeButton = ({ urlStripe, children, title, price, isDisabled }) => {
  return (
    <div className="py-12">
      {price && (
        <span className="block italic">
          *Pago seguro con tarjeta de crédito
        </span>
      )}
      {(title || price) && (
        <span className="block text-center text-4xl py-8 font-alternate">
          {title} <span className="text-terracotta">{price} </span>
        </span>
      )}

      {price && (
        <span className="block text-center underline pb-12">
          {" "}
          Impuestos incluidos
        </span>
      )}
      <a href={urlStripe} target="_self">
        <button
          disabled={isDisabled}
          className={`rounded-md w-full border border-stone-950 bg-yellow-300  text-2xl text-stone-950 p-4 font-sub font-semibold duration-150 hover:shadow-dark `}
        >
          {children}
        </button>
      </a>

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
