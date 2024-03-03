import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const About = lazy(() => import("./pages/About"));
const Snapshot = lazy(() => import("./pages/Snapshot"));
const Timeline = lazy(() => import("./pages/Timeline"));
const Page404 = lazy(() => import("./pages/404"));

const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/snapshot" element={<Snapshot />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default CustomRouter;
