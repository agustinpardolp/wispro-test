import { withFormik } from "formik";
import * as yup from "yup";
import { REGEX } from "../../../../constants";
import EditUserForm from "./component/Form";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(REGEX.EMAIL_REGEX_SCHEMA, "userEdition.emailError")
    .max(30)
    .required(" "),
  name: yup
    .string()
    .trim()
    .matches(REGEX.NAME_REGEX, "userEdition.nameError")
    .required("userEdition.nameRequired"),
  surname: yup
    .string()
    .trim()
    .matches(REGEX.NAME_REGEX, "userEdition.surnameError")
    .required("userEdition.surnameRequired"),
  address: yup.string().trim().required("userEdition.addressRequired"),
  dni: yup
    .string()
    .min(7, "userEdition.dniErrorMinlength")
    .matches(REGEX.DNI_REGEX, "userEdition.dniError")
});

//formik validations
const EditUser = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema:()=> validationSchema,
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
