export interface ModalDataImageProps {
  src: string;
  orientation: string;
}

export interface ModalDataProps {
  title?: string;
  image?: ModalDataImageProps[];
}
