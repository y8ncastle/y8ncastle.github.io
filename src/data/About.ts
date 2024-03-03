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
    companyName: `about.content.noncelab`,
    link: "https://www.noncelab.com",
    description: `about.content.noncelabDesc`,
  },
];
