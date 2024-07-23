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
  page_size: 12,
};

const ProductoMaletinDetail = ({ maletinid }) => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [data, setData] = useState([]);
  const [params, setParams] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProductos();
  }, []);

  const loadProductos = () => {
    setLoading(true);
    getMaletinProducts(user.token, maletinid, params).then((res) => {
      setData(res.data.detail.data.productos);
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

  return (
    <div className="grid grid-cols-6 w-full p-4 gap-4">
      {data.map((product) => (
        <Card
          key={product.id_producto}
          className="w-100"
          isPressable
          onClick={() => navigate(`/vendedor/productos/${product.id_producto}`)}
        >
          <CardHeader>
            <h4 className="text-xl font-semibold">{product.nombre_producto}</h4>
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

      <div className="col-span-6 justify-center flex">
        <Pagination />
      </div>
    </div>
  );
};

export default ProductoMaletinDetail;
