import * as yup from "yup";
import { passwordRegex } from "./regex";
const registerSchema = yup.object().shape({
  username: yup.string().required("username is required").min(8),
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required").matches(passwordRegex,'password is not valid'),
  confirmPassword: yup
    .string()
    .required("confirm your password")
    .oneOf([yup.ref("password"), null], "password is not same"),
});
const loginSchema = yup.object().shape({
  username: yup.string().required("username is required").min(8),

  password: yup.string().required("password is required"),
});

export { registerSchema, loginSchema };
