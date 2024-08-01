import useFiles from "../../../hooks/useFiles";
import Loading from "../../../components/utils/Loading";
import { Button, ButtonGroup } from "@nextui-org/react";
import { FolderIcon, TrashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { deleteFile, downloadFile } from "../../../api/file";
import { useState } from "react";

const initialState = {
  id_empresa: "",
  bucket: "",
  path: "",
  fileName: "",
};

const ProductosDocs = ({
  body,
  reloadFiles,
  token,
  setReloadFiles,
  bucket,
}) => {
  const [fileInfo, setFileInfo] = useState(initialState);

  const { data, loading: loadingFiles } = useFiles(token, body, reloadFiles);

  if (loadingFiles) {
    return <Loading />;
  }

  const fileLocations = data.detail.data.file_locations;

  const files = fileLocations.map((location) => {
    const pathParts = location.split("/");
    const file = pathParts.pop();
    const path = pathParts.join("/");
    return { location, file };
  });

  const handleDownloadFile = (file) => {
    fileInfo.path = file.location;
    fileInfo.fileName = file.file;
    fileInfo.bucket = bucket;
    fileInfo.id_empresa = bucket;
    downloadFile(token, fileInfo)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error al descargar el archivo:", error);
      });
  };

  return (
    <div className="flex flex-col gap-2 mt-2">
      {files.map((file, index) => (
        <ButtonGroup key={index}>
          <Button
            className="w-full h-6 justify-start  bg-slate-100 text-xs font-semibold"
            startContent={<FolderIcon className="h-4" />}
            onClick={() => handleDownloadFile(file)}
          >
            {file.file}
          </Button>
        </ButtonGroup>
      ))}
    </div>
  );
};

export default ProductosDocs;
