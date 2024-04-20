import useGlobalStore from "Store";
import Footer from "components/Footer";
import SchoolBanner from "components/Snapshot/School/SchoolBanner";
import { schoolBannerData } from "data/snapshot/School";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const School = () => {
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
      <section className="snapshot-container">
        <div className="common-top-box">
          <p>{t(`snapshot.schoolLife`)}</p>
          <p>{t(`snapshot.school.subTitle`)}</p>
        </div>

        <div className="common-container">
          {schoolBannerData &&
            schoolBannerData.map((item) => (
              <SchoolBanner
                key={item.name}
                name={item.name}
                engName={item.engName}
                link={item.link}
                backgroundColor={item.backgroundColor}
                hoverColor={item.hoverColor}
                image={item.image}
              />
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default School;
