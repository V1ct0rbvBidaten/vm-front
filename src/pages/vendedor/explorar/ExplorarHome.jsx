import {
  ArrowDownIcon,
  EllipsisVerticalIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  Image,
  CardFooter,
  Button,
  CardHeader,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  CardBody,
  Input,
  useSelect,
  Pagination,
  Divider,
} from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePerfiles from "../../../hooks/usePerfiles";
import { useSelector } from "react-redux";
import Loading from "../../../components/utils/Loading";
import EmpresaCard from "./EmpresaCard";
import useEmpresas from "../../../hooks/useEmpresas";

const initialDinamicState = {
  page: 1,
  page_size: 30,
};

const ExplorarHome = () => {
  const [dynamicState, setDynamicState] = useState(initialDinamicState);
  const [reload, setReload] = useState(false);

  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const { data: data, loading } = useEmpresas(user.token, dynamicState, reload);

  const handleDynamicStateChange = (e) => {
    setDynamicState({ ...dynamicState, [e.target.name]: e.target.value });
  };

  const resetState = () => {
    setReload(!reload);
  };

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center w-100 h-[400px] bg-white rounded-md shadow-md">
        <Loading />
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );

  let profiles =
    data &&
    data.detail.data.profiles !== null &&
    data.detail.data.profiles.length > 0
      ? data.detail.data.profiles
      : [];

  return (
    <div className="flex flex-col m-0 justify-center items-center bg-white rounded-md shadow-md">
      <div className="w-full  mb-2 p-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Explorar </h1>
      </div>
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
      <div className="p-4 grid grid-cols-6 w-full gap-2">
        {profiles
          .filter((d) => d.es_empresa)
          .map((profile) => (
            <EmpresaCard data={profile} key={profile.id_empresa} />
          ))}
      </div>
    </div>
  );
};

export default ExplorarHome;
