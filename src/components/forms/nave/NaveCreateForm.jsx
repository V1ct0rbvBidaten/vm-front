import { useState, useMemo } from "react";
import {
  ArrowDownOnSquareIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import {
  Divider,
  Input,
  Select,
  SelectItem,
  CheckboxGroup,
  Checkbox,
  Tooltip,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { formatChileanPhoneNumber } from "../../../functions/utils";
import DotacionMinimaModal from "../../../pages/admin/config/naves/DotacionMinimaModal";
import DotacionMinimaTable from "../../tables/DotacionMinimaTable";
import { createNave } from "../../../api/nave";
import { toast } from "react-toastify";

const initialState = {
  nombre_nave: "",
  tipo_nave: "",
  capacidad_personal: 0,
  contacto: "",
  email: "",
  trg: 0,
  zona_navegacion: [],
  dotacion_minima: [],
};

const initialStateDotacion = {
  id_plaza: "",
  plaza: "",
  cantidad: 0,
  titulos: [],
  cursos: [],
  cargos: [],
};

const NaveCreateForm = ({ zonas, plazas, cursos, titulos, user, cargos }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [values, setValues] = useState(initialState);
  const [zonaNavegacion, setZonaNavegacion] = useState([]);
  const [titulosArray, setTitulosArray] = useState([]);
  const [cursosArray, setCursosArray] = useState([]);
  const [cargosArray, setCargosArray] = useState([]);
  const [dotacionMinima, setDotacionMinima] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dotacionMinimaTemporal, setDotacionMinimaTemporal] =
    useState(initialStateDotacion);

  const handleChange = (e) => {
    if (e.target.name === "contacto") {
      setValues({
        ...values,
        [e.target.name]: formatChileanPhoneNumber(e.target.value),
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const { nombre_nave, tipo_nave, capacidad_personal, contacto, email, trg } =
    values;

  const items_tipo_nave = [
    {
      id: 1,
      name: "Nave Mayor",
    },
    {
      id: 2,
      name: "Nave Menor",
    },
    {
      id: 3,
      name: "Remolcador",
    },
    {
      id: 4,
      name: "Wellboat",
    },
    {
      id: 5,
      name: "Barcaza",
    },
    {
      id: 6,
      name: "Lancha a motor",
    },
  ];

  const selectedValueCursos = useMemo(
    () => Array.from(cursosArray).join(", "),
    [cursosArray]
  );

  const selectedValueTitulos = useMemo(
    () => Array.from(titulosArray).join(", "),
    [titulosArray]
  );

  const selectedValueCargos = useMemo(
    () => Array.from(cargosArray).join(", "),
    [cargosArray]
  );

  const handleChangeDotacion = (e) => {
    setDotacionMinimaTemporal({
      ...dotacionMinimaTemporal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitDotacionMinima = () => {
    console.log("Submit dotacion minima");

    let nuevaDotacion = {};

    if (dotacionMinimaTemporal.id_plaza === "") {
      return toast.error("Favor seleccionar plaza");
    }
    // else if (dotacionMinimaTemporal.cantidad === 0) {
    //   return toast.error("Favor ingresar número de plazas");
    // }

    nuevaDotacion.id_plaza = dotacionMinimaTemporal.id_plaza;
    nuevaDotacion.cantidad = dotacionMinimaTemporal.cantidad;
    nuevaDotacion.titulos = selectedValueTitulos
      ? selectedValueTitulos.split(", ")
      : null;
    nuevaDotacion.cursos = selectedValueCursos
      ? selectedValueCursos.split(", ")
      : null;
    nuevaDotacion.cargos = selectedValueCargos
      ? selectedValueCargos.split(", ")
      : null;

    console.log(nuevaDotacion);
    setDotacionMinima((dotacionMinima) => [...dotacionMinima, nuevaDotacion]);

    setDotacionMinimaTemporal(initialStateDotacion);
    setTitulosArray([]);
    setCursosArray([]);
    onOpenChange();
  };

  const handleSubmitNave = () => {
    setLoading(true);
    values.dotacion_minima = dotacionMinima;
    values.zona_navegacion = zonaNavegacion;

    if (values.nombre_nave === "") {
      return toast.error("Favor ingresar Nombre de nave");
    } else if (values.tipo_nave === "") {
      return toast.error("Favor ingresar Tipo de nave");
    }

    console.log(values);
    createNave(user.token, values)
      .then((res) => {
        toast.success("Nave creada con exito");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error al crear nave.");
      })
      .finally(() => {
        setDotacionMinimaTemporal(initialStateDotacion);
        setDotacionMinima([]);
        setZonaNavegacion([]);
        setTitulosArray([]);
        setCursosArray([]);
        setCargosArray([]);
        setValues(initialState);
        setLoading(false);
      });
  };

  return (
    <form>
      <DotacionMinimaModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        cargos={cargos}
        plazas={plazas}
        cursos={cursos}
        handleSubmitDotacionMinima={handleSubmitDotacionMinima}
        titulos={titulos}
        handleChangeDotacion={handleChangeDotacion}
        dotacionMinimaTemporal={dotacionMinimaTemporal}
        dotacionMinima={dotacionMinima}
        cursosArray={cursosArray}
        cargosArray={cargosArray}
        setCursosArray={setCursosArray}
        setCargosArray={setCargosArray}
        titulosArray={titulosArray}
        setTitulosArray={setTitulosArray}
        selectedValueCargos={selectedValueCargos}
        selectedValueCursos={selectedValueCursos}
        selectedValueTitulos={selectedValueTitulos}
      />
      <div className="grid grid-cols-4 gap-4 border-2 rounded-md  p-5 ">
        <h3 className=" text-lg capitalize"> Información de la nave</h3>
        <Divider className="col-span-4" />
        <Input
          size="sm"
          variant="bordered"
          label="Nombre Nave"
          value={nombre_nave}
          type="text"
          name="nombre_nave"
          onChange={handleChange}
          labelPlacement="outside"
          placeholder="Escriba nombre de la nave"
          className="col-span-2"
        />

        <Select
          size="sm"
          className="col-span-2"
          variant="bordered"
          label="Tipo nave"
          labelPlacement="outside"
          placeholder="Seleccione tipo de nave"
          value={tipo_nave}
          name="tipo_nave"
          onChange={handleChange}
          items={items_tipo_nave}
        >
          {(item) => (
            <SelectItem key={item.name} value={item.name}>
              {item.name}
            </SelectItem>
          )}
        </Select>
        <Input
          size="sm"
          variant="bordered"
          label="Capacidad de personal a bordo"
          value={capacidad_personal}
          type="number"
          name="capacidad_personal"
          onChange={handleChange}
          labelPlacement="outside"
          placeholder="Capacidad de personal de la nave"
        />
        <Input
          size="sm"
          variant="bordered"
          label="TRG"
          value={trg}
          type="number"
          name="trg"
          onChange={handleChange}
          labelPlacement="outside"
          placeholder="TRG de la nave"
        />
        <Input
          size="sm"
          type="text"
          variant="bordered"
          label="Telefono de la nave"
          value={contacto}
          name="contacto"
          onChange={handleChange}
          labelPlacement="outside"
          placeholder="Número de contacto de la nave"
        />
        <Input
          size="sm"
          type="email"
          variant="bordered"
          label="Correo de la nave"
          value={email}
          name="email"
          onChange={handleChange}
          labelPlacement="outside"
          placeholder="Correo de la nave"
        />
      </div>
      <div className="grid grid-cols-4 mt-5 gap-2">
        <div className="col-span-1 border-2 rounded-md p-5">
          <div className="flex justify-start gap-1">
            <h3 className=" text-lg capitalize"> Zonas de navegación </h3>
            <Tooltip
              placement="right"
              showArrow={true}
              content="Ingresar zonas donde la nave tiene habilitada navegar. "
            >
              <InformationCircleIcon className="h-6 text-slate-500" />
            </Tooltip>
          </div>
          <Divider />
          <div className="mt-3">
            <CheckboxGroup
              orientation="horizontal"
              color="primary"
              value={zonaNavegacion}
              onValueChange={setZonaNavegacion}
            >
              {zonas &&
                zonas.items.map((c) => (
                  <Checkbox key={c._id} value={c._id}>
                    {c.nombre_zona}
                  </Checkbox>
                ))}
            </CheckboxGroup>
          </div>
        </div>
        <div className="col-span-3 border-2 rounded-md p-5">
          <div className="flex justify-start gap-1">
            <h3 className=" text-lg capitalize"> Dotación mínima</h3>
            <Tooltip
              placement="right"
              showArrow={true}
              content="Dotación mínima de plazas que necesita la nave para zarpar."
            >
              <InformationCircleIcon className="h-6 text-slate-500" />
            </Tooltip>
          </div>
          <Divider />

          <div>
            <DotacionMinimaTable
              data={dotacionMinima}
              plazas={plazas}
              titulos={titulos}
              cargos={cargos}
              cursos={cursos}
              setDotacionMinima={setDotacionMinima}
            />
            <Button
              className="w-full bg-foreground mt-2 text-white"
              size="sm"
              onPress={onOpen}
              startContent={<PlusIcon className="h-4" />}
            >
              Agregar plaza
            </Button>
          </div>
        </div>
        <div className="col-span-4">
          <Button
            className="w-full bg-emerald-500 text-white"
            onClick={handleSubmitNave}
            startContent={<ArrowDownOnSquareIcon className="h-6" />}
          >
            Guardar registro
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NaveCreateForm;
