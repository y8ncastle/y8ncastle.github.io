import {
  snapshotAward,
  snapshotCertification,
  snapshotExternal,
  snapshotForeign,
  snapshotHobby,
  snapshotMilitary,
  snapshotProfile,
  snapshotProject,
  snapshotSchool,
  snapshotTpc,
  snapshotWork,
} from "assets/assetStore";
import { CategoryItemProps } from "interfaces/Snapshot";

export const SnapshotCategoryData: CategoryItemProps[] = [
  {
    icon: snapshotProfile,
    title: `snapshot.detailedProfile`,
    opened: true,
    link: "/snapshot/profile",
  },
  {
    icon: snapshotSchool,
    title: `snapshot.schoolLife`,
    opened: true,
    link: "/snapshot/school",
  },
  {
    icon: snapshotWork,
    title: `about.content.workExp`,
  },
  {
    icon: snapshotProject,
    title: `snapshot.partProject`,
  },
  {
    icon: snapshotCertification,
    title: `snapshot.certification`,
    opened: true,
    link: "/snapshot/certification",
  },
  {
    icon: snapshotAward,
    title: `snapshot.award`,
  },
  {
    icon: snapshotTpc,
    title: `snapshot.tpc`,
  },
  {
    icon: snapshotForeign,
    title: `snapshot.foreignLang`,
  },
  {
    icon: snapshotExternal,
    title: `snapshot.extActivity`,
  },
  {
    icon: snapshotMilitary,
    title: `snapshot.military`,
    opened: true,
    link: "/snapshot/military",
  },
  {
    icon: snapshotHobby,
    title: `snapshot.hobby`,
  },
];
