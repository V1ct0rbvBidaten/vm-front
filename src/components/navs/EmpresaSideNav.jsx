import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { Button, User } from "@nextui-org/react";
import {
  ChartPieIcon,
  NewspaperIcon,
  AdjustmentsHorizontalIcon,
  UsersIcon,
  CalendarDaysIcon,
  ArrowLeftEndOnRectangleIcon,
  UserCircleIcon,
  CalendarIcon,
  CheckBadgeIcon,
  LinkIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { version } from "../../utils/constants";

const EmpresaSideNav = ({ user }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state) => state.collapse.isCollapsed);

  const ruta = useLocation().pathname;

  const activeMenuItem = [
    {
      name: "Panel de control",
      route: "/admin/home",
      icon: <ChartPieIcon className="h-6 w-6 " />,
      type: "Menu",
    },
    {
      name: "Personal embarcado",
      route: "/admin/personal-embarcado",
      icon: <UsersIcon className="h-6 w-6 " />,
      type: "Menu",
    },
    {
      name: "Asistencia",
      icon: <CalendarDaysIcon className="h-6 w-6 " />,
      type: "Menu",
      route: "/admin/asistencia",
    },

    {
      name: "Cierre de mes",
      icon: <CalendarIcon className="h-6 w-6 " />,
      type: "Menu",
      route: "/admin/cierre",
    },
  ];

  const activeMenuItemHerramientas = [
    {
      name: "Configuraciones",
      icon: <AdjustmentsHorizontalIcon className="h-6 w-6 " />,
      type: "SubMenu",
      route: "/admin/configuraciones",
      subMenuItems: [
        {
          name: "Datos Maestros",
          route: "/admin/configuraciones/datos-maestros",
          type: "Menu",
        },
        {
          name: "Usuarios",
          route: "/admin/configuraciones/usuarios",
          type: "Menu",
        },
        {
          name: "Naves",
          route: "/admin/configuraciones/naves",
          type: "Menu",
        },
      ],
    },
    {
      name: "Reportes",
      route: "/admin/reportes",
      icon: <NewspaperIcon className="h-6 w-6 " />,
      type: "Menu",
    },
  ];

  const config = {
    icon: ({ active }) => {
      return {
        color: active ? "white" : "#003246",
        transition: "all .3s ease",
      };
    },
    button: ({ level, active }) => {
      // only apply styles on first level elements of the tree
      if (level === 0)
        return {
          color: active ? "white" : undefined,
          backgroundColor: active ? "#7A99A2" : undefined,
          borderRadius: "40px",
          margin: "0px 0px 0px 0px",
          height: "30px",
          fontSize: "12px",
          padding: "10px",
          transition: "all .3s ease",
          "&:hover": {
            backgroundColor: "#8CBBB9",
            color: "white !important",
          },
        };
    },
  };

  const handleSignOut = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/");
  };

  const handleNavegar = (ruta) => {
    console.log("Navegar a");
    navigate(ruta);
  };

  const versionFormat = (
    <div className="flex gap-2 text-slate-500 text-xs italic  mt-2 hover:cursor-pointer hover:transition-all hover:text-slate-500 font-semibold bg-stone-100 p-1 rounded-full hover:bg-stone-400 hover:text-white">
      <InformationCircleIcon className="h-4" />
      <span>ArgosNautica Versión - {version[0].version}</span>
    </div>
  );

  return (
    <Sidebar
      className="bg-white p-4 overflow-y-hidden"
      backgroundColor="#fffff"
      collapsedWidth="90px"
      collapsed={isCollapsed}
      width="230px"
    >
      {isCollapsed ? (
        <>
          <div className="flex flex-col items-center justify-center ">
            <h1 className="font-bold text-inherit text-3xl bg-gradient-to-br from-purple-300 via-purple-400 to-purple-700 bg-clip-text text-transparent">
              VeMdo
            </h1>
            <div
              className="mt-2 h-6  w-full col-span-3  text-white shadow-lg text-md font-bold "
              style={{ background: "#003246" }}
            ></div>
          </div>
          <div className="mt-5 text-md text-slate-400">
            <p>Menu</p>
            <hr />
          </div>
          <Menu menuItemStyles={config}>
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
                        // href={c.route}
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

          <div className="mt-3 text-md text-slate-400">
            <p>Herr..</p>
            <hr />
          </div>
          <Menu menuItemStyles={config}>
            {activeMenuItemHerramientas &&
              activeMenuItemHerramientas.map((c) => {
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
                  return (
                    <SubMenu key={c.name} icon={c.icon} label={c.name}>
                      {c.subMenuItems.map((d) => (
                        <MenuItem
                          style={{
                            margin: "5px",
                            borderRadius: "15px",
                            height: "25px",
                            fontSize: "14px",
                          }}
                          key={d.name}
                          onClick={() => handleNavegar(d.route)}
                        >
                          {d.name}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  );
                }
              })}
          </Menu>

          <div className=" text-md text-slate-400">
            <p>Cue...</p>
            <hr />
          </div>
          <div className="p-2 text-md">
            <User
              name={user.nombre_completo}
              avatarProps={{
                src: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
              }}
            />
          </div>
          <button
            style={{ background: "#7A99A2" }}
            onClick={handleSignOut}
            className=" mt-2 h-10 rounded-full w-full col-span-3 text-white shadow-lg text-md font-bold"
          >
            <ArrowLeftEndOnRectangleIcon className="h-6 m-auto" />
          </button>
        </>
      ) : (
        <>
          <div className="grid grid-cols-3  justify-start items-center  mb-0 mr ">
            {/* <img src={Logo} height="20" width={50} /> */}
            <div className=" rounded-full col-span-3">
              <h1 className="font-bold text-inherit text-3xl bg-gradient-to-br from-purple-300 via-purple-400 to-purple-700 bg-clip-text text-transparent">
                VeMdo
              </h1>
            </div>

            <Button
              radius="none"
              size="sm"
              className="mt-2 w-full col-span-3 bg-gradient-to-br  text-white shadow-lg text-md font-bold"
              style={{ background: "#003246" }}
              startContent={<UserCircleIcon className="h-5" />}
            >
              Flota
            </Button>
          </div>
          <div className="mt-5 text-md text-slate-400">
            <p>Menu</p>
            <hr />
          </div>
          <Menu menuItemStyles={config}>
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
                        // href={c.route}
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

          <div className="mt-3 text-md text-slate-400">
            <p>Herramientas</p>
            <hr />
          </div>
          <Menu menuItemStyles={config}>
            {activeMenuItemHerramientas &&
              activeMenuItemHerramientas.map((c) => {
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
                  return (
                    <SubMenu key={c.name} icon={c.icon} label={c.name}>
                      {c.subMenuItems.map((d) => (
                        <MenuItem
                          style={{
                            margin: "5px",
                            borderRadius: "15px",
                            height: "25px",
                            fontSize: "12px",
                          }}
                          key={d.name}
                          onClick={() => handleNavegar(d.route)}
                        >
                          {d.name}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  );
                }
              })}
          </Menu>

          <div className=" text-md text-slate-400">
            <p>Cuenta</p>
            <hr />
          </div>
          <div className="p-4 text-md">
            <User
              name={user.name}
              description={
                <Link href="#" size="sm" className="text-sky-500 capitalize">
                  {user.role}
                </Link>
              }
              avatarProps={{
                src: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
              }}
            />
          </div>
          <Button
            onClick={handleSignOut}
            radius="sm"
            size="sm"
            className="w-full    text-white shadow-lg"
            style={{ background: "#7A99A2" }}
          >
            Desconectarse{" "}
          </Button>
          {versionFormat}
        </>
      )}
    </Sidebar>
  );
};

export default EmpresaSideNav;
