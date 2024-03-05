import { useTranslation } from "react-i18next";

const Timeline = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section className="timeline-container">
        <p>{t(`temp.preparing`)}</p>
      </section>
    </main>
  );
};

export default Timeline;
