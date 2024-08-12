import LandingNav from "../components/navs/LandingNav";

const Ayuda = () => {
  return (
    <div>
      <LandingNav />
      <div className="p-5 sm:p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            ¿Cómo ser vendedor en VeMdo?
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
            <li>Crea tu cuenta de vendedor</li>
            <li>Selecciona la empresa y los productos que quieras vender</li>
            <li>
              Estudia el material de capacitación de los productos que
              seleccionaste para vender enviado a tu correo electrónico
            </li>
            <li>
              Ofrece los productos, selecciona la cantidad que quieres vender
              desde tu Maletín de Productos, ingresa los datos del comprador y
              en caso de que la empresa lo solicite, sube la documentación
              requerida
            </li>
            <li>
              Una vez ingresada la venta, haz seguimiento de ella desde la
              plataforma y modifícala si la empresa lo solicita
            </li>
          </ol>
          <p className="mt-4 text-sm sm:text-base">
            Cuando la venta se complete de manera exitosa, se carga la comisión
            correspondiente en tu cuenta virtual y Vemdo te transferirá el monto
            total acumulado cada 15 días.
          </p>
          <button className="mt-auto bg-v3 text-white px-4 py-2 rounded-full">
            Descarga el manual
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            ¿Cómo vender a través de VeMdo?
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
            <li>Crea tu cuenta de empresa</li>
            <li>Sube tu portafolio de productos y define su comisión</li>
            <li>
              Sube el material necesario para la capacitación de los vendedores.
              Se enviará un correo con este material a cada vendedor que
              seleccione tus productos
            </li>
            <li>
              Haz seguimiento del estado de la venta y gestiónala desde la
              plataforma
            </li>
            <li>
              Una vez completada la venta, Vemdo se encargará de transferirte el
              monto descontando la comisión previamente definida. Las
              transferencias se harán cada 15 días. Estas consideran todas las
              ventas finalizadas en los últimos 15 días
            </li>
          </ol>
          <button className="mt-auto bg-v3 text-white px-4 py-2 rounded-full">
            Descarga el manual
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ayuda;
