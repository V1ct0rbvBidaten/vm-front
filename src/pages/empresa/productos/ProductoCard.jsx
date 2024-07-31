import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";
import NoImage from "../../../assets/no-image.jpg";
import { useNavigate } from "react-router-dom";
import { formatNumberToCurrency } from "../../../functions/formaters";

const ProductoCard = ({ data }) => {
  const navigate = useNavigate();
  const { nombre_producto, precio, imagen_principal, id_producto } = data;

  return (
    <Card
      className="py-4"
      isPressable
      onClick={() => navigate(`/empresa/home/producto/${data.id_producto}`)}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-xs">{nombre_producto}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 h-[200px]">
        <div className="image-container ">
          <img
            className="hover:cursor-pointer hover:opacity-80 transition duration-300"
            src={imagen_principal ? imagen_principal : NoImage}
          />
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex  w-full gap-2 justify-start">
          <span className="text-emerald-500 font-semibold text-lg  rounded-md ">
            {formatNumberToCurrency(precio)}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductoCard;
