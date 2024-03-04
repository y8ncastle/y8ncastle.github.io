import { iconLink } from "assets/assetStore";
import { Img } from "components/Image";
import { AboutProfileProps } from "interfaces/About";
import i18n from "locales/i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { calculateAge } from "utils/calculation";

const ImageLinkBox = (props: AboutProfileProps) => {
  const { t } = useTranslation();

  return (
    <div className="link-box">
      <figure>
        <Img src={props.icon} width={24} height={24} />
      </figure>

      <span>{props.content}</span>

      {props.noBoldContent && (
        <span className="no-bold">
          {props.noBoldContent === "excp1"
            ? `(${t(`about.content.agePrev`)}${calculateAge()}${i18n.t(
                `about.content.ageNext`
              )})`
            : `(${t(props.noBoldContent)})`}
        </span>
      )}

      {props.link && (
        <Link to={props.link} target="_blank">
          <Img src={iconLink} width={16} height={16} />
        </Link>
      )}
    </div>
  );
};

export default ImageLinkBox;
