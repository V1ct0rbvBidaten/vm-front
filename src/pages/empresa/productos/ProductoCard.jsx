import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";
import NoImage from "../../../assets/no-image.jpg";

const ProductoCard = ({ data }) => {
  const { nombre_producto, precio, descripcion } = data;

  return (
    <Card className="py-4" isPressable>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{nombre_producto}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <img
          className="hover:cursor-pointer hover:opacity-80 transition duration-300"
          src={data.imagen_principal ? data.imagen_principal : NoImage}
        />
      </CardBody>
      <CardFooter>
        <div className="flex flex-col w-full gap-2">
          <span className="text-emerald-500 font-semibold text-lg border-2 rounded-md ">
            Precio $ {precio}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductoCard;
