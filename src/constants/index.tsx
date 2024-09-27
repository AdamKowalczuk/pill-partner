import SmilingFaceWithSmilingEyesIcon from "@/src/assets/icons/smiling-face-with-smiling-eyes-icon.svg";
import SmilingFaceWithOpenFaceIcon from "@/src/assets/icons/smiling-face-with-open-mouth-and-smiling-eyes-icon.svg";
import NeutralFaceIcon from "@/src/assets/icons/neutral-face-icon.svg";
import CryingFace from "@/src/assets/icons/crying-face-icon.svg";
import WhiteFrowingFaceIcon from "@/src/assets/icons/white-frowning-face-icon.svg";
import { colors } from "@/styles/colors";

export const moodTagsOptions = [
  "Praca",
  "Przyjaciele",
  "Rodzina",
  "Hobby",
  "Finanse",
  "Sen",
  "Alkohol",
  "Jedzenie",
  "Związek",
  "Edukacja",
  "Pogoda",
  "Podróż",
  "Muzyka",
  "Zdrowie",
  "Sport",
];

export const emojiIcons = [
  {
    id: 5,
    icon: SmilingFaceWithOpenFaceIcon,
    primaryColor: colors.green700,
    secondaryColor: colors.green200,
  },
  {
    id: 4,
    icon: SmilingFaceWithSmilingEyesIcon,
    primaryColor: colors.lime700,
    secondaryColor: colors.lime200,
  },
  {
    id: 3,
    icon: NeutralFaceIcon,
    primaryColor: colors.yellow700,
    secondaryColor: colors.yellow200,
  },
  {
    id: 2,
    icon: WhiteFrowingFaceIcon,
    primaryColor: colors.orange700,
    secondaryColor: colors.orange200,
  },
  {
    id: 1,
    icon: CryingFace,
    primaryColor: colors.error700,
    secondaryColor: colors.error200,
  },
];
