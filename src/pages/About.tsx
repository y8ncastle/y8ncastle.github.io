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
import ProjectBox from "components/About/ProjectBox";
import SkillBox from "components/About/SkillBox";
import WorkEduBox from "components/About/WorkEduBox";
import FabButton from "components/FabButton";
import { Img } from "components/Image";
import {
  activeSkillData,
  applicableSkillData,
  eduData,
  entrySkillData,
  profileContactData,
  projectData,
  workExpData,
} from "data/About";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [fabVisible, setFabVisible] = useState<boolean>(false);
  const [currentTitleAbove, setCurrentTitleAbove] = useState<string>(
    `about.background.titleAbove`
  );
  const [currentTitleBelow, setCurrentTitleBelow] = useState<string>(
    `about.background.titleBelow`
  );
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 900) setFabVisible(true);
      else setFabVisible(false);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTitleAbove === "about.background.titleAbove") {
        setCurrentTitleAbove("about.background.titleAbove2");
        setCurrentTitleBelow("about.background.titleBelow2");
      } else {
        setCurrentTitleAbove("about.background.titleAbove");
        setCurrentTitleBelow("about.background.titleBelow");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentTitleAbove]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <div className="background">
        <Img src={background} width={1440} height={800} />
        <p className="title fade-in-out">
          <span>{t(currentTitleAbove)}</span>
          <br />
          <span>{t(currentTitleBelow)}</span>
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
            <a href="/snapshot">{t(`about.more`)}</a>
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

        <div className="project">
          <p className="title russo">Project</p>

          <div className="description">
            <p>{t(`about.project.recent`)}</p>
            <a href="/snapshot">{t(`about.more`)}</a>
          </div>

          <div className="project-group">
            {projectData &&
              projectData.map((item) => (
                <ProjectBox
                  key={item.title}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  contRate={item.contRate}
                  appContRate={item.appContRate}
                  labels={item.labels}
                  contribution={item.contribution}
                  description={item.description}
                />
              ))}
          </div>
        </div>

        <div className="footer">
          <p>
            {t(`about.footer.moreInfoPrev`)}{" "}
            <a href="/snapshot">{t(`header.snapshot`)}</a>{" "}
            {t(`about.footer.moreInfoNext`)}
          </p>

          <p>{t(`about.footer.visiting`)}</p>

          <p>Designed and Developed by Alec J</p>
          <p>© 2024 Alec J Portfolio. All rights are reserved.</p>
        </div>
      </section>

      {fabVisible && <FabButton onClick={handleScrollToTop} />}
    </main>
  );
};

export default About;
