import Footer from "components/Footer";
import GPAContainer from "components/Snapshot/School/GPAContainer";
import GradeContainer from "components/Snapshot/School/GradeContainer";
import { schoolGradeTableData } from "data/snapshot/School";
import { useTranslation } from "react-i18next";

const SogangGrade = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section className="snapshot-container">
        <div className="common-top-box">
          <p>{t(`snapshot.school.gradeDetail.title`)}</p>
          <p>{t(`snapshot.school.gradeDetail.subTitle`)}</p>
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

          <GradeContainer items={schoolGradeTableData} />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SogangGrade;
