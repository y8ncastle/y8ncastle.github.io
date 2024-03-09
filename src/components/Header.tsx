import useGlobalStore from "Store";
import i18n from "locales/i18n";
import { CSSProperties, RefObject, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useGlobalStore((state) => [
    state.currentLang,
    state.setCurrentLang,
  ]);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const snapshotRef = useRef<HTMLAnchorElement>(null);
  const timelineRef = useRef<HTMLAnchorElement>(null);

  const setLangStyle = (lang: string): CSSProperties => {
    let isCurrentLang = currentLang === lang;

    return {
      fontWeight: isCurrentLang ? "bold" : "normal",
      textDecoration: isCurrentLang ? "underline" : "none",
    };
  };

  const changeLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
    setLangStyle(lang);
  };

  useEffect(() => {
    const applyStyle = (
      ref: RefObject<HTMLAnchorElement>,
      isBold: boolean,
      isUnderline: boolean
    ) => {
      ref.current.style.setProperty("font-weight", isBold ? "bold" : "normal");
      ref.current.style.setProperty(
        "text-decoration",
        isUnderline ? "underline" : "none"
      );
    };

    const isAbout = location.pathname === "/";
    const isSnapshot = location.pathname.startsWith("/snapshot");
    const isTimeline = location.pathname.startsWith("/timeline");

    /* About */
    applyStyle(aboutRef, isAbout, isAbout);

    /* Snapshot */
    applyStyle(snapshotRef, isSnapshot, isSnapshot);

    /* Timeline */
    applyStyle(timelineRef, isTimeline, isTimeline);
  }, [location]);

  return (
    <header>
      <div className="container">
        <p className="russo logo">Alec J Portfolio</p>

        <nav>
          <Link to="/" ref={aboutRef}>
            {t(`header.about`)}
          </Link>
          <Link to="/snapshot" ref={snapshotRef}>
            {t(`header.snapshot`)}
          </Link>
          <Link to="/timeline" ref={timelineRef}>
            {t(`header.timeline`)}
          </Link>
        </nav>

        <div className="language">
          <span style={setLangStyle("ko")} onClick={() => changeLang("ko")}>
            한국어
          </span>
          <span style={setLangStyle("en")} onClick={() => changeLang("en")}>
            English
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
