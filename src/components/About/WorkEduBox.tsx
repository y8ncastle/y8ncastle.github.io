import { aboutQuestion, iconLink } from "assets/assetStore";
import { Img } from "components/Image";
import { WorkEduProps } from "interfaces/About";
import { useTranslation } from "react-i18next";

const WorkEduBox = (props: WorkEduProps) => {
  const { t } = useTranslation();

  return (
    <div className="work-edu-box">
      <div className="date-line">
        <p>
          {props.startDate} ~ {t(props.endDate)}
        </p>

        {props.tooltip && (
          <div className="tooltip">
            <Img src={aboutQuestion} width={14} height={14} />

            <div className="tooltip-desc">
              <div className="tooltip-container">
                <p>{t(props.tooltip)}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="name">
        {t(props.name)}

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

export default WorkEduBox;
