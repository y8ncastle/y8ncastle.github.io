import useGlobalStore from "Store";
import { SchoolGradeDataProps } from "interfaces/School";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const GradeContainer = (props: SchoolGradeDataProps) => {
  const { t } = useTranslation();
  const currentLang = useGlobalStore((state) => state.currentLang);
  const [currentTab, setCurrentTab] = useState<number>(0);

  const getGradeAlpha = (grade: number) => {
    if (grade === 4.3 || grade === 4.5) return "A+";
    if (grade === 4.0) return "A0";
    if (grade === 3.7) return "A-";
    if (grade === 3.3 || grade === 3.5) return "B+";
    if (grade === 3.0) return "B0";
    if (grade === 2.7) return "B-";
    if (grade === 2.3 || grade === 2.5) return "C+";
    if (grade === 2.0) return "C0";
    if (grade === 0.5) return "P";
  };

  const getTotalCredits = (index: number) => {
    let sum = 0;

    if (props.items) {
      sum += props.items
        .filter((item) => item.semester - 1 === index)
        .reduce((acc, cur) => acc + cur.credits, 0);
    }

    return sum;
  };

  return (
    <div className="grade-container">
      <div className="tab-line">
        {Array(props.tabCount)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className={`each-tab ${currentTab === index ? "active" : ""}`}
              onClick={() => setCurrentTab(index)}
              style={{ width: props.tabCount === 4 ? 304 : 146 }}
            >
              <p>
                {currentLang === "en" &&
                  t(`snapshot.school.gradeDetail.semester`) + " "}
                {index + 1}
                {currentLang === "ko" &&
                  t(`snapshot.school.gradeDetail.semester`)}
              </p>
            </button>
          ))}
      </div>

      <div className="grade-table">
        <div className="table-header-line">
          <span>{t(`snapshot.school.gradeDetail.subjectName`)}</span>
          <span>{t(`snapshot.school.gradeDetail.majorType`)}</span>
          <span>{t(`snapshot.school.gradeDetail.stdGrade`)}</span>
          <span>{t(`snapshot.school.gradeDetail.gainedGrade`)}</span>
        </div>

        {props.items &&
          props.items
            .filter((item) => item.semester - 1 === currentTab)
            .map((item2) => (
              <div className="each-table-row" key={item2.name}>
                <span className="left">{t(item2.name)}</span>
                <span>{t(item2.type)}</span>
                <span>{item2.credits}</span>
                <span>
                  {getGradeAlpha(item2.gainedGrade) +
                    (item2.gainedGrade !== 0.5
                      ? " (" + item2.gainedGrade.toFixed(1) + ")"
                      : "")}
                </span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default GradeContainer;
