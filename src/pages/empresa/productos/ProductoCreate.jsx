import { useState } from "react";
import { Button, Divider, Input, Textarea } from "@nextui-org/react";
import { createProducto } from "../../../api/products";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/utils/Loading";

const initialState = {
  nombre_producto: "",
  descripcion: "",
  precio: "",
};

const ProductoCreate = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    createProducto(user.token, values)
      .then((res) => {
        console.log(res);
        toast.success("Producto creado con éxito");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error al crear producto");
      })
      .finally(() => {
        navigate("/empresa/home");
        setValues(initialState);
        setLoading(false);
      });
  };

  if (loading)
    return (
      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
        <div className="w-full  mb-2 p-4 flex justify-between">
          <h1 className="text-2xl font-semibold">Crear Producto</h1>
        </div>
        <Divider />
        <div className="flex flex-col justify-center items-center w-100 h-[400px] ">
          <Loading />
          <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
      <div className="w-full  mb-2 p-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Crear Producto</h1>
      </div>
      <Divider />
      <div className="w-full p-4">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <Input
            size="sm"
            variant="bordered"
            placeholder="Nombre"
            name="nombre_producto"
            label="Nombre"
            labelPlacement="outside"
            value={values.nombre_producto}
            onChange={handleChange}
          />

          <Input
            size="sm"
            variant="bordered"
            placeholder="Precio"
            name="precio"
            label="Precio"
            labelPlacement="outside"
            value={values.precio}
            onChange={handleChange}
          />
          <Textarea
            placeholder="Ingrese descripción"
            variant="bordered"
            name="descripcion"
            label="Descripción"
            labelPlacement="outside"
            className="col-span-2"
            value={values.descripcion}
            onChange={handleChange}
          />
          <Button
            type="submit"
            className="bg-foreground text-white  rounded-md col-span-2"
          >
            Crear Producto
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductoCreate;
