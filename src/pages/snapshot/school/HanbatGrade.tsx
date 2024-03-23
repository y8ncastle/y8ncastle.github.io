import Footer from "components/Footer";
import GPAContainer from "components/Snapshot/School/GPAContainer";
import GradeContainer from "components/Snapshot/School/GradeContainer";
import { schoolHanbatGradeTableData } from "data/snapshot/School";
import { useTranslation } from "react-i18next";

const HanbatGrade = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section className="snapshot-container">
        <div className="common-top-box">
          <p>{t(`snapshot.school.gradeDetail.hanbatTitle`)}</p>
          <p>{t(`snapshot.school.gradeDetail.hanbatSubTitle`)}</p>
        </div>

        <div className="common-container">
          <div className="gpa-line">
            <GPAContainer
              title={`snapshot.school.gradeDetail.totalGrade`}
              gpa={4.136}
              gpaType={4.5}
              totalCredits={140}
              stdCredits={140}
            />
            <GPAContainer
              title={`snapshot.school.gradeDetail.majorGrade`}
              gpa={4.12}
              gpaType={4.5}
              totalCredits={82}
              stdCredits={140}
            />
          </div>

          <GradeContainer tabCount={8} items={schoolHanbatGradeTableData} />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HanbatGrade;
