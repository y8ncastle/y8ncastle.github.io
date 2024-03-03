import { background, cvDown, profile, scrollDown } from "assets/assetStore";
import ImageLinkBox from "components/About/ImageLinkBox";
import WorkEduBox from "components/About/WorkEduBox";
import { Img } from "components/Image";
import { eduData, profileContactData, workExpData } from "data/About";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="background">
        <Img src={background} width={1440} height={800} />
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
            {/* 프론트엔드 및 블록체인 서비스 개발자 */}
            <p>{t(`about.profile.role`)}</p>
            <p className="russo">Alec J</p>
            <p>
              {/* 소개 내용 */}
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
              <Img src={cvDown} width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="about">
          <p className="title russo">About</p>
          {/* 프로필 및 연락처 */}
          <p className="sub-title">{t(`about.content.contact`)}</p>

          <div className="link-box-group">
            {profileContactData &&
              profileContactData.map((item) => (
                <ImageLinkBox
                  key={item.content}
                  icon={item.icon}
                  content={item.content}
                  noBoldContent={item.noBoldContent}
                  link={item.link ? item.link : null}
                />
              ))}
          </div>

          <p className="sub-title" style={{ marginTop: 68 }}>
            {/* 업무 경력 */}
            {t(`about.content.workExp`)}
          </p>

          <div className="work-exp-group">
            {workExpData &&
              workExpData.map((item) => (
                <WorkEduBox
                  key={item.name}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  name={item.name}
                  link={item.link}
                  description={item.description}
                />
              ))}
          </div>

          <p className="sub-title" style={{ marginTop: 92 }}>
            {t(`about.content.education`)}
          </p>

          <div className="work-exp-group">
            {eduData &&
              eduData.map((item) => (
                <WorkEduBox
                  key={item.name}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  name={item.name}
                  link={item.link}
                  tooltip={item.tooltip}
                  description={item.description}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
