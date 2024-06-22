import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

const LandingNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Inicio",
    "Empresas",
    "Nosotros",
    "Iniciar Sesión",
    "Registrarse",
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1 className="font-bold text-inherit text-3xl bg-gradient-to-br from-purple-400 via-purple-300 to-sky-500 bg-clip-text text-transparent">
            VeMdo
          </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Empresas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Nosotros
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link
            href="#"
            className="text-sky-500 font-semibold text-lg font-normal"
          >
            Ingresar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-gradient-to-r from-purple-400  to-sky-500  text-white"
            href="#"
          >
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default LandingNav;
