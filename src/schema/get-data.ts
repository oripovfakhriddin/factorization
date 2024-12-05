import * as yup from "yup";

const getDataSchema = yup.object().shape({
  number: yup.string().required("Katakni to'dirish shart!"),
});

export default getDataSchema;
