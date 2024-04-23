import useGlobalStore from "Store";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useMediaQuery, { mobileQuery } from "utils/useMediaQuery";

const Timeline = () => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery(mobileQuery);

  // ################################################
  // 모바일 영역 구현 전 임시
  const setTempDisplayAvailable = useGlobalStore(
    (state) => state.setTempDisplayAvailable
  );

  useEffect(() => {
    if (isMobile) setTempDisplayAvailable(true);
    else setTempDisplayAvailable(false);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (isMobile) setTempDisplayAvailable(true);
      else setTempDisplayAvailable(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // 모바일 영역 구현 전 임시 종료
  // ################################################

  return (
    <main>
      <section className="timeline-container">
        <p>{t(`temp.preparing`)}</p>
      </section>
    </main>
  );
};

export default Timeline;
