import useFiles from "../../../hooks/useFiles";
import Loading from "../../../components/utils/Loading";
import { Button, ButtonGroup } from "@nextui-org/react";
import { FolderIcon, TrashIcon } from "@heroicons/react/24/solid";

const ProductosDocs = ({ body, reloadFiles, token }) => {
  const { data, loading: loadingFiles } = useFiles(token, body, reloadFiles);

  if (loadingFiles) {
    return <Loading />;
  }

  const fileLocations = data.detail.data.file_locations;

  const files = fileLocations.map((location) => {
    const pathParts = location.split("/");
    const file = pathParts.pop();
    const path = pathParts.join("/");
    return { path, file };
  });

  return (
    <div className="flex flex-col gap-2 mt-2">
      {files.map((file, index) => (
        <ButtonGroup key={index}>
          <Button
            className="w-full h-6 text-sm justify-start  bg-slate-100"
            startContent={<FolderIcon className=" h-4" />}
          >
            {file.file}
          </Button>
          <Button
            className=" h-6 text-sm justify-start text-white bg-rose-500 justify-center"
            isIconOnly
          >
            <TrashIcon className="text-white h-4" />
          </Button>
        </ButtonGroup>
      ))}
    </div>
  );
};

export default ProductosDocs;
