import { useTranslation } from "react-i18next";

const ContentHeader = ({ title }: { title: string }) => {
  const { t } = useTranslation();

  return (
    <div className="content-header">
      <p>{t(title)}</p>
    </div>
  );
};

export default ContentHeader;
