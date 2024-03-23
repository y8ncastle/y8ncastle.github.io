import { gpaChange } from "assets/assetStore";
import { Img } from "components/Image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const GPAContainer = ({
  title,
  gpaType,
  gpa,
  totalCredits,
  stdCredits,
}: {
  title: string;
  gpaType: number;
  gpa: number;
  totalCredits: number;
  stdCredits: number;
}) => {
  const { t } = useTranslation();
  const [currentGpa, setCurrentGpa] = useState<number>(gpa);
  const [currentType, setCurrentType] = useState<number>(gpaType);

  const handleCurrentType = () => {
    if (currentType === 4.3) setCurrentType(4.5);
    else if (currentType === 4.5) setCurrentType(4.0);
    else setCurrentType(4.3);
  };

  useEffect(() => {
    const basicGpa = gpa / gpaType;
    const changedGpa = (basicGpa * currentType).toFixed(2);

    setCurrentGpa(Number(changedGpa));
  }, [currentType]);

  return (
    <div className="gpa-container">
      <p>{t(title)}</p>
      <p>
        {currentGpa} <span>/ {currentType.toFixed(1)}</span>
      </p>
      <p>
        ({totalCredits} / {stdCredits})
      </p>

      <Img src={gpaChange} width={32} height={32} onClick={handleCurrentType} />
    </div>
  );
};

export default GPAContainer;
