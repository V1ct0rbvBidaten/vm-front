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
  const { nombre_producto, precio, descripcion, image } = data;

  return (
    <Card className="py-4" isPressable>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{nombre_producto}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image || NoImage}
          width={270}
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
