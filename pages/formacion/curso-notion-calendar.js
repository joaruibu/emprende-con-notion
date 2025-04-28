import React from "react";

const CursoNotionCalendar = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <article className="border-2 bg-stone-50 border-stone-950 w-full p-4 rounded-xl my-8 max-w-2xl flex flex-col items-center gap-6">
          <span className="w-full block text-center text-4xl font-bold">
            Próximamente
          </span>

          <img
            className="py-4"
            src={"/img/nouti-chasquido.gif"}
            alt="Foto de Laura de Arquer sobre fondo amarillo."
            width={100}
            height={10}
          />
          <span className="text-2xl font-semibold">Vuelve pronto.</span>
        </article>
      </div>
    </>
  );
};

export default CursoNotionCalendar;
