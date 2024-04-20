import useGlobalStore from "Store";
import Footer from "components/Footer";
import GPAContainer from "components/Snapshot/School/GPAContainer";
import GradeContainer from "components/Snapshot/School/GradeContainer";
import { schoolSogangGradeTableData } from "data/snapshot/School";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SogangGrade = () => {
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
          <p>{t(`snapshot.school.gradeDetail.sogangTitle`)}</p>
          <p>{t(`snapshot.school.gradeDetail.sogangSubTitle`)}</p>
        </div>

        <div className="common-container">
          <div className="gpa-line">
            <GPAContainer
              title={`snapshot.school.gradeDetail.totalGrade`}
              gpa={3.81}
              gpaType={4.3}
              totalCredits={27}
              stdCredits={24}
            />
            <GPAContainer
              title={`snapshot.school.gradeDetail.majorGrade`}
              gpa={3.81}
              gpaType={4.3}
              totalCredits={27}
              stdCredits={24}
            />
          </div>

          <GradeContainer tabCount={4} items={schoolSogangGradeTableData} />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SogangGrade;
