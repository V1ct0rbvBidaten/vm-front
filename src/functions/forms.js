import { toast } from "react-toastify";

export const validateFields = (fields) => {
  const emptyFields = fields.filter((field) => field.value === "");
  if (emptyFields.length > 0) {
    const fieldNames = emptyFields.map((field) => field.name).join(", ");
    toast.error(`Por favor, complete los campos: ${fieldNames}`);
    return false;
  }
  return true;
};
