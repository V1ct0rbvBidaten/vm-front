import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMaletines from "../../../../hooks/useMaletines";
import { updateMaletin } from "../../../../api/maletin";
import { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  page: 1,
  page_size: 10,
};

const initialStateMaletin = {
  es_activo: true,
  productos_ids: [],
};

const ModalMaletin = ({ open, handleOpen }) => {
  const { idProducto } = useParams();

  const [producto, setProducto] = useState(initialStateMaletin);
  const user = useSelector((state) => state.user);

  const { data, loading } = useMaletines(user.token, initialState);

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );
  }

  const id_maletin = data.detail.data.maletines[0].maletin.id_maletin;

  const handleUpdateMaletin = () => {
    console.log("Maletin actualizado");
    producto.productos_ids.push(idProducto);
    updateMaletin(user.token, producto, id_maletin)
      .then((res) => {
        console.log(res);
        toast.success("Producto agregado al maletín");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error al agregar producto al maletín");
      })
      .finally(() => {
        handleOpen();
      });
  };

  return (
    <Modal isOpen={open} onOpenChange={handleOpen}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <h1>¿Desea agregar este producto a su maletín?</h1>
            </ModalHeader>

            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button
                className="bg-emerald-500 text-white"
                onClick={handleUpdateMaletin}
              >
                Confirmar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalMaletin;
