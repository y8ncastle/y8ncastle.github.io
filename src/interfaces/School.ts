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
}
