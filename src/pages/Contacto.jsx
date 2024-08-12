import LandingNav from "../components/navs/LandingNav";

const Contacto = () => {
  return (
    <div>
      <LandingNav />

      <div className="p-5 sm:p-10 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-v4">Correo electrónico</h2>
            <p className="text-lg mt-1 text-gray-700">vemdo@vemdo.com</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-v4">Número telefónico</h2>
            <p className="text-lg mt-1 text-gray-700">+56999999999</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-v4">WhatsApp</h2>
            <p className="text-lg mt-1 text-gray-700">+56998888888</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
