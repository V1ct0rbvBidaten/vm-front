import { useState } from "react";
import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { updateProducto } from "../../../api/products";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
  documento: [],
};

const ProductoEdit = ({ data, setReload, reload, setEdit, edit }) => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(data.imagen_principal[0]);
  const [galeria, setGaleria] = useState(data.imagenes[0]);
  const [values, setValues] = useState(data);
  const [fileCapacitacion, setFileCapacitacion] = useState([]);
  const [fileVenta, setFileVenta] = useState([]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFileChangeVenta = (e) => {
    setFileVenta([...e.target.files]);
  };

  const handleFileChangeCapacitacion = (e) => {
    setFileCapacitacion([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    values.imagen_principal = image;
    values.imagenes = galeria;

    setLoading(true);
    updateProducto(user.token, id, values)
      .then((res) => {
        console.log(res);

        toast.success("Producto actualizado con éxito");
        navigate(`/empresa/home/producto/${id}`);
      })
      .catch((error) => {
        console.error("Error al actualizar el producto:", error);
        toast.error("Error al actualizar el producto");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
        setReload(!reload);
        setEdit(!edit);
      });
  };

  if (loading)
    return (
      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md  w-full">
      <div className="w-full  mb-2 p-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Editar Producto</h1>
      </div>
      <Divider />
      <div className="w-full p-4">
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
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

          <div className="col-span-3 flex gap-2 flex-col">
            <h2 className="mt-4 font-semibold">Galería</h2>
            <Divider />
            <div>
              <MultipleImageUploader
                images={galeria}
                setImages={setGaleria}
                maxImages={10}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="bg-foreground text-white  rounded-md col-span-3"
          >
            Actualizar Producto
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductoEdit;
