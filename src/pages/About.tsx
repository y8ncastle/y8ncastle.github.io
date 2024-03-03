import {
  background,
  cvDown,
  profile,
  scrollDown,
  skillOne,
  skillThree,
  skillTwo,
} from "assets/assetStore";
import ImageLinkBox from "components/About/ImageLinkBox";
import SkillBox from "components/About/SkillBox";
import WorkEduBox from "components/About/WorkEduBox";
import { Img } from "components/Image";
import {
  activeSkillData,
  applicableSkillData,
  eduData,
  entrySkillData,
  profileContactData,
  workExpData,
} from "data/About";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="background">
        <Img src={background} width={1440} height={800} />
        <p className="title">
          <span>{t(`about.background.titleAbove`)}</span>
          <br />
          <span>{t(`about.background.titleBelow`)}</span>
        </p>
      </div>

      <div className="scroll-down">
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
              <Img src={cvDown} width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="about">
          <p className="title russo">About</p>
          <div className="sub-title">
            <p>{t(`about.content.contact`)}</p>
          </div>

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

          <div className="sub-title" style={{ marginTop: 68 }}>
            <p>{t(`about.content.workExp`)}</p>
          </div>

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

          <div className="sub-title" style={{ marginTop: 92 }}>
            <p>{t(`about.content.education`)}</p>
            <a href="/snapshot">{t(`about.content.more`)}</a>
          </div>

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

        <div className="skill">
          <p className="title russo">Skill</p>

          <p className="sub-title" style={{ marginTop: 68 }}>
            <span>
              <Img src={skillOne} width={24} height={24} />
            </span>
            {t(`about.skill.active`)}
          </p>

          <div className="skill-group">
            {activeSkillData &&
              activeSkillData.map((item) => (
                <SkillBox
                  key={item.name}
                  icon={item.icon}
                  name={item.name}
                  period={item.period}
                />
              ))}
          </div>

          <p className="sub-title" style={{ marginTop: 112 }}>
            <span>
              <Img src={skillTwo} width={24} height={24} />
            </span>
            {t(`about.skill.applicable`)}
          </p>

          <div className="skill-group">
            {applicableSkillData &&
              applicableSkillData.map((item) => (
                <SkillBox
                  key={item.name}
                  icon={item.icon}
                  name={item.name}
                  period={item.period}
                />
              ))}
          </div>

          <p className="sub-title" style={{ marginTop: 112 }}>
            <span>
              <Img src={skillThree} width={24} height={24} />
            </span>
            {t(`about.skill.entry`)}
          </p>

          <div className="skill-group">
            {entrySkillData &&
              entrySkillData.map((item) => (
                <SkillBox
                  key={item.name}
                  icon={item.icon}
                  name={item.name}
                  period={item.period}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
