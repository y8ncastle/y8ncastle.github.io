import useGlobalStore from "Store";
import { modalArrow, modalClose } from "assets/assetStore";
import i18n from "locales/i18n";
import { CSSProperties, RefObject, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Img } from "./Image";

const Modal = () => {
  const { t } = useTranslation();
  const isModalOpen = useGlobalStore((state) => state.isModalOpen);
  const [currentModal, setCurrentModal] = useGlobalStore((state) => [
    state.currentModal,
    state.setCurrentModal,
  ]);
  const [modalData, setModalData] = useGlobalStore((state) => [
    state.modalData,
    state.setModalData,
  ]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const handleInitModal = (
    event?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      ["modal-background", "modal-close"].some((className) =>
        (event.target as HTMLElement).classList.contains(className)
      )
    ) {
      setCurrentModal(null, false);
      setModalData(null);
    }
  };

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    setCurrentIndex(0);
    setIsChanging(false);
  }, [isModalOpen]);

  useEffect(() => {
    setIsChanging(false);
  }, [currentIndex]);

  return (
    <>
      {isModalOpen && currentModal && (
        <div className="modal-background" onClick={handleInitModal}>
          <div className="modal-container">
            <div className="modal-title-header">
              <span>{modalData && t(modalData.title)}</span>

              <Img
                className="modal-close"
                src={modalClose}
                width={16}
                height={16}
                onClick={handleInitModal}
              />
            </div>

            <div className="modal-body">
              {["schoolDiploma", "certification"].includes(currentModal) &&
                modalData &&
                modalData?.image &&
                !isChanging && (
                  <Img
                    src={modalData?.image[currentIndex].src}
                    width={
                      modalData?.image[currentIndex].orientation === "vertical"
                        ? 450
                        : 600
                    }
                  />
                )}
            </div>

            {modalData?.image && modalData?.image.length > 1 && (
              <>
                {currentIndex !== 0 && (
                  <button
                    className="left-arrow"
                    onClick={() => {
                      setCurrentIndex(currentIndex - 1);
                      setIsChanging(true);
                    }}
                  >
                    <Img
                      src={modalArrow}
                      width={36}
                      height={36}
                      style={{ transform: "rotate(180deg)" }}
                    />
                  </button>
                )}

                {currentIndex !== modalData?.image.length - 1 && (
                  <button
                    className="right-arrow"
                    onClick={() => {
                      setCurrentIndex(currentIndex + 1);
                      setIsChanging(true);
                    }}
                  >
                    <Img src={modalArrow} width={36} height={36} />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

export const DrawerModal = () => {
  const { t } = useTranslation();
  const [isDrawerOpen, setDrawerModalOpen] = useGlobalStore((state) => [
    state.isDrawerOpen,
    state.setDrawerModalOpen,
  ]);
  const [currentLang, setCurrentLang] = useGlobalStore((state) => [
    state.currentLang,
    state.setCurrentLang,
  ]);

  const aboutRef = useRef<HTMLAnchorElement>(null);
  const snapshotRef = useRef<HTMLAnchorElement>(null);
  const timelineRef = useRef<HTMLAnchorElement>(null);

  const handleInitModal = (
    event?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      ["drawer-background", "drawer-close"].some((className) =>
        (event.target as HTMLElement).classList.contains(className)
      )
    ) {
      setDrawerModalOpen(false);
    }
  };

  const setLangStyle = (lang: string): CSSProperties => {
    let isCurrentLang = currentLang === lang;

    return {
      fontWeight: isCurrentLang ? "bold" : "normal",
      backgroundColor: isCurrentLang ? "white" : "transparent",
      color: isCurrentLang ? "#333333" : "white",
    };
  };

  const changeLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
    setLangStyle(lang);
  };

  useEffect(() => {
    if (isDrawerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isDrawerOpen]);

  useEffect(() => {
    if (isDrawerOpen) {
      const applyStyle = (
        ref: RefObject<HTMLAnchorElement>,
        isEnter: boolean
      ) => {
        ref.current.style.setProperty(
          "font-weight",
          isEnter ? "bold" : "normal"
        );
        ref.current.style.setProperty("color", isEnter ? "#333333" : "white");
        ref.current.style.setProperty(
          "background-color",
          isEnter ? "white" : "transparent"
        );
      };

      const isAbout = location.pathname === "/";
      const isSnapshot = location.pathname.startsWith("/snapshot");
      const isTimeline = location.pathname.startsWith("/timeline");

      /* About */
      applyStyle(aboutRef, isAbout);

      /* Snapshot */
      applyStyle(snapshotRef, isSnapshot);

      /* Timeline */
      applyStyle(timelineRef, isTimeline);
    }
  }, [location, isDrawerOpen]);

  return (
    <>
      {isDrawerOpen && (
        <div className="drawer-background" onClick={handleInitModal}>
          <div className="drawer-container">
            <div className="drawer-header">
              <p className="russo logo">Alec J Portfolio</p>

              <Img
                className="drawer-close"
                src={modalClose}
                width={16}
                height={16}
                onClick={handleInitModal}
              />
            </div>

            <div className="drawer-body">
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
            </div>

            <div className="drawer-footer">
              <span style={setLangStyle("ko")} onClick={() => changeLang("ko")}>
                한국어
              </span>
              <span style={setLangStyle("en")} onClick={() => changeLang("en")}>
                English
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
