import NoImage from "../../assets/no-image.jpg";
import NoProfile from "../../assets/noprofile.webp";

const EmpresaBanner = ({ data }) => {
  const {
    descripcion,
    rubro,
    nombre_razon_social,
    imagen_principal,
    background,
  } = data;

  return (
    <div className="w-full rounded-md h-[300px] p-2 flex justify-center relative">
      <div className="relative h-[250px] w-full rounded-md overflow-hidden group hover:cursor-pointer">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-30"
          src={background ? background : NoImage}
          alt="background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-950 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-80"></div>
      </div>
      <div className="absolute bottom-3 w-[95%] text-center">
        <div className="p-2 bg-white shadow-md rounded-full w-full flex flex-col md:flex-row justify-center items-center">
          <img
            src={imagen_principal ? imagen_principal : NoProfile}
            alt="profile"
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full shadow-md object-cover object-center"
          />
          <div className="flex flex-col items-center md:items-start justify-center w-full mt-4 md:mt-0 ml-0 md:ml-10 mr-0 md:mr-10">
            <span className="bg-sky-500 rounded-full px-4 text-white capitalize text-center md:text-left text-sm sm:text-base">
              {rubro}
            </span>
            <span className="text-base sm:text-lg md:text-xl font-semibold text-center md:text-left capitalize mt-2">
              {nombre_razon_social}
            </span>
            <span className="text-xs sm:text-sm md:text-base text-center md:text-left mt-1">
              {descripcion}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpresaBanner;
