import {
  ChevronDoubleLeftIcon,
  EllipsisVerticalIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
  Input,
  useSelect,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProductos from "../../../hooks/useProductos";
import Loading from "../../../components/utils/Loading";

const initialState = {
  page: 1,
  page_size: 10,
  id_empresa: "",
};

const EmpresaDetail = () => {
  const user = useSelect((state) => state.user);
  const { id } = useParams();

  const [reload, setReload] = useState(false);
  const [params, setParams] = useState({ ...initialState, id_empresa: id });

  let navigate = useNavigate();

  const { data, loading } = useProductos(user.token, params, reload);

  if (loading)
    return (
      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Nombre Empresa</h1>
          <Button
            className="bg-emerald-500  text-white h-6"
            onClick={() => navigate("/vendedor/explorar")}
            startContent={<ChevronDoubleLeftIcon className="h-4" />}
          >
            Volver
          </Button>
        </div>
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Divider />
        <Loading />
      </div>
    );

  return (
    <>
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Nombre Empresa</h1>
          <Button
            className="bg-emerald-500  text-white h-6"
            onClick={() => navigate("/vendedor/explorar")}
            startContent={<ChevronDoubleLeftIcon className="h-4" />}
          >
            Volver
          </Button>
        </div>
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Divider />
        <div className="w-full flex gap-4  mb-2 p-4">
          <FunnelIcon className="h-6 text-slate-700" />
          <Input
            size="sm"
            radius="full"
            className="h-6 w-[300px] "
            placeholder="Ingrese nombre de producto"
            variant="bordered"
            startContent={<MagnifyingGlassIcon className="h-4" />}
          />
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="h-7 bg-slate-100 shadow-md"
                startContent={<EllipsisVerticalIcon className="h-4" />}
              >
                Categoria
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
              <DropdownItem key="new" shortcut="⌘N">
                New file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="h-7 bg-slate-100 shadow-md"
                startContent={<EllipsisVerticalIcon className="h-4" />}
              >
                Estado
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
              <DropdownItem key="new" shortcut="⌘N">
                New file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div>productos</div>
      </div>
    </>
  );
};

export default EmpresaDetail;
