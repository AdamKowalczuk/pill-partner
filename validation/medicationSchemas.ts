import * as yup from "yup";

export const addMedicationSchema = yup.object().shape({
  medicationName: yup
    .string()
    .required("Nazwa leku jest wymagana")
    .min(2, "Nazwa leku musi mieć przynajmniej 2 znaki"),
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
    .min(1, "Ilość leku na stanie musi być większa niż 0")
    .integer("Ilość leku na stanie musi być liczbą całkowitą"),

  notificationTime: yup
    .array()
    .of(
      yup
        .string()
        .required("Czas powiadomienia jest wymagany")
        .matches(
          /^([0-9]{2}):([0-9]{2})$/,
          "Czas powiadomienia musi być w formacie HH:MM"
        )
    )
    .min(1, "Musisz dodać co najmniej jeden czas powiadomienia")
    .required("Czasy powiadomienia są wymagane"),
});
