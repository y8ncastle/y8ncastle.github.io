import { schHanbat, schSeodaejeon, schSogang } from "assets/assetStore";
import { SchoolBannerProps } from "interfaces/School";

export const schoolBannerData: SchoolBannerProps[] = [
  {
    name: "서강대학교",
    engName: "Sogang University",
    image: schSogang,
    backgroundColor: "#b21f23",
    hoverColor: "#c72428",
  },
  {
    name: "한밭대학교",
    engName: "Hanbat National University",
    image: schHanbat,
    backgroundColor: "#306b9c",
    hoverColor: "#397bb3",
  },
  {
    name: "서대전고등학교",
    engName: "Seodaejeon High School",
    image: schSeodaejeon,
    backgroundColor: "#30474f",
    hoverColor: "#38525b",
  },
];
