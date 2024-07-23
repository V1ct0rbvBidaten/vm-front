import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { User } from "@nextui-org/react";
import {
  UserCircleIcon,
  InformationCircleIcon,
  CreditCardIcon,
  BriefcaseIcon,
  MagnifyingGlassIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { version } from "../../utils/constants";
import LogoVemdo from "../../assets/logoVemdoBlanco.png";
import IconoVemdo from "../../assets/iconoVemdoBlanco.png";

const VendedorSideNav = ({ user }) => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const isCollapsed = useSelector((state) => state.collapse.isCollapsed);

  const ruta = useLocation().pathname;

  const activeMenuItem = [
    {
      name: "Marketplace",
      route: "/vendedor/explorar",
      icon: <BuildingStorefrontIcon className="h-6 w-6 " />,
      type: "Menu",
    },
    {
      name: "Mis Ventas",
      route: "/vendedor/ventas",
      icon: <CreditCardIcon className="h-6 w-6 " />,
      type: "Menu",
    },
    {
      name: "Maletin de Productos",
      route: "/vendedor/productos",
      icon: <BriefcaseIcon className="h-6 w-6 " />,
      type: "Menu",
    },
    {
      name: "Balance",
      route: "/vendedor/balance",
      icon: <CreditCardIcon className="h-6 w-6 " />,
      type: "Menu",
    },
    {
      name: "Mi cuenta",
      icon: <UserCircleIcon className="h-6 w-6 " />,
      type: "Menu",
      route: "/vendedor/cuenta",
    },
  ];

  const config = {
    icon: ({ active }) => {
      return {
        color: active ? "#28B6C6" : "#ffff",
        transition: "all .3s ease",
      };
    },
    button: ({ level, active }) => {
      if (level === 0)
        return {
          color: active ? "#28B6C6" : "white",
          backgroundColor: active ? "#fff" : undefined,
          borderRadius: "20px",
          margin: "5px 0px 0px 0px",
          height: "40px",
          fontSize: "12px",
          padding: "10px",
          transition: "all .3s ease",
          "&:hover": {
            backgroundColor: "#05d9b2",
            color: "#fff !important",
          },
        };
    },
  };

  const handleNavegar = (ruta) => {
    console.log("Navegar a");
    navigate(ruta);
  };

  const versionFormat = (
    <div className="flex gap-2 text-slate-500 text-xs italic  mt-2 hover:cursor-pointer hover:transition-all hover:text-slate-500 font-semibold bg-stone-100 p-1 rounded-full hover:bg-stone-400 hover:text-white">
      <InformationCircleIcon className="h-4" />
      <span>VeMdo Versión - {version[0].version}</span>
    </div>
  );

  return (
    <Sidebar
      className="flex flex-col h-screen fixed overflow-y-hidden"
      collapsedWidth="90px"
      collapsed={isCollapsed}
      rootStyles={{
        background:
          "linear-gradient(0deg, rgba(21,10,48,1) 0%, rgba(44,2,97,1) 100%)",
      }}
      width="230px"
    >
      {isCollapsed ? (
        <div className="p-4 flex flex-col h-full">
          <div className="flex flex-col items-center justify-center">
            <img src={IconoVemdo} className="h-[40px]" />
          </div>

          <Menu className="mt-5" menuItemStyles={config}>
            {activeMenuItem &&
              activeMenuItem.map((c) => {
                if (c.type === "Menu") {
                  if (ruta === c.route) {
                    return (
                      <MenuItem
                        icon={c.icon}
                        active
                        key={c.name}
                        onClick={() => handleNavegar(c.route)}
                      ></MenuItem>
                    );
                  } else {
                    return (
                      <MenuItem
                        icon={c.icon}
                        key={c.name}
                        onClick={() => handleNavegar(c.route)}
                      >
                        {c.name}
                      </MenuItem>
                    );
                  }
                } else if (c.type === "SubMenu") {
                  if (ruta.includes(c.route)) {
                    return (
                      <SubMenu key={c.name} icon={c.icon} label={c.name} active>
                        {c.subMenuItems.map((d) => (
                          <MenuItem
                            key={d.name}
                            onClick={() => handleNavegar(d.route)}
                            style={{
                              margin: "5px",
                              borderRadius: "15px",
                              height: "25px",
                              fontSize: "14px",
                            }}
                          >
                            {d.name}
                          </MenuItem>
                        ))}
                      </SubMenu>
                    );
                  } else {
                    return (
                      <SubMenu key={c.name} icon={c.icon} label={c.name}>
                        {c.subMenuItems.map((d) => (
                          <MenuItem
                            key={d.name}
                            onClick={() => handleNavegar(d.route)}
                            style={{
                              margin: "5px",
                              borderRadius: "15px",
                              height: "25px",
                              fontSize: "14px",
                            }}
                          >
                            {d.name}
                          </MenuItem>
                        ))}
                      </SubMenu>
                    );
                  }
                }
              })}
          </Menu>

          <div className="mt-auto p-2 text-md">
            <User
              name={user.nombre_completo}
              avatarProps={{
                src: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
              }}
            />
          </div>
        </div>
      ) : (
        <div className=" flex flex-col h-full">
          <div className="flex justify-center items-center mt-8 m-4 ">
            <img src={LogoVemdo} className="h-[40px]" />
          </div>

          <Menu className="m-4" menuItemStyles={config}>
            {activeMenuItem &&
              activeMenuItem.map((c) => {
                if (c.type === "Menu") {
                  if (ruta === c.route) {
                    return (
                      <MenuItem
                        icon={c.icon}
                        active
                        key={c.name}
                        onClick={() => handleNavegar(c.route)}
                      >
                        {c.name}
                      </MenuItem>
                    );
                  } else {
                    return (
                      <MenuItem
                        icon={c.icon}
                        key={c.name}
                        onClick={() => handleNavegar(c.route)}
                      >
                        {c.name}
                      </MenuItem>
                    );
                  }
                } else if (c.type === "SubMenu") {
                  if (ruta.includes(c.route)) {
                    return (
                      <SubMenu key={c.name} icon={c.icon} label={c.name} active>
                        {c.subMenuItems.map((d) => (
                          <MenuItem
                            key={d.name}
                            onClick={() => handleNavegar(d.route)}
                            style={{
                              margin: "5px",
                              borderRadius: "15px",
                              height: "25px",
                              fontSize: "12px",
                            }}
                          >
                            {d.name}
                          </MenuItem>
                        ))}
                      </SubMenu>
                    );
                  } else {
                    return (
                      <SubMenu key={c.name} icon={c.icon} label={c.name}>
                        {c.subMenuItems.map((d) => (
                          <MenuItem
                            key={d.name}
                            onClick={() => handleNavegar(d.route)}
                            style={{
                              margin: "5px",
                              borderRadius: "15px",
                              height: "25px",
                              fontSize: "12px",
                            }}
                          >
                            {d.name}
                          </MenuItem>
                        ))}
                      </SubMenu>
                    );
                  }
                }
              })}
          </Menu>

          <div className="mt-auto ml-4 mr-4 p-4 text-md">
            <User
              name={user.profile_name}
              classNames={{
                name: "text-white",
              }}
              avatarProps={{
                src: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
              }}
            />
            {versionFormat}
          </div>
        </div>
      )}
    </Sidebar>
  );
};

export default VendedorSideNav;
