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

const App = () => {
  const setCurrentLang = useGlobalStore((state) => state.setCurrentLang);
  const [clientHeight, setClientHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setClientHeight(window.innerHeight);
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
        <Header />
        <CustomRouter />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
