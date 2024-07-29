import NoProfile from "../../../../assets/noprofile.webp";
import NoImage from "../../../../assets/no-image.jpg";
import { useRef } from "react";

const DatosPerfilEmpresaUpdate = ({
  data,
  handleImagePortadaChange,
  handleImagePrincipalChange,
  handleChangeEmpresa,
}) => {
  const {
    descripcion,
    rubro,
    nombre_razon_social,
    imagen_principal,
    background,
  } = data;

  const hiddenFilePortadaInput = useRef(null);
  const hiddenFilePerfilInput = useRef(null);

  const handleClickPortada = (e) => {
    e.preventDefault();
    hiddenFilePortadaInput.current.click();
  };

  const handleClickPerfil = (e) => {
    e.preventDefault();
    hiddenFilePerfilInput.current.click();
  };

  return (
    <div className="w-full  rounded-md h-[350px]  p-2 flex justify-center relative">
      <div
        className="relative h-[250px] w-full rounded-md overflow-hidden group hover:cursor-pointer"
        onClick={handleClickPortada}
      >
        <input
          type="file"
          ref={hiddenFilePerfilInput}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImagePrincipalChange}
        />
        <input
          type="file"
          ref={hiddenFilePortadaInput}
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImagePortadaChange}
        />

        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity  duration-300 ease-in-out group-hover:opacity-30"
          src={background ? background : NoImage}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-950  opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-80"></div>
      </div>
      <div className=" absolute bottom-3 w-[95%] text-center ">
        <div className="p-2 bg-white shadow-md rounded-full w-[100%] flex  justify-center  md:flex-row items-center w-100">
          <img
            onClick={handleClickPerfil}
            src={imagen_principal ? imagen_principal : NoProfile}
            className="w-[100px] h-[100px] rounded-full shadow-md object-cover hover:cursor-pointer"
          />
          <div className="flex flex-col items-start justify-center    w-full ml-0 md:ml-10 mr-0 md:mr-10 mt-6 md:mt-0">
            <span className="bg-sky-500  rounded-full px-4 text-white capitalize text-center md:text-left">
              {rubro}
            </span>
            <span className="text-lg md:text-xl font-semibold text-center md:text-left">
              {nombre_razon_social}
            </span>

            <span className="text-center md:text-left text-sm">
              {descripcion}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosPerfilEmpresaUpdate;
