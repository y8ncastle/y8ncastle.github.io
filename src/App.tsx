import ScrollToTop from "ScrollToTop";
import useGlobalStore from "Store";
import { loading } from "assets/assetStore";
import Header from "components/Header";
import { Img } from "components/Image";
import Modal from "components/Modal";
import "locales/i18n";
import i18n from "locales/i18n";
import { Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "route";
import "./App.css";
import RouteCheckerForGA from "utils/RouteCheckerForGA";

const App = () => {
  const { t } = useTranslation();
  const setCurrentLang = useGlobalStore((state) => state.setCurrentLang);
  const tempDisplayAvailable = useGlobalStore(
    (state) => state.tempDisplayAvailable
  );

  const [clientWidth, setClientWidth] = useState<number>(window.innerWidth);
  const [clientHeight, setClientHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setClientHeight(window.innerHeight);
      setClientWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang === "ko" || savedLang === "en") setCurrentLang(savedLang);
    else setCurrentLang("ko");

    i18n.changeLanguage(savedLang);
  }, []);

  // 우클릭 방지 제어
  useEffect(() => {
    document.oncontextmenu = function () {
      return false;
    };
  }, []);

  // ################################################
  // 모바일 영역 구현 전 임시 시작
  const setTempDisplayAvailable = useGlobalStore(
    (state) => state.setTempDisplayAvailable
  );

  useEffect(() => {
    if (window.location.pathname === "/") setTempDisplayAvailable(true);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.pathname === "/") setTempDisplayAvailable(true);
    };

    window.addEventListener("load", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("load", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);
  // 모바일 영역 구현 전 임시 종료
  // ################################################

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RouteCheckerForGA />
      <ScrollToTop />

      <Suspense
        fallback={
          <div className="loading-container" style={{ height: clientHeight }}>
            <Img src={loading} width={90} height={90} />
          </div>
        }
      >
        {tempDisplayAvailable || clientWidth >= 1440 ? (
          <>
            <Header />
            <CustomRouter />
            <Modal />
          </>
        ) : (
          <div className="temp-container" style={{ height: clientHeight }}>
            <p>{t(`temp.notice`)}</p>
          </div>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
