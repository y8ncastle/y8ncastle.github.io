import useGlobalStore from "Store";
import { loading } from "assets/assetStore";
import Header from "components/Header";
import { Img } from "components/Image";
import "locales/i18n";
import i18n from "locales/i18n";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "route";
import "./App.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const setCurrentLang = useGlobalStore((state) => state.setCurrentLang);
  const [clientWidth, setClientWidth] = useState<number>(window.innerWidth);
  const [clientHeight, setClientHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setClientHeight(window.innerHeight);
      setClientWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang === "ko" || savedLang === "en") setCurrentLang(savedLang);
    else setCurrentLang("ko");

    i18n.changeLanguage(savedLang);
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense
        fallback={
          <div className="loading-container" style={{ height: clientHeight }}>
            <Img src={loading} width={90} height={90} />
          </div>
        }
      >
        {clientWidth >= 1440 ? (
          <>
            <Header />
            <CustomRouter />
          </>
        ) : (
          <div className="temp-container">
            <p>{t(`temp.notice`)}</p>
          </div>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
