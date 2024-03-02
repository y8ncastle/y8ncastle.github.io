import { background, cvDown, profile, scrollDown } from "assets/assetStore";
import { Img } from "components/Image";
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

      <div className="scroll-down">
        {/* 아래로 내리며 살펴보기 */}
        <p>{t(`about.scrollDown`)}</p>
        <Img src={scrollDown} width={24} height={24} />
      </div>

      <section>
        <div className="profile">
          <div className="left-side">
            <p>{t(`about.profile.role`)}</p>
            <p className="russo">Alec J</p>
            <p>
              {t(`about.profile.introPrev`)}
              <span>{t(`about.profile.name`)}</span>
              {t(`about.profile.introNext`)}
            </p>
          </div>

          <div className="right-side">
            <Img src={profile} width={505} height={612} />

            <span className="str1">Frontend</span>
            <span className="str2">Blockchain</span>
            <span className="str3">Music</span>
            <span className="str4">INFJ</span>

            <div className="cv-box">
              <span>CV</span>
              <Img src={cvDown} width={28} height={28} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
