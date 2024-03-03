import {
  aboutBOJ,
  aboutBirthday,
  aboutDBpia,
  aboutGithub,
  aboutMail,
} from "assets/assetStore";
import { AboutProfileProps } from "interfaces/About";

export const profileContactData: AboutProfileProps[] = [
  {
    icon: aboutBirthday,
    content: "1994.09.30",
    noBoldContent: `excp1`, // 만 OO세
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
    noBoldContent: `about.content.personal`, // 개인
    link: "https://www.github.com/y8ncastle",
  },
  {
    icon: aboutGithub,
    content: "@alec-nl",
    noBoldContent: `about.content.work`, // 업무
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

export const workExpData = [
  {
    startDate: "2022.12",
    endDate: `about.content.current`,
    name: `about.content.noncelab`,
    link: "https://www.noncelab.com",
    description: `about.content.noncelabDesc`,
  },
];

export const eduData = [
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
