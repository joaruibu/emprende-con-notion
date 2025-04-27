const Review = ({ children, name, job }) => {
  return (
    <div className="max-w-xl m-auto py-12 flex flex-col items-center px-4">
      <img
        className="py-4"
        src={"/img/5-stars.png"}
        alt="Foto de Laura de Arquer sobre fondo amarillo."
        width={100}
        height={10}
      />

      <div className="text-center font-montserrat pb-4 text-stone-900 font-semibold text-xl">
        {children}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-stone-600 font-semibold text-base mb-1">
          {name}
        </span>
        <span className="text-stone-400 font-light text-xs">{job}</span>
      </div>
    </div>
  );
};

export default Review;
