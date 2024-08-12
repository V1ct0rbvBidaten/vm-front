import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  InformationCircleIcon,
  CreditCardIcon,
  BriefcaseIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";
import LogoVemdo from "../../assets/logoFondoBlanco.svg";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

const VendedorNavBar = ({ user }) => {
  let navigate = useNavigate();

  const handleNavegar = (ruta) => {
    navigate(ruta);
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Marketplace",
      route: "/vendedor/explorar",
      icon: <BuildingStorefrontIcon className="h-5 w-5" />,
    },
    {
      name: "Mis Ventas",
      route: "/vendedor/ventas",
      icon: <CreditCardIcon className="h-5 w-5" />,
    },
    {
      name: "Maletín de Productos",
      route: "/vendedor/productos",
      icon: <BriefcaseIcon className="h-5 w-5" />,
    },
    {
      name: "Mi cuenta",
      route: "/vendedor/cuenta",
      icon: <UserCircleIcon className="h-5 w-5" />,
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand onClick={() => handleNavegar("/")}>
          <img
            src={LogoVemdo}
            alt="Vemdo Logo"
            className="h-8 cursor-pointer"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} onClick={() => handleNavegar(item.route)}>
            <Link href={item.route} className="flex items-center gap-2">
              {item.icon}
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end"></NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={item.name}
            onClick={() => handleNavegar(item.route)}
          >
            <Link
              color="foreground"
              className="w-full"
              href={item.route}
              size="lg"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default VendedorNavBar;
