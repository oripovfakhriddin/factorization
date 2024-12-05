import * as yup from "yup";
import getDataSchema from "../schema/get-data";

type GetDataFormValues = yup.InferType<typeof getDataSchema>;

export default GetDataFormValues;
