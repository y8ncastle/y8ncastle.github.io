import {
  certificationEip,
  certificationHskFourth,
  certificationHskThird,
  certificationIcdlPython,
  certificationIcdlStart,
  certificationItqOaMaster,
  certificationTaekwondo,
  certificationTeps,
  certificationToeicOne,
  certificationToeicThree,
  certificationToeicTwo,
} from "assets/assetStore";
import { CertificationDataProps } from "interfaces/Certification";

export const ItCertificationData: CertificationDataProps[] = [
  {
    name: `snapshot.certificationDetail.eip`,
    issuer: `snapshot.certificationDetail.hrdk`,
    score: "-",
    acquisitionDate: "2019.11.22",
    image: certificationEip,
  },
  {
    name: "ICDL Professional Computing Python",
    issuer: `snapshot.certificationDetail.kpc`,
    score: "-",
    acquisitionDate: "2019.11.18",
    image: certificationIcdlPython,
  },
  {
    name: "ICDL Start Certificate",
    issuer: `snapshot.certificationDetail.kpc`,
    score: `snapshot.certificationDetail.passFour`,
    acquisitionDate: "2017.02.10",
    image: certificationIcdlStart,
  },
  {
    name: "ITQ OA Master",
    issuer: `snapshot.certificationDetail.kpc`,
    score: `snapshot.certificationDetail.passThree`,
    acquisitionDate: "2013.08.06",
    image: certificationItqOaMaster,
  },
];

export const ForeignCertificationData: CertificationDataProps[] = [
  {
    name: "TOEIC",
    issuer: `snapshot.certificationDetail.toeicAgency`,
    score: "915 / 990",
    acquisitionDate: "2019.07.14",
    expirationDate: "2021.07.14",
    image: certificationToeicThree,
  },
  {
    name: "TEPS",
    issuer: `snapshot.certificationDetail.tepsAgency`,
    score: "608 / 990",
    acquisitionDate: "2017.09.02",
    expirationDate: "2019.09.01",
    image: certificationTeps,
  },
  {
    name: "TOEIC",
    issuer: `snapshot.certificationDetail.toeicAgency`,
    score: "940 / 990",
    acquisitionDate: "2017.03.26",
    expirationDate: "2019.03.26",
    image: certificationToeicTwo,
  },
  {
    name: "TOEIC",
    issuer: `snapshot.certificationDetail.toeicAgency`,
    score: "780 / 990",
    acquisitionDate: "2014.08.09",
    expirationDate: "2016.08.09",
    image: certificationToeicOne,
  },
  {
    name: `snapshot.certificationDetail.hskFourth`,
    issuer: `snapshot.certificationDetail.chineseInstitute`,
    score: "246 / 300",
    acquisitionDate: "2014.03.16",
    expirationDate: "2016.03.15",
    image: certificationHskFourth,
  },
  {
    name: `snapshot.certificationDetail.hskThird`,
    issuer: `snapshot.certificationDetail.chineseInstitute`,
    score: "294 / 300",
    acquisitionDate: "2013.09.07",
    expirationDate: "2015.09.06",
    image: certificationHskThird,
  },
];

export const OtherCertificationData: CertificationDataProps[] = [
  {
    name: `snapshot.certificationDetail.driverLicense`,
    issuer: `snapshot.certificationDetail.seoulPolice`,
    score: "-",
    acquisitionDate: "2013.08.05",
  },
  {
    name: `snapshot.certificationDetail.taekwondo`,
    issuer: `snapshot.certificationDetail.kukkiwon`,
    score: "-",
    acquisitionDate: "2004.12.19",
    image: certificationTaekwondo,
  },
];
