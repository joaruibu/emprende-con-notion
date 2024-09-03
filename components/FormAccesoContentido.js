import { useState } from "react";

const FormAccesoContentido = ({ correctPassword, setPassword, title }) => {
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  const handleSumbit = (e) => {
    console.log(1212, correctPassword);

    e.preventDefault();
    if (Object.values(correctPassword).includes(inputPassword)) {
      setIsErrorPassword(false);
      setPassword(inputPassword);
    } else {
      setIsErrorPassword(true);

      setTimeout(() => {
        setIsErrorPassword(false);
      }, 3000);
    }
  };

  return (
    <>
      <div>
        <div className="  bg-stone-50 py-4 rounded-xl  leading-10">
          <h1 className="mb-4 font-alternate">{title}</h1>

          <form className="flex space-x-2" onSubmit={(e) => handleSumbit(e)}>
            <input
              maxLength="40"
              placeholder="Introduce la contraseña"
              required
              name="password"
              className=" grow rounded-md outline-none border border-stone-950 min-w-0 w-full bg-stone-100   px-3.5 py-2 text-stone-950 tracking-widest text-xl text-center sm:leading-6 "
              onChange={(event) => setInputPassword(event.target.value)}
            ></input>
            <button
              className="rounded-md w-full border border-stone-950 bg-yellow-300  text-sm font-sub font-semibold duration-150 hover:shadow-dark  "
              type="submit"
            >
              Entrar
            </button>
          </form>

          <div
            className={` ${
              !isErrorPassword && "opacity-0"
            } mt-2 text-sm p-2 bg-red-300  text-red-900 rounded-lg px-4`}
          >
            Upsss, contraseña incorrecta.
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAccesoContentido;
