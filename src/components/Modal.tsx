import useGlobalStore from "Store";
import { modalArrow, modalClose } from "assets/assetStore";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

  const handleInitModal = () => {
    setCurrentModal(null, false);
    setModalData(null);
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
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-title-header">
              <span>{modalData && t(modalData.title)}</span>

              <Img
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
