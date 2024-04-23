import useGlobalStore from "Store";
import Footer from "components/Footer";
import CategoryItemBox from "components/Snapshot/CategoryItemBox";
import { SnapshotCategoryData } from "data/Snapshot";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useMediaQuery, { mobileQuery } from "utils/useMediaQuery";

const Snapshot = () => {
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
      <section className="snapshot-container">
        <div className="intro-box">
          <p>{t(`snapshot.share`)}</p>
          <p>{t(`snapshot.wantToKnow`)}</p>
        </div>

        <div className="category">
          <p className="title russo">Category</p>

          <div className="item-group">
            {SnapshotCategoryData &&
              SnapshotCategoryData.map((item) => (
                <CategoryItemBox
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                  opened={item.opened}
                />
              ))}

            {SnapshotCategoryData && SnapshotCategoryData.length % 4 !== 0 && (
              <>
                {Array(4 - (SnapshotCategoryData.length % 4))
                  .fill(0)
                  .map((item, idx) => (
                    <div className="blank-category-item-box" key={idx}></div>
                  ))}
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Snapshot;
