import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  InformationCircleIcon,
  CreditCardIcon,
  BriefcaseIcon,
  BuildingStorefrontIcon,
  ShoppingCartIcon,
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

const EmpresaNavBar = ({ user }) => {
  let navigate = useNavigate();

  const handleNavegar = (ruta) => {
    navigate(ruta);
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Productos",
      route: "/empresa/home",
      icon: <ShoppingCartIcon className="h-6 w-6 " />,
    },
    {
      name: "Ventas",
      route: "/empresa/ventas",
      icon: <CreditCardIcon className="h-6 w-6 " />,
    },
    {
      name: "Mi cuenta",
      icon: <UserCircleIcon className="h-6 w-6 " />,

      route: "/empresa/cuenta",
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

export default EmpresaNavBar;
