import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("username is required")
    .min(3, "username must be min 3 characters"),
  email: yup
    .string()
    .email("must be valid email")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must contain 6 characters"),
  tos: yup.boolean().oneOf([true], "must accept tems of service"),
});

export default formSchema;
