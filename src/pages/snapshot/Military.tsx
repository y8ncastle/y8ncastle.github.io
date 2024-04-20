import useGlobalStore from "Store";
import {
  militaryCoa,
  militaryEngCoaOne,
  militaryEngCoaTwo,
  militaryId,
  militaryKtaDiploma,
  militaryPhotoOne,
  militaryPhotoTwo,
  militarySeniorKatusa,
} from "assets/assetStore";
import Footer from "components/Footer";
import { Img } from "components/Image";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Military = () => {
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
          <p>{t(`snapshot.military`)}</p>
          <p>{t(`snapshot.militaryDetail.subTitle`)}</p>
        </div>

        <div className="common-container" style={{ paddingTop: 64 }}>
          <table>
            <thead>
              <tr className="military-table-header-line">
                <th>{t(`snapshot.militaryDetail.period`)}</th>
                <th>{t(`snapshot.militaryDetail.affiliation`)}</th>
                <th>{t(`snapshot.militaryDetail.occupation`)}</th>
                <th>{t(`snapshot.militaryDetail.rank`)}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="military-each-table-row">
                <td>2015.04.13 ~ 2017.01.12</td>
                <td>{t(`snapshot.militaryDetail.affiliationContent`)}</td>
                <td>{t(`snapshot.militaryDetail.occupationContent`)}</td>
                <td>{t(`snapshot.militaryDetail.rankContent`)}</td>
              </tr>
            </tbody>
          </table>

          <p className="military-title russo" style={{ marginTop: 92 }}>
            KATUSA
          </p>
          <p className="military-description">
            {t(`snapshot.militaryDetail.militaryContentOne`)}
          </p>
          <Img src={militaryId} width={500} style={{ marginTop: 60 }} />

          <p className="military-title russo">KATUSA Training Academy</p>
          <p className="military-description">
            {t(`snapshot.militaryDetail.militaryContentTwo`)}
          </p>
          <Img src={militaryKtaDiploma} width={602} style={{ marginTop: 60 }} />

          <p className="military-title russo">Assigned to Unit</p>
          <p className="military-description">
            {t(`snapshot.militaryDetail.militaryContentThree`)}
          </p>
          <p className="military-description" style={{ marginTop: 46 }}>
            {t(`snapshot.militaryDetail.militaryContentFour`)}
          </p>
          <Img src={militaryPhotoOne} width={735} style={{ marginTop: 60 }} />

          <p className="military-title russo">Senior KATUSA</p>
          <p className="military-description">
            {t(`snapshot.militaryDetail.militaryContentFive`)}
          </p>
          <Img
            src={militarySeniorKatusa}
            width={602}
            style={{ marginTop: 60 }}
          />

          <p className="military-title russo">Honorable Discharge</p>
          <p className="military-description">
            {t(`snapshot.militaryDetail.militaryContentSix`)}
          </p>
          <Img src={militaryCoa} width={400} style={{ marginTop: 60 }} />
          <Img src={militaryEngCoaOne} width={602} style={{ marginTop: 60 }} />
          <Img src={militaryEngCoaTwo} width={602} style={{ marginTop: 60 }} />
          <Img src={militaryPhotoTwo} width={776} style={{ marginTop: 60 }} />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Military;
