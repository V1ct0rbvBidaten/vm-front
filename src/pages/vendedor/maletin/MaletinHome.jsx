import {
  ArrowDownIcon,
  EllipsisVerticalIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
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
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const MaletinHome = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <h1 className="text-2xl font-semibold">Mis Maletines</h1>
      </div>

      <div className="grid grid-cols-6  gap-4 w-full bg-white rounded-md shadow-md p-2"></div>
    </div>
  );
};

export default MaletinHome;
