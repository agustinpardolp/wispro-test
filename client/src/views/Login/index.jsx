import { withFormik } from "formik";
import { connect } from "react-redux";
import * as yup from "yup";
import { REGEX } from "../../constants";
import { login } from "../../store/actions/loginActions";
import LoginForm from "./components/Form";
import users from "../../store/actions/loginActions/types";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(REGEX.EMAIL_REGEX_SCHEMA, "Datos faltantes o incorrectos")
    .max(30)
    .required(" "),
  password: yup
    .string()
    .trim()
    .matches(REGEX.NUMERIC_PASSWORD, "Tipo de dato incorrecto")
    .min(6, "Password debe contener al menos 6 caracteres")
    .max(6, "Password debe contener al menos 6 caracteres")
    .required(" "),
  rememberUser: yup.bool(),
});
//formik validations
const Login = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  mapPropsToValues: ({ email, password, rememberUser }) => ({
    email: email || "",
    password: password || "",
    rememberUser: rememberUser || false,
  }),
  handleSubmit: (value, { props, setErrors }) => {
    
    props.login(value).then((res) => {
      let { type } = res;
      if (type === users.LOGIN_USER_SUCCESS) {
          props.history.push(`/users`);
      } else {
        setErrors("ocurrio un error al iniciar sesión");
      }
    });
  },
})(LoginForm);

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
