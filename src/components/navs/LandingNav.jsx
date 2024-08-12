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
import Logo from "../../assets/logoFondoBlanco.svg";
import { useNavigate } from "react-router-dom";

const LandingNav = () => {
  let navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated menuItems array with labels and corresponding paths
  const menuItems = [
    { label: "Conócenos", path: "/conocenos" },
    { label: "Ayuda", path: "/ayuda" },
    { label: "Contacto", path: "/contacto" },
    { label: "Iniciar Sesión", path: "/login" },
    { label: "Registrarse", path: "/registro" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" isBlurred>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground">
            <img src={Logo} className="w-[120px]" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        {menuItems.slice(0, 3).map((item) => (
          <NavbarItem key={item.label}>
            <Link
              color="foreground"
              href={item.path}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link href="/login" className="text-v3 font-bold text-lg font-normal">
            Ingresar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-gradient-to-r from-v4 to-v3 text-white rounded-full"
            href="/registro"
          >
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.path}
              onClick={() => navigate(item.path)}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default LandingNav;
