import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const EmpresaCard = ({ data }) => {
  const navigate = useNavigate();

  const { id_empresa, nombre_razon_social, product_count } = data;

  return (
    <Card
      isPressable
      onClick={() => navigate(`/vendedor/explorar/empresa/${id_empresa}`)}
      className="hover:cursor-pointer"
      aria-label={`Ver detalles de la empresa ${nombre_razon_social}`}
    >
      <CardHeader>
        <p className="text-lg font-semibold m-auto capitalize">
          {nombre_razon_social}
        </p>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col w-100">
          <div className="h-[100px] bg-slate-100 rounded-md "></div>
          <span className="mt-2 font-semibold w-full  text-center">
            {product_count} Productos
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default EmpresaCard;
