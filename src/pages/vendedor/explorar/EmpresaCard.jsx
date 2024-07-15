import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const EmpresaCard = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <p className="text-lg font-semibold">{data.name}</p>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col items-center justify-center">
          <img
            src={data.logo}
            alt={data.name}
            className="w-20 h-20 rounded-full"
          />
          <p className="text-lg font-semibold text-center">{data.name}</p>
          <p className="text-sm text-gray-500 text-center">
            {data.description}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default EmpresaCard;
