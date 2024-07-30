import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Image,
} from "@nextui-org/react";
import NoImage from "../../../assets/no-image.jpg";
import { useNavigate } from "react-router-dom";

const EmpresaCard = ({ data }) => {
  const navigate = useNavigate();

  const {
    id_empresa,
    nombre_razon_social,
    product_count,
    imagen_principal,
    background,
  } = data;

  return (
    <Card
      isPressable
      onClick={() => navigate(`/vendedor/explorar/empresa/${id_empresa}`)}
      className="hover:cursor-pointer"
      aria-label={`Ver detalles de la empresa ${nombre_razon_social}`}
    >
      <CardHeader>
        <img
          className="h-[200px] object-cover rounded-md m-auto"
          src={imagen_principal ? imagen_principal : NoImage}
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-col w-100">
          <p className="text-lg font-semibold m-auto capitalize">
            {nombre_razon_social}
          </p>
          <span className="mt-2 font-semibold w-full  text-center">
            {product_count} Productos
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default EmpresaCard;
