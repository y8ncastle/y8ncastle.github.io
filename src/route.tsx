import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const About = lazy(() => import("./pages/About"));

const Snapshot = lazy(() => import("./pages/Snapshot"));
const SnapshotProfile = lazy(() => import("./pages/snapshot/Profile"));
const SnapshotSchool = lazy(() => import("./pages/snapshot/School"));
const SnapshotSchoolSogangGrade = lazy(
  () => import("./pages/snapshot/school/SogangGrade")
);

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

      <Route path="/timeline" element={<Timeline />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default CustomRouter;
