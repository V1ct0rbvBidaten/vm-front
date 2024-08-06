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
import InputFileUploader from "../../../components/utils/InputFileUploader";
import { getSize } from "../../../functions/file";
import { uploadFile } from "../../../api/file";

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

const ProductoCreate = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [galeria, setGaleria] = useState([]);
  const [values, setValues] = useState(initialState);
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
    createProducto(user.token, values)
      .then((res) => {
        console.log(res);

        if (fileCapacitacion.length > 0) {
          let paramsCapacitacion = {
            id_empresa: "vemdo-empresas",
            path: `${res.data.detail.data[0].id_empresa}/productos/${res.data.detail.data[0].id_producto}/capacitacion`,
          };

          uploadFile(user.token, paramsCapacitacion, fileCapacitacion)
            .then((res) => {
              console.log(res);
              toast.success("Archivo subido con éxito");
            })
            .catch((err) => {
              console.log(err);
              toast.error("Error al subir archivo");
            });
        }

        if (fileVenta.length > 0) {
          let paramsVenta = {
            id_empresa: "vemdo-empresas",
            path: `${res.data.detail.data[0].id_empresa}/productos/${res.data.detail.data[0].id_producto}/venta`,
          };

          uploadFile(user.token, paramsVenta, fileVenta)
            .then((res) => {
              console.log(res);
              toast.success("Archivo subido con éxito");
            })

            .catch((err) => {
              console.log(err);
              toast.error("Error al crear producto");
            });
        }
        toast.success("Producto creado con éxito");
        navigate("/empresa/home");
        setValues(initialState);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error al crear producto");
      })
      .finally(() => {
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
            isRequired
            onChange={handleChange}
          />
          <Input
            size="sm"
            variant="bordered"
            placeholder="Precio"
            name="precio"
            label="Precio"
            labelPlacement="outside"
            isRequired
            value={values.precio}
            onChange={handleChange}
          />
          <Select
            size="sm"
            variant="bordered"
            name="estado_producto"
            label="Estado producto"
            labelPlacement="outside"
            isRequired
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
            isRequired
            labelPlacement="outside"
            value={values.comision}
            onChange={handleChange}
            max={values.precio}
            type="number"
          />
          <Select
            size="sm"
            variant="bordered"
            name="categoria"
            label="Categoria"
            isRequired
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
            isRequired
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
            isRequired
            labelPlacement="outside"
            className="col-span-3"
            value={values.descripcion}
            onChange={handleChange}
          />

          <div className="col-span-2 flex gap-2 flex-col">
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
          <div className="flex gap-2 flex-col">
            <h2 className="mt-4 font-semibold">Documentación Venta</h2>
            <Divider />

            <InputFileUploader
              multiple
              handleFileChange={handleFileChangeVenta}
            />
            {fileVenta && fileVenta.length > 0 && (
              <div className="w-100 border-1">
                {fileVenta.map((file, index) => (
                  <div
                    className="w-100 bg-emerald-500 m-1 rounded-md p-1 text-white flex justify-between"
                    key={index}
                  >
                    <span className="text-xs">{file.name}</span>

                    <span className="text-xs">{getSize(file.size)}</span>
                  </div>
                ))}
              </div>
            )}
            <h4 className="font-semibold mt-12">Documentación Capacitación</h4>
            <Divider />
            <InputFileUploader
              multiple
              handleFileChange={handleFileChangeCapacitacion}
            />
            {fileCapacitacion && fileCapacitacion.length > 0 && (
              <div className="w-100 border-1">
                {fileCapacitacion.map((file, index) => (
                  <div
                    className="w-100 bg-emerald-500 m-1 rounded-md p-1 text-white flex justify-between"
                    key={index}
                  >
                    <span className="text-xs">{file.name}</span>

                    <span className="text-xs">{getSize(file.size)}</span>
                  </div>
                ))}
              </div>
            )}
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
