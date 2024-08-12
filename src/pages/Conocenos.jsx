import LandingNav from "../components/navs/LandingNav";

const Conocenos = () => {
  return (
    <>
      <LandingNav />
      <div className="p-5 sm:p-10 md:p-20 lg:p-40 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-2/3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-v4 font-bold mb-4">
              ¿Qué es VeMdo?
            </h1>
            <h2 className="text-lg sm:text-xl font-bold text-v3 mb-2">
              Empresas
            </h2>
            <p className="text-sm sm:text-base">
              Somos una plataforma que te da acceso a una red de vendedores para
              que puedan comercializar tus productos. Nos enfocamos en ventas de
              alto valor, donde nuestros vendedores entregarán asesoramiento al
              cliente para cerrar la venta.
            </p>
          </div>
          <div className="md:w-1/3 mt-5 md:mt-0 flex justify-center items-center bg-gray-300 p-5 h-[200px] sm:h-[250px] md:h-[300px] rounded-md shadow-md">
            <p className="text-center">Foto del portal</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/3 mt-5 md:mt-0 flex justify-center items-center bg-gray-300 p-5 h-[200px] sm:h-[250px] md:h-[300px] rounded-md shadow-md">
            <p className="text-center">Foto del portal</p>
          </div>
          <div className="md:w-2/3 mt-5 md:mt-0 md:ml-10">
            <h2 className="text-lg sm:text-xl font-bold text-v3 mb-2">
              Vendedores
            </h2>
            <p className="text-sm sm:text-base">
              Somos una plataforma que te permite acceder a un marketplace de
              empresas para que puedas comercializar sus productos. Solo
              necesitas capacitarte, ofrecer los productos a posibles clientes y
              coordinar con la empresa para finalizar la venta.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conocenos;
