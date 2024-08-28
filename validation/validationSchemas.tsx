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

export const addMedicationSchema = yup.object().shape({
  medicationName: yup
    .string()
    .required("Nazwa leku jest wymagana")
    .min(2, "Nazwa leku musi mieć przynajmniej 2 znaki"),

  usageDescription: yup.string(),
  dosageAmount: yup
    .number()
    .required("Ilość leku jest wymagana")
    .min(1, "Ilość leku musi być przynajmniej 1")
    .integer("Ilość leku musi być liczbą całkowitą"),

  medicationType: yup.string().required("Typ leku jest wymagany"),

  duration: yup
    .number()
    .required("Czas trwania leczenia jest wymagany")
    .min(1, "Czas trwania leczenia musi być przynajmniej 1 dzień")
    .integer("Czas trwania leczenia musi być liczbą całkowitą"),

  stockAmount: yup
    .number()
    .required("Ilość leku na stanie jest wymagana")
    .min(1, "Ilość leku na stanie musi być przynajmniej 1")
    .integer("Ilość leku na stanie musi być liczbą całkowitą"),

  notificationTime: yup
    .string()
    .required("Czas powiadomienia jest wymagany")
    .matches(
      /^([0-9]{2}):([0-9]{2})$/,
      "Czas powiadomienia musi być w formacie HH:MM"
    ),
});

export const moodSchema = yup.object().shape({
  moodRating: yup
    .number()
    .required("Musisz wybrać ocenę nastroju")
    .min(1, "Minimalna ocena to 1")
    .max(5, "Maksymalna ocena to 5"),

  moodFactors: yup
    .array()
    .of(yup.string())
    .min(1, "Wybierz przynajmniej jedną opcję wpływającą na Twój nastrój")
    .required("Musisz wybrać przynajmniej jedną opcję"),

  additionalComments: yup
    .string()
    .max(500, "Komentarz może mieć maksymalnie 500 znaków"),
});
