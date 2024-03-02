import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const About = lazy(() => import("./pages/About"));
const Snapshot = lazy(() => import("./pages/Snapshot"));
const Timeline = lazy(() => import("./pages/Timeline"));
const Page404 = lazy(() => import("./pages/404"));

const CustomRouter = () => {
  return (
    <Routes>
      {/* 메인 */}
      <Route path="/" element={<About />} />
      {/* 스냅샷 */}
      <Route path="/snapshot" element={<Snapshot />} />
      {/* 타임라인 */}
      <Route path="/timeline" element={<Timeline />} />
      {/* 404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default CustomRouter;
