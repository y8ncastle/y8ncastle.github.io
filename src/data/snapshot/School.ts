import {
  hanbatDiploma,
  hanbatEngDiploma,
  schHanbat,
  schSeodaejeon,
  schSogang,
  seodaejeonDiploma,
  sogangDiploma,
  sogangEngDiploma,
} from "assets/assetStore";
import {
  SchoolBannerMenuProps,
  SchoolBannerProps,
  SchoolGradeTableDataProps,
} from "interfaces/School";

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

export const schoolBannerMenuData: SchoolBannerMenuProps[] = [
  {
    key: "Sogang University",
    modalTitle: `snapshot.school.modal.sogangDiploma`,
    image: [
      { src: sogangDiploma, orientation: "vertical" },
      { src: sogangEngDiploma, orientation: "horizontal" },
    ],
    items: [
      {
        name: `snapshot.school.diploma`,
      },
      {
        name: `snapshot.school.grade`,
        link: "/snapshot/school/sogang/grade",
      },
      {
        name: `snapshot.school.tpc`,
      },
      {
        name: `snapshot.school.project`,
      },
      {
        name: `snapshot.school.seminar`,
      },
      {
        name: `snapshot.school.academy`,
      },
      {
        name: `snapshot.school.education`,
      },
      {
        name: `snapshot.school.award`,
      },
    ],
  },
  {
    key: "Hanbat National University",
    modalTitle: `snapshot.school.modal.hanbatDiploma`,
    image: [
      { src: hanbatDiploma, orientation: "vertical" },
      { src: hanbatEngDiploma, orientation: "vertical" },
    ],
    items: [
      {
        name: `snapshot.school.diploma`,
      },
      {
        name: `snapshot.school.grade`,
      },
      {
        name: `snapshot.school.project`,
      },
      {
        name: `snapshot.school.award`,
      },
    ],
  },
  {
    key: "Seodaejeon High School",
    modalTitle: `snapshot.school.modal.seodaejeonDiploma`,
    image: [{ src: seodaejeonDiploma, orientation: "vertical" }],
    items: [
      {
        name: `snapshot.school.diploma`,
      },
      {
        name: `snapshot.school.extActivity`,
      },
      {
        name: `snapshot.school.award`,
      },
    ],
  },
];

export const schoolGradeTableData: SchoolGradeTableDataProps[] = [
  {
    semester: 1,
    name: `snapshot.school.gradeDetail.softwareAdv`,
    type: `snapshot.school.gradeDetail.majorOpt`,
    credits: 3,
    gainedGrade: 4.3,
    stdGrade: 4.3,
  },
  {
    semester: 1,
    name: `snapshot.school.gradeDetail.advComputerArch`,
    type: `snapshot.school.gradeDetail.majorOpt`,
    credits: 3,
    gainedGrade: 3.0,
    stdGrade: 4.3,
  },
  {
    semester: 1,
    name: `snapshot.school.gradeDetail.advIndustrialProject`,
    type: `snapshot.school.gradeDetail.majorOpt`,
    credits: 3,
    gainedGrade: 0.5,
    stdGrade: 4.3,
  },
  {
    semester: 2,
    name: `snapshot.school.gradeDetail.advAlgorithmDesign`,
    type: `snapshot.school.gradeDetail.majorOpt`,
    credits: 3,
    gainedGrade: 3.3,
    stdGrade: 4.3,
  },
  {
    semester: 3,
    name: `snapshot.school.gradeDetail.software`,
    type: `snapshot.school.gradeDetail.majorOpt`,
    credits: 3,
    gainedGrade: 4.3,
    stdGrade: 4.3,
  },
  {
    semester: 3,
    name: `snapshot.school.gradeDetail.metaverse`,
    type: `snapshot.school.gradeDetail.majorOpt`,
    credits: 3,
    gainedGrade: 4.3,
    stdGrade: 4.3,
  },
  {
    semester: 3,
    name: `snapshot.school.gradeDetail.blockchain`,
    type: `snapshot.school.gradeDetail.majorOpt`,
    credits: 3,
    gainedGrade: 4.3,
    stdGrade: 4.3,
  },
  {
    semester: 3,
    name: `snapshot.school.gradeDetail.socialMedia`,
    type: `snapshot.school.gradeDetail.majorOpt`,
    credits: 3,
    gainedGrade: 3.0,
    stdGrade: 4.3,
  },
  {
    semester: 4,
    name: `snapshot.school.gradeDetail.blockchainTheory`,
    type: `snapshot.school.gradeDetail.majorOpt`,
    credits: 3,
    gainedGrade: 4.0,
    stdGrade: 4.3,
  },
  {
    semester: 4,
    name: `snapshot.school.gradeDetail.thesis`,
    type: `snapshot.school.gradeDetail.majorMand`,
    credits: 0,
    gainedGrade: 0.5,
    stdGrade: 4.3,
  },
];
