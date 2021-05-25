import { withFormik } from "formik";
import * as yup from "yup";
import { REGEX } from "../../../../constants";
import EditUserForm from "./component/Form";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(REGEX.EMAIL_REGEX_SCHEMA, "Datos faltantes o incorrectos")
    .max(30)
    .required(" "),
  name: yup.string().trim().required(" "),
  surname: yup.string().trim().required(" "),
  address: yup.string().trim().required(" "),
  dni: yup.number().required(" "),
});
//formik validations
const EditUser = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  mapPropsToValues: ({ data }) => ({
    email: data.email || "",
    name: data.name || "",
    surname: data.surname || "",
    address: data.address || "",
    dni: data.dni || "",
  }),
  handleSubmit: (value, { props, setErrors }) => {
    const {
      data: { dni },
    } = props;
    props.handleAsyncConfirm(dni, value).then((res) => {
      props.posResponse();
      props.onClose({ type: "hide" });
    });
  },
})(EditUserForm);

export default EditUser;
