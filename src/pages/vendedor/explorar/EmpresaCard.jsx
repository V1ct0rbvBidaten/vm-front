import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const EmpresaCard = ({ data }) => {
  const navigate = useNavigate();

  const { id_empresa } = data;

  return (
    <Card
      isPressable
      onClick={() => navigate(`/vendedor/explorar/empresa/${id_empresa}`)}
      className="hover:cursor-pointer"
    >
      <CardHeader>
        <p className="text-lg font-semibold m-auto">Nombre Empresa</p>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col items-center justify-center">
          <Button className="w-full h-6 text-sm bg-emerald-500 text-white">
            X Productos
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default EmpresaCard;
