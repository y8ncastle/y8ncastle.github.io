import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const About = lazy(() => import("./pages/About"));

const Snapshot = lazy(() => import("./pages/Snapshot"));
const SnapshotProfile = lazy(() => import("./pages/snapshot/Profile"));

const SnapshotSchool = lazy(() => import("./pages/snapshot/School"));
const SnapshotSchoolSogangGrade = lazy(
  () => import("./pages/snapshot/school/SogangGrade")
);
const SnapshotSchoolHanbatGrade = lazy(
  () => import("./pages/snapshot/school/HanbatGrade")
);
const SnapshotCertification = lazy(
  () => import("./pages/snapshot/Certification")
);
const SnapshotMilitary = lazy(() => import("./pages/snapshot/Military"));

const Timeline = lazy(() => import("./pages/Timeline"));

const Page404 = lazy(() => import("./pages/404"));

const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />

      <Route path="/snapshot" element={<Snapshot />} />
      <Route path="/snapshot/profile" element={<SnapshotProfile />} />
      <Route path="/snapshot/school" element={<SnapshotSchool />} />
      <Route
        path="/snapshot/school/sogang/grade"
        element={<SnapshotSchoolSogangGrade />}
      />
      <Route
        path="/snapshot/school/hanbat/grade"
        element={<SnapshotSchoolHanbatGrade />}
      />
      <Route
        path="/snapshot/certification"
        element={<SnapshotCertification />}
      />
      <Route path="/snapshot/military" element={<SnapshotMilitary />} />

      <Route path="/timeline" element={<Timeline />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default CustomRouter;
