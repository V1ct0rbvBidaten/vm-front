import LandingNav from "../components/navs/LandingNav";

const Contacto = () => {
  return (
    <div>
      <LandingNav />

      <div className="grid grid-cols-3 justify-center items-center p-20">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold ">Correo electrónico</h2>
          <p className="text-lg mt-1">vemdo@vemdo.com</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold ">Número telefónico</h2>
          <p className="text-lg mt-1">+56999999999</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold ">WhatsApp</h2>
          <p className="text-lg mt-1">+56998888888</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
