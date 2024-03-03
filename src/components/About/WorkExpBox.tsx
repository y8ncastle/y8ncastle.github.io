import { iconLink } from "assets/assetStore";
import { Img } from "components/Image";
import { WorkExpProps } from "interfaces/About";
import { useTranslation } from "react-i18next";

const WorkExpBox = (props: WorkExpProps) => {
  const { t } = useTranslation();

  return (
    <div className="work-exp-box">
      <p>
        {props.startDate} ~ {t(props.endDate)}
      </p>

      <p className="company">
        {t(props.companyName)}
        {props.link && (
          <a href={props.link} target="_blank">
            <Img src={iconLink} width={16} height={16} />
          </a>
        )}
      </p>
      <p className="description">{t(props.description)}</p>
    </div>
  );
};

export default WorkExpBox;
