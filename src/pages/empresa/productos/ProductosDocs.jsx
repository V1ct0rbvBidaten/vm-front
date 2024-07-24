import useFiles from "../../../hooks/useFiles";
import Loading from "../../../components/utils/Loading";
import { Button, ButtonGroup } from "@nextui-org/react";
import { FolderIcon, TrashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { deleteFile } from "../../../api/file";
import { useState } from "react";

const initialState = {
  id_empresa: "vemdo-empresas",
  path: "",
};

const ProductosDocs = ({ body, reloadFiles, token, setReloadFiles }) => {
  const [fileInfo, setFileInfo] = useState(initialState);

  const { data, loading: loadingFiles } = useFiles(token, body, reloadFiles);

  if (loadingFiles) {
    return <Loading />;
  }

  const fileLocations = data.detail.data.file_locations;

  const files = fileLocations.map((location) => {
    console.log(location);
    const pathParts = location.split("/");
    const file = pathParts.pop();
    const path = pathParts.join("/");
    return { location, file };
  });

  const handleDeleteFile = (path) => {
    fileInfo.path = path;
    deleteFile(token, fileInfo)
      .then((response) => {
        if (response.status === 200) {
          setReloadFiles(!reloadFiles);
          toast;
        }
      })
      .catch((error) => {
        console.error("Error al eliminar el archivo:", error);
      })
      .finally(() => {
        setReloadFiles(!reloadFiles);
      });
  };

  return (
    <div className="flex flex-col gap-2 mt-2">
      {files.map((file, index) => (
        <ButtonGroup key={index}>
          <Button
            className="w-full h-6 text-sm justify-start  bg-slate-100 text-xs font-semibold"
            startContent={<FolderIcon className=" h-4" />}
          >
            {file.file}
          </Button>
          <Button
            className=" h-6 text-sm justify-start text-white bg-rose-500 justify-center"
            isIconOnly
            onClick={() => handleDeleteFile(file.location)}
          >
            <TrashIcon className="text-white h-4" />
          </Button>
        </ButtonGroup>
      ))}
    </div>
  );
};

export default ProductosDocs;
