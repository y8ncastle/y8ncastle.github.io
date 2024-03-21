import { Img } from "components/Image";
import { SchoolBannerProps } from "interfaces/School";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SchoolBanner = (props: SchoolBannerProps) => {
  const { t } = useTranslation();
  const [currentHover, setCurrentHover] = useState<string>("");

  const handleNoLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    alert(t(`temp.preparing`));
  };

  return (
    <a
      href={props.link ? props.link : ""}
      className="school-banner"
      onMouseOver={() => setCurrentHover(props.engName)}
      onMouseLeave={() => setCurrentHover("")}
      onClick={(e) => (props.link ? "" : handleNoLink(e))}
      style={{
        backgroundColor:
          currentHover === props.engName
            ? props.hoverColor
            : props.backgroundColor,
        boxShadow:
          currentHover === props.engName
            ? `0px 8px 40px rgba(0, 0, 0, 0.25)`
            : "",
      }}
    >
      <Img
        src={props.image}
        width={645}
        height={220}
        style={{
          opacity: currentHover === props.engName ? 1 : 0.1,
        }}
      />

      <p>
        <span>{props.name}</span>
        <span>{props.engName}</span>
      </p>
    </a>
  );
};

export default SchoolBanner;
