import useGlobalStore from "Store";
import { Img } from "components/Image";
import { schoolBannerMenuData } from "data/snapshot/School";
import { SchoolBannerProps } from "interfaces/School";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

const SchoolBanner = (props: SchoolBannerProps) => {
  const { t } = useTranslation();
  const setCurrentModal = useGlobalStore((state) => state.setCurrentModal);
  const setModalData = useGlobalStore((state) => state.setModalData);

  const [currentHover, setCurrentHover] = useState<string>("");
  const isHover = currentHover === props.engName;

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    alert(t(`temp.preparing`));
  };

  return (
    <div
      className="school-banner"
      onMouseOver={() => setCurrentHover(props.engName)}
      onMouseLeave={() => setCurrentHover("")}
      style={{
        backgroundColor: isHover ? props.hoverColor : props.backgroundColor,
        boxShadow: isHover ? `0px 8px 40px rgba(0, 0, 0, 0.25)` : "",
        marginBottom: isHover ? 68 : 0,
      }}
    >
      <Img
        src={props?.image}
        width={645}
        height={220}
        style={{
          opacity: isHover ? 1 : 0.1,
        }}
      />

      <p>
        <span>{props.name}</span>
        <span>{props.engName}</span>
      </p>

      {isHover && (
        <div
          className="school-banner-menu"
          style={{
            backgroundColor: isHover ? props.backgroundColor : "transparent",
          }}
        >
          {schoolBannerMenuData &&
            schoolBannerMenuData
              .find((item) => item.key === props.engName)
              .items.map((item2, index) => (
                <Fragment key={item2.name}>
                  {index === 0 ? (
                    <button
                      onClick={() => {
                        const item = schoolBannerMenuData.find(
                          (item) => item.key === props.engName
                        );

                        console.log(item);

                        setModalData({
                          title: item.modalTitle,
                          image: item.image,
                        });
                        setCurrentModal("schoolDiploma", true);
                      }}
                    >
                      {t(item2.name)}
                    </button>
                  ) : (
                    <a
                      href={item2.link ? item2.link : ""}
                      onClick={(e) => handleLink(e)}
                    >
                      {t(item2.name)}
                    </a>
                  )}
                </Fragment>
              ))}
        </div>
      )}
    </div>
  );
};

export default SchoolBanner;
