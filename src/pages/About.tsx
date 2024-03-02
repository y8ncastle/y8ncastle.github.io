import { background } from "assets/assetStore";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="background">
        <video src={background} width={1440} height={800} autoPlay loop muted />
        <p className="title">
          {/* 데이터는 항상 더 나은 아이디어를 가진다 */}
          <span>{t(`about.background.titleAbove`)}</span>
          <br />
          <span>{t(`about.background.titleBelow`)}</span>
        </p>
      </div>
    </main>
  );
};

export default About;
