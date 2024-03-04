import { Img } from "components/Image";
import { ProjectProps } from "interfaces/About";
import { useTranslation } from "react-i18next";

const ProjectBox = (props: ProjectProps) => {
  const { t } = useTranslation();

  return (
    <div className="project-box">
      <div className="thumbnail-container">
        <div className="thumbnail">
          <Img src={props.thumbnail} width={350} height={258} />
        </div>
      </div>

      <div className="content">
        <p className="title">{t(props.title)}</p>

        <div className="label-line">
          <div className="label">
            <p>
              {t(`about.project.webCont`)} {props.contRate}%
            </p>
          </div>

          {props.appContRate && (
            <div className="label">
              <p>
                {t(`about.project.appCont`)} {props.appContRate}%
              </p>
            </div>
          )}

          {props.labels &&
            props.labels.map((item) => (
              <div
                key={item.label}
                className="label"
                style={{ backgroundColor: item.color }}
              >
                <p>{item.label}</p>
              </div>
            ))}
        </div>

        <p className="main-cont">
          {t(`about.project.contribution`)}:{" "}
          <span>{t(props.contribution)}</span>
        </p>

        <p className="cont-desc">{t(props.description)}</p>
      </div>
    </div>
  );
};

export default ProjectBox;
