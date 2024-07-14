import { useState } from "react";
import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { createProducto } from "../../../api/products";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/utils/Loading";
import categoriasProductos from "../../../utils/categoriasProductos.json";
import SingleImageUploader from "../../../components/utils/SingleImageUploader";
import MultipleImageUploader from "../../../components/utils/MultipleImageUploader";

const initialState = {
  nombre_producto: "",
  descripcion: "",
  precio: "",
  estado_producto: "",
  comision: "",
  categoria: "",
  tipo_venta: "",
  imagen_principal: "",
  imagenes: [],
};

const ProductoCreate = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [galeria, setGaleria] = useState([]);
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    values.imagen_principal = JSON.stringify(image);
    values.imagenes = galeria;
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
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
          {JSON.stringify(image)}
          <div className="row-span-3 h-auto ">
            <SingleImageUploader image={image} setImage={setImage} />
          </div>
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
          <Select
            size="sm"
            variant="bordered"
            name="estado_producto"
            label="Estado producto"
            labelPlacement="outside"
            value={values.estado_producto}
            placeholder="estado"
            onChange={handleChange}
          >
            <SelectItem key="disponible" value="disponible">
              Disponible
            </SelectItem>
            <SelectItem key="no_disponible" value="no_disponible">
              No Disponible
            </SelectItem>
          </Select>
          <Input
            size="sm"
            variant="bordered"
            placeholder="Comisión"
            name="comision"
            label="Comisión"
            labelPlacement="outside"
            value={values.comision}
            onChange={handleChange}
            type="number"
          />
          <Select
            size="sm"
            variant="bordered"
            name="categoria"
            label="Categoria"
            placeholder="Categoria"
            labelPlacement="outside"
            value={values.categoria}
            onChange={handleChange}
          >
            {categoriasProductos.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </Select>
          <Select
            size="sm"
            variant="bordered"
            name="tipo_venta"
            label="Tipo de venta"
            placeholder="Tipo de venta"
            labelPlacement="outside"
            value={values.tipo_venta}
            onChange={handleChange}
          >
            <SelectItem key="PAGO ANTICIPADO" value="PAGO ANTICIPADO">
              Pago Anticipado
            </SelectItem>
            <SelectItem key="POSTPAGO" value="POSTPAGO">
              Post Pago
            </SelectItem>
          </Select>
          <Textarea
            placeholder="Ingrese descripción"
            variant="bordered"
            name="descripcion"
            label="Descripción"
            labelPlacement="outside"
            className="col-span-3"
            value={values.descripcion}
            onChange={handleChange}
          />

          <div className="col-span-3">
            <MultipleImageUploader
              images={galeria}
              setImages={setGaleria}
              maxImages={10}
            />
          </div>
          <Button
            type="submit"
            className="bg-foreground text-white  rounded-md col-span-3"
          >
            Crear Producto
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductoCreate;
