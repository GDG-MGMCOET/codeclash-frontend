import { CLASS_OPTIONS } from "./constant";
import { registerService } from "../service";

export const CLASSES = [
  { value: "", label: "Select Class" },
  ...CLASS_OPTIONS.map((cur_class) => {
    return { value: cur_class, label: cur_class };
  }),
];

export const validatePhone = (rule, value) => {
  const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phoneRegExp.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject("Please enter a valid 10 digit Phone Number");
};

export const formatFormData = ({ data }) => {
  const formattedData = {
    name: `${data.firstName.trim()}${data.lastName?.trim()?.length > 0 ? " " + data.lastName?.trim() : ""}`,
    email: data.email,
    phone: data.phone,
    division: data.division,
    standard: data.standard,
    hackerrank_username: data.hackerrank_username.trim(),
    class_roll_no: data.class_roll_number,
  };
  return formattedData;
};

export const clearForm = ({ formInstance }) => {
  formInstance.setFieldsValue({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    division: "",
    standard: "",
    hackerrank_username: "",
    class_roll_number: "",
  });
};

export const registerParticipant = async ({
  formData,
  showMessage,
  formInstance,
}) => {
  const res = await registerService.register({ formData });
  if (res?.success) {
    clearForm({ formInstance });
    showMessage({
      type: "success",
      content: "Participant registered successfully",
    });
  } else {
    showMessage({
      type: "error",
      content: res?.message
        ? res.message
        : "Error registering, please try again later",
    });
  }
};
