import {
  snapshotAward,
  snapshotCertificate,
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
    // opened: true,
    // link: "/snapshot/profile",
  },
  {
    icon: snapshotSchool,
    title: `snapshot.schoolLife`,
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
    icon: snapshotCertificate,
    title: `snapshot.certificate`,
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
  },
  {
    icon: snapshotHobby,
    title: `snapshot.hobby`,
  },
];
