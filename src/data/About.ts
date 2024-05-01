import {
  aboutBirthday,
  aboutCode,
  aboutDBpia,
  aboutGithub,
  aboutInsta,
  aboutKakao,
  aboutLinkedIn,
  aboutMail,
  projectBim,
  projectDte,
  projectGangwon,
  projectKomsco,
  projectPow,
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
import {
  AboutProfileProps,
  ProjectProps,
  SkillProps,
  WorkEduProps,
} from "interfaces/About";

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
    link: "https://www.github.com/y8ncastle",
  },
  {
    icon: aboutKakao,
    content: "Kakaotalk",
    link: "https://open.kakao.com/o/sriKqcpg",
  },
  {
    icon: aboutInsta,
    content: "Instagram",
    link: "https://www.instagram.com/y8ncastle.dev",
  },
  {
    icon: aboutLinkedIn,
    content: "LinkedIn",
    link: "https://www.linkedin.com/in/y8ncastle",
  },
  // {
  //   icon: aboutDBpia,
  //   content: "DBpia",
  //   link: "https://www.dbpia.co.kr/author/authorDetail?ancId=5114939",
  // },
  // {
  //   icon: aboutCode,
  //   content: "Baekjoon Online Judge",
  //   link: "https://www.acmicpc.net/user/zarch4894",
  // },
];

export const workExpData: WorkEduProps[] = [
  {
    startDate: "2022.12",
    endDate: "2024.04",
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
    period: "2021 ~ 2023",
  },
  {
    icon: skillNextjs,
    name: "Next.js",
    period: "2023",
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
    period: "2020 ~ 2024",
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
    period: "2022 ~ 2024",
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
    period: "2022 ~ 2024",
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

export const projectData: ProjectProps[] = [
  {
    thumbnail: projectPow,
    title: `about.project.pow`,
    contRate: 70,
    labels: [
      {
        label: "Next.js",
        color: "#8b9cdb",
      },
      {
        label: "TypeScript",
        color: "#8b9cdb",
      },
      {
        label: "PWA",
        color: "#b081cd",
      },
      {
        label: "SEO",
        color: "#b081cd",
      },
      {
        label: "Figma",
        color: "#cd8181",
      },
    ],
    contribution: `about.project.cont1`,
    description: `about.project.cont1Desc`,
  },
  {
    thumbnail: projectKomsco,
    title: `about.project.komsco`,
    contRate: 90,
    labels: [
      {
        label: "React",
        color: "#8b9cdb",
      },
      {
        label: "TypeScript",
        color: "#8b9cdb",
      },
      {
        label: "Figma",
        color: "#cd8181",
      },
    ],
    contribution: `about.project.cont2`,
    description: `about.project.cont2Desc`,
  },
  {
    thumbnail: projectGangwon,
    title: `about.project.gangwon`,
    contRate: 90,
    appContRate: 40,
    labels: [
      {
        label: "React",
        color: "#8b9cdb",
      },
      {
        label: "React Native",
        color: "#8b9cdb",
      },
      {
        label: "TypeScript",
        color: "#8b9cdb",
      },
      {
        label: "Solidity",
        color: "#68b997",
      },
      {
        label: "Figma",
        color: "#cd8181",
      },
    ],
    contribution: `about.project.cont3`,
    description: `about.project.cont3Desc`,
  },
  {
    thumbnail: projectDte,
    title: `about.project.dte`,
    contRate: 100,
    labels: [
      {
        label: "React",
        color: "#8b9cdb",
      },
      {
        label: "JavaScript",
        color: "#8b9cdb",
      },
      {
        label: "Solidity",
        color: "#68b997",
      },
      {
        label: "Design",
        color: "#cd8181",
      },
    ],
    contribution: `about.project.cont4`,
    description: `about.project.cont4Desc`,
  },
  {
    thumbnail: projectBim,
    title: `about.project.bim`,
    contRate: 95,
    labels: [
      {
        label: "React",
        color: "#8b9cdb",
      },
      {
        label: "JavaScript",
        color: "#8b9cdb",
      },
      {
        label: "Solidity",
        color: "#68b997",
      },
      {
        label: "Design",
        color: "#cd8181",
      },
    ],
    contribution: `about.project.cont5`,
    description: `about.project.cont5Desc`,
  },
];
