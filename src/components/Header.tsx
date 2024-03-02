import useGlobalStore from "Store";
import i18n from "locales/i18n";
import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useGlobalStore((state) => [
    state.currentLang,
    state.setCurrentLang,
  ]);

  const setUrlStyle = (url: string): CSSProperties => {
    let isCurrentUrl = location.pathname === url;

    return {
      fontWeight: isCurrentUrl ? "bold" : "normal",
      textDecoration: isCurrentUrl ? "underline" : "none",
    };
  };

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

  return (
    <header>
      <div className="container">
        <p className="russo logo">Alec J Portfolio</p>

        <nav>
          <Link to="/" style={setUrlStyle("/")}>
            {/* 소개 */}
            {t(`header.about`)}
          </Link>
          <Link to="/snapshot" style={setUrlStyle("/snapshot")}>
            {/* 스냅샷 */}
            {t(`header.snapshot`)}
          </Link>
          <Link to="/timeline" style={setUrlStyle("/timeline")}>
            {/* 타임라인 */}
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
