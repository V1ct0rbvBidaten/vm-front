import { Pagination, Divider } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../../components/utils/Loading";
import EmpresaCard from "./EmpresaCard";
import useEmpresas from "../../../hooks/useEmpresas";

const initialDinamicState = {
  page: 1,
  page_size: 10,
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
      <div className="flex flex-col justify-center items-center w-full h-[400px] bg-white rounded-md shadow-md">
        <Loading />
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );

  let profiles =
    data &&
    data.detail &&
    data.detail.data &&
    data.detail.data.profiles &&
    data.detail.data.profiles.length > 0
      ? data.detail.data.profiles
      : [];

  const { page, page_size } = dynamicState;

  const totalItems =
    data && data.detail && data.detail.data ? data.detail.data.total : [];

  const pages = Math.ceil(totalItems / page_size);

  return (
    <div className="flex flex-col m-0 justify-center items-center bg-white rounded-md shadow-md">
      <div className="w-full mb-2 p-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-semibold">Explorar </h1>
      </div>
      <Divider />
      <div className="w-full flex flex-col sm:flex-row gap-4 mb-2 p-4 justify-end items-center">
        <label className="flex items-center text-default-400 text-small">
          Items por página:
          <select
            className="bg-transparent outline-none text-default-400 text-small ml-2"
            value={page_size}
            name="page_size"
            onChange={handleDynamicStateChange}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </label>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-4">
        {profiles &&
          profiles.length > 0 &&
          profiles
            .filter((d) => d.es_empresa)
            .map((profile) => (
              <EmpresaCard data={profile} key={profile.id_empresa} />
            ))}
      </div>
      <div className="w-full bg-stone-100 p-4 flex flex-col sm:flex-row justify-between items-center">
        <Pagination
          total={pages}
          initialPage={page}
          showControls
          color="secondary"
          className="m-4"
          name={page}
          onChange={(page) =>
            setDynamicState({ ...dynamicState, page: Number(page) })
          }
        />
        <span className="text-default-400 text-small mt-2 sm:mt-0">
          Total {totalItems} registros
        </span>
      </div>
    </div>
  );
};

export default ExplorarHome;
