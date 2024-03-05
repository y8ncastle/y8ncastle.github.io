import { Img } from "components/Image";
import { CategoryItemProps } from "interfaces/Snapshot";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CategoryItemBox = (props: CategoryItemProps) => {
  const { t } = useTranslation();
  const route = useNavigate();

  return (
    <a
      className={`category-item-box ${props.opened ? "active" : ""}`}
      href={props.link}
      onClick={(e) => (!props.opened ? e.preventDefault() : route(props.link))}
    >
      <Img src={props.icon} width={60} height={60} />
      <p>{t(props.title)}</p>

      {!props.opened && (
        <div className="not-ready">
          <span>{t(`snapshot.notReady`)}</span>
        </div>
      )}
    </a>
  );
};

export default CategoryItemBox;
