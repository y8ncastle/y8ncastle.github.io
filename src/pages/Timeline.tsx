import useGlobalStore from "Store";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Timeline = () => {
  const { t } = useTranslation();

  // ################################################
  // 모바일 영역 구현 전 임시
  const setTempDisplayAvailable = useGlobalStore(
    (state) => state.setTempDisplayAvailable
  );

  useEffect(() => {
    setTempDisplayAvailable(false);
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
