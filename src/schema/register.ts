import * as yup from "yup";

const registerSchema = yup.object().shape({
  userName: yup.string().required("To'ldirishingiz shart!"),
  password: yup
    .string()
    .min(4, "Parolingiz kamida 4 ta belgidan iborat bo'lishi kerak!")
    .required("To'ldirishingiz shart!"),
  prePassword: yup
    .string()
    .min(4, "Parolingiz kamida 4 ta belgidan iborat bo'lishi kerak!")
    .required("To'ldirishingiz shart!"),
});

export default registerSchema;
