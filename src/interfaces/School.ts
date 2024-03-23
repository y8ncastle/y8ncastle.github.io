import { ModalDataImageProps } from "./common/modal";

export interface SchoolBannerProps {
  name: string;
  engName: string;
  image: string;
  backgroundColor: string;
  hoverColor: string;
  link?: string;
}

export interface SchoolBannerMenuItemProps {
  name: string;
  link?: string;
}

export interface SchoolBannerMenuProps {
  key: string;
  items: SchoolBannerMenuItemProps[];
  modalTitle: string;
  image?: ModalDataImageProps[];
}

export interface SchoolGradeTableDataProps {
  semester: number;
  name: string;
  type: string;
  credits: number;
  gainedGrade: number;
  stdGrade: number;
}

export interface SchoolGradeDataProps {
  items: SchoolGradeTableDataProps[];
}
