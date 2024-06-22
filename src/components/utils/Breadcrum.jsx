import { useState } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Bradcrum = () => {
  let { id } = useParams();

  const ruta = useLocation().pathname;
  const [currentPage, setCurrentPage] = useState("song");

  const rutaValues = ruta && ruta.slice(1).split("/");

  return (
    <Breadcrumbs underline="active" onAction={(key) => setCurrentPage(key)}>
      {rutaValues &&
        rutaValues
          .filter((d) => d !== id)
          .map((c) => (
            <BreadcrumbItem
              key={c}
              className="capitalize"
              isCurrent={currentPage === c}
            >
              {c}
            </BreadcrumbItem>
          ))}
    </Breadcrumbs>
  );
};

export default Bradcrum;
