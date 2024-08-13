import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Nieprawidłowy email').required('Email jest wymagany'),
  password: Yup.string().min(6, 'Hasło musi mieć co najmniej 6 znaków').required('Hasło jest wymagane'),
});