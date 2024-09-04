import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Podaj poprawny adres email")
    .required("Email jest wymagany"),
  password: yup
    .string()
    .min(6, "Hasło musi mieć co najmniej 6 znaków")
    .required("Hasło jest wymagane"),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Podaj poprawny adres email")
    .required("Email jest wymagany"),
  password: yup
    .string()
    .min(8, "Hasło musi mieć co najmniej 8 znaków")
    .required("Hasło jest wymagane"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Hasła muszą być takie same")
    .required("Potwierdzenie hasła jest wymagane"),
});

export const passwordResetSchema = yup.object().shape({
  email: yup
    .string()
    .email("Podaj poprawny adres email")
    .required("Email jest wymagany"),
});

export const newPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Hasło musi mieć co najmniej 8 znaków")
    .required("Hasło jest wymagane"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Hasła muszą być takie same")
    .required("Potwierdzenie hasła jest wymagane"),
});
