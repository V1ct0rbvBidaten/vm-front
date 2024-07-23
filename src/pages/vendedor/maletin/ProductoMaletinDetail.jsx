import { useEffect, useState } from "react";
import { getMaletinProducts } from "../../../api/maletin";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Pagination,
} from "@nextui-org/react";
import { formatNumberToCurrency } from "../../../functions/formaters";
import Loading from "../../../components/utils/Loading";
import { useNavigate } from "react-router-dom";

const initialState = {
  page: 1,
  page_size: 10,
};

const ProductoMaletinDetail = ({ maletinid }) => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [data, setData] = useState([]);
  const [params, setParams] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleParamsChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProductos();
  }, [params]);

  const loadProductos = () => {
    setLoading(true);
    getMaletinProducts(user.token, maletinid, params).then((res) => {
      setData(res.data.detail.data);
      setLoading(false);
    });
  };

  if (loading) {
    return (
      <div className="w-full bg-white  mb-5 p-4">
        <div className="text-center">
          <Loading />
          <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
        </div>
      </div>
    );
  }

  const { page, page_size } = params;

  const totalItems = data.total;

  const pages = Math.ceil(totalItems / page_size);

  const productos = data.productos;

  return (
    <>
      <div className="w-full flex gap-4  mb-2 p-4 items-end justify-end">
        <label className="flex items-end text-default-400 text-small">
          Filas por pagina:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            value={page_size}
            name="page_size"
            onChange={handleParamsChange}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-5 w-full p-4 gap-4">
        {productos &&
          productos.map((product) => (
            <Card
              key={product.id_producto}
              className="w-100"
              isPressable
              onClick={() =>
                navigate(`/vendedor/productos/${product.id_producto}`)
              }
            >
              <CardHeader>
                <h4 className="text-xl font-semibold">
                  {product.nombre_producto}
                </h4>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <div className="w-full flex flex-col gap-2">
                  <span className="w-full bg-emerald-500 text-white p-1 rounded-md text-sm">
                    Precio: {formatNumberToCurrency(product.precio)}
                  </span>
                  <span className="w-full bg-amber-500 text-white p-1 rounded-md text-sm">
                    Comisión: {formatNumberToCurrency(product.comision)}
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>
      <div className="w-full bg-stone-100 pr-10 pl-10 flex justify-between items-center">
        <Pagination
          total={pages}
          initialPage={page}
          loop
          showControls
          color="secondary"
          className="m-4"
          name={page}
          onChange={(page) => setParams({ ...params, page: Number(page) })}
        />
        <span className="text-default-400 text-small">
          Total {totalItems} registros
        </span>
      </div>
    </>
  );
};

export default ProductoMaletinDetail;
