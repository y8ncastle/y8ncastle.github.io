import {
  aboutBOJ,
  aboutBirthday,
  aboutDBpia,
  aboutGithub,
  aboutMail,
  skillAndroid,
  skillAwsEc2,
  skillAwsS3,
  skillBesu,
  skillCss,
  skillEthereum,
  skillFigma,
  skillGanache,
  skillGit,
  skillHtml,
  skillIpfs,
  skillJava,
  skillJavascript,
  skillJquery,
  skillKlaytn,
  skillMariaDb,
  skillNextjs,
  skillNodejs,
  skillPython,
  skillR,
  skillReact,
  skillSolidity,
  skillTypescript,
} from "assets/assetStore";
import { AboutProfileProps, SkillProps, WorkEduProps } from "interfaces/About";

export const profileContactData: AboutProfileProps[] = [
  {
    icon: aboutBirthday,
    content: "1994.09.30",
    noBoldContent: `excp1`,
  },
  {
    icon: aboutMail,
    content: "yuon1233@gmail.com",
  },
  {
    icon: aboutMail,
    content: "zarch4894@naver.com",
  },
  {
    icon: aboutMail,
    content: "y8ncastle@kakao.com",
  },
  {
    icon: aboutGithub,
    content: "@y8ncastle",
    noBoldContent: `about.content.personal`,
    link: "https://www.github.com/y8ncastle",
  },
  {
    icon: aboutGithub,
    content: "@alec-nl",
    noBoldContent: `about.content.work`,
    link: "https://www.github.com/alec-nl",
  },
  {
    icon: aboutDBpia,
    content: "DBpia",
    link: "https://www.dbpia.co.kr/author/authorDetail?ancId=5114939",
  },
  {
    icon: aboutBOJ,
    content: "Baekjoon Online Judge",
    link: "https://www.acmicpc.net/user/zarch4894",
  },
];

export const workExpData: WorkEduProps[] = [
  {
    startDate: "2022.12",
    endDate: `about.content.current`,
    name: `about.content.noncelab`,
    link: "https://www.noncelab.com",
    description: `about.content.noncelabDesc`,
  },
];

export const eduData: WorkEduProps[] = [
  {
    startDate: "2020.03",
    endDate: "2022.12",
    name: `about.content.sogang`,
    link: "https://baselab.sogang.ac.kr",
    tooltip: `about.content.reasonNext`,
    description: `about.content.sogangDesc`,
  },
  {
    startDate: "2013.03",
    endDate: "2019.12",
    name: `about.content.hbnu`,
    tooltip: `about.content.reasonPrev`,
    description: `about.content.hbnuDesc`,
  },
  {
    startDate: "2010.03",
    endDate: "2012.12",
    name: `about.content.seodaejeon`,
    description: `about.content.seodaejeonDesc`,
  },
];

export const activeSkillData: SkillProps[] = [
  {
    icon: skillHtml,
    name: "HTML",
    period: "2020 ~",
  },
  {
    icon: skillCss,
    name: "CSS",
    period: "2021 ~",
  },
  {
    icon: skillJavascript,
    name: "JavaScript",
    period: "2020 ~",
  },
  {
    icon: skillTypescript,
    name: "TypeScript",
    period: "2022 ~",
  },
  {
    icon: skillReact,
    name: "React",
    period: "2021 ~",
  },
  {
    icon: skillReact,
    name: "React Native",
    period: "2021 ~",
  },
  {
    icon: skillNextjs,
    name: "Next.js",
    period: "2023 ~",
  },
  {
    icon: skillGit,
    name: "Git",
    period: "2018 ~",
  },
];

export const applicableSkillData: SkillProps[] = [
  {
    icon: skillSolidity,
    name: "Solidity",
    period: "2020 ~ 2023",
  },
  {
    icon: skillEthereum,
    name: "Go Ethereum",
    period: "2020 ~ 2021",
  },
  {
    icon: skillIpfs,
    name: "IPFS",
    period: "2021 ~ 2022",
  },
  {
    icon: skillGanache,
    name: "Ganache",
    period: "2022",
  },
  {
    icon: skillBesu,
    name: "Besu",
    period: "2022",
  },
  {
    icon: skillKlaytn,
    name: "Klaytn SC",
    period: "2021 ~ 2022",
  },
  {
    icon: skillNodejs,
    name: "Node.js",
    period: "2022",
  },
  {
    icon: skillFigma,
    name: "Figma",
    period: "2023 ~",
  },
];

export const entrySkillData: SkillProps[] = [
  {
    icon: skillAwsS3,
    name: "AWS S3",
    period: "2022",
  },
  {
    icon: skillAwsEc2,
    name: "AWS EC2",
    period: "2022",
  },
  {
    icon: skillJava,
    name: "Java",
    period: "2018 ~ 2019",
  },
  {
    icon: skillAndroid,
    name: "Android Java",
    period: "2018 ~ 2019",
  },
  {
    icon: skillPython,
    name: "Python",
    period: "2021",
  },
  {
    icon: skillR,
    name: "R",
    period: "2017 ~ 2019",
  },
  {
    icon: skillJquery,
    name: "jQuery",
    period: "2024",
  },
  {
    icon: skillMariaDb,
    name: "MariaDB",
    period: "2024",
  },
];
