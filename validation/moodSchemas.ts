import * as yup from "yup";

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
