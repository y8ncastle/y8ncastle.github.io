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

      <table>
        <thead>
          <tr className="table-header-line">
            <th>{t(`snapshot.school.gradeDetail.subjectName`)}</th>
            <th>{t(`snapshot.school.gradeDetail.majorType`)}</th>
            <th>{t(`snapshot.school.gradeDetail.stdGrade`)}</th>
            <th>{t(`snapshot.school.gradeDetail.gainedGrade`)}</th>
          </tr>
        </thead>

        <tbody>
          {props.items &&
            props.items
              .filter((item) => item.semester - 1 === currentTab)
              .map((item2) => (
                <tr className="each-table-row" key={item2.name}>
                  <td className="left">{t(item2.name)}</td>
                  <td>{t(item2.type)}</td>
                  <td>{item2.credits}</td>
                  <td>
                    {getGradeAlpha(item2.gainedGrade) +
                      (item2.gainedGrade !== 0.5
                        ? " (" + item2.gainedGrade.toFixed(1) + ")"
                        : "")}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeContainer;
