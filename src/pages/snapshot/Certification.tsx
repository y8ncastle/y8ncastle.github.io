import useGlobalStore from "Store";
import { certificationArrow, certificationGlass } from "assets/assetStore";
import Footer from "components/Footer";
import { Img } from "components/Image";
import {
  CertificationImageData,
  ForeignCertificationData,
  ItCertificationData,
  OtherCertificationData,
} from "data/snapshot/Certification";
import { CertificationDataProps } from "interfaces/Certification";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";

const Certificate = () => {
  const { t } = useTranslation();
  const setCurrentModal = useGlobalStore((state) => state.setCurrentModal);
  const setModalData = useGlobalStore((state) => state.setModalData);
  const [unvalidForeignOpen, setUnvalidForeignOpen] = useState<boolean>(false);

  const isValid = (item: CertificationDataProps) => {
    return moment(new Date(item.expirationDate)).isBefore(
      moment().subtract(1, "days")
    );
  };

  const validItCertificationData = ItCertificationData.filter(
    (item) => !isValid(item)
  );

  const validForeignCertificationData = ForeignCertificationData.filter(
    (item) => !isValid(item)
  );

  const UnvalidForeignCertificationData = ForeignCertificationData.filter(
    (item) => isValid(item)
  );

  const validOtherCertificationData = OtherCertificationData.filter(
    (item) => !isValid(item)
  );

  const handleClick = (name: string) => {
    const item = CertificationImageData.find((item) => item.title === name);

    setModalData({
      title: item.title ? t(item.title) : null,
      image: item.image ? item.image : null,
    });
    setCurrentModal("certification", true);

    try {
      if (!window.location.href.includes("localhost")) {
        ReactGA.event({
          category: "click",
          action: `[CERT] ${t(item.title)}`,
        });
      }
    } catch (err) {}
  };

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
          <p>{t(`snapshot.certification`)}</p>
          <p>{t(`snapshot.certificationDetail.subTitle`)}</p>
        </div>

        <div className="common-container">
          <p className="certification-title russo" style={{ marginTop: 0 }}>
            Information Technology
          </p>
          <p className="certification-subTitle">
            {t(`snapshot.certificationDetail.itContent`)}
          </p>

          <table>
            <thead>
              <tr className="certification-table-header-line">
                <th>{t(`snapshot.certificationDetail.name`)}</th>
                <th>{t(`snapshot.certificationDetail.issuer`)}</th>
                <th>{t(`snapshot.certificationDetail.score`)}</th>
                <th>{t(`snapshot.certificationDetail.gotDate`)}</th>
                <th>{t(`snapshot.certificationDetail.view`)}</th>
              </tr>
            </thead>
            <tbody>
              {validItCertificationData &&
              validItCertificationData.length > 0 ? (
                validItCertificationData.map((item) => (
                  <tr
                    className="certification-each-table-row"
                    key={item.name + " " + item.acquisitionDate}
                  >
                    <td className="left">{t(item.name)}</td>
                    <td>{t(item.issuer)}</td>
                    <td>{t(item.score)}</td>
                    <td>
                      {item.acquisitionDate} /{" "}
                      {item.expirationDate
                        ? item.expirationDate
                        : t(`snapshot.certificationDetail.unlimited`)}
                    </td>
                    <td>
                      <Img
                        src={certificationGlass}
                        width={20}
                        height={20}
                        onClick={() => handleClick(item.name)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="certification-each-table-row">
                  <td className="no-data">
                    {t(`snapshot.certificationDetail.noMoreValid`)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <p className="certification-title russo" style={{ marginTop: 112 }}>
            Foreign Languages
          </p>
          <p className="certification-subTitle">
            {t(`snapshot.certificationDetail.foreignContent`)}
          </p>

          <table>
            <thead>
              <tr className="certification-table-header-line">
                <th>{t(`snapshot.certificationDetail.name`)}</th>
                <th>{t(`snapshot.certificationDetail.issuer`)}</th>
                <th>{t(`snapshot.certificationDetail.score`)}</th>
                <th>{t(`snapshot.certificationDetail.gotDate`)}</th>
                <th>{t(`snapshot.certificationDetail.view`)}</th>
              </tr>
            </thead>
            <tbody>
              {validForeignCertificationData &&
              validForeignCertificationData.length > 0 ? (
                validForeignCertificationData.map((item) => (
                  <tr
                    className="certification-each-table-row"
                    key={item.name + " " + item.acquisitionDate}
                  >
                    <td className="left">{t(item.name)}</td>
                    <td>{t(item.issuer)}</td>
                    <td>{t(item.score)}</td>
                    <td>
                      {item.acquisitionDate} /{" "}
                      {item.expirationDate
                        ? item.expirationDate
                        : t(`snapshot.certificationDetail.unlimited`)}
                    </td>
                    <td>
                      <Img
                        src={certificationGlass}
                        width={20}
                        height={20}
                        onClick={() => handleClick(item.name)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="certification-each-table-row">
                  <td className="no-data">
                    {t(`snapshot.certificationDetail.noMoreValid`)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {UnvalidForeignCertificationData &&
            UnvalidForeignCertificationData.length > 0 && (
              <>
                <div
                  className="certification-no-data-button"
                  onClick={() => setUnvalidForeignOpen(!unvalidForeignOpen)}
                >
                  <span>{t(`snapshot.certificationDetail.expired`)}</span>
                  <Img
                    src={certificationArrow}
                    width={13}
                    height={20}
                    style={{
                      transform: unvalidForeignOpen ? "rotate(180deg)" : "",
                    }}
                  />
                </div>

                {unvalidForeignOpen && (
                  <table style={{ marginTop: 16 }}>
                    <thead>
                      <tr className="certification-table-header-line">
                        <th>{t(`snapshot.certificationDetail.name`)}</th>
                        <th>{t(`snapshot.certificationDetail.issuer`)}</th>
                        <th>{t(`snapshot.certificationDetail.score`)}</th>
                        <th>{t(`snapshot.certificationDetail.gotDate`)}</th>
                        <th>{t(`snapshot.certificationDetail.view`)}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {UnvalidForeignCertificationData.map((item) => (
                        <tr
                          className="certification-each-table-row"
                          key={item.name + " " + item.acquisitionDate}
                        >
                          <td className="left">{t(item.name)}</td>
                          <td>{t(item.issuer)}</td>
                          <td>{t(item.score)}</td>
                          <td>
                            {item.acquisitionDate} /{" "}
                            {item.expirationDate
                              ? item.expirationDate
                              : t(`snapshot.certificationDetail.unlimited`)}
                          </td>
                          <td>
                            {item.image && (
                              <Img
                                src={certificationGlass}
                                width={20}
                                height={20}
                                onClick={() => handleClick(item.name)}
                              />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </>
            )}

          <p className="certification-title russo" style={{ marginTop: 112 }}>
            Others
          </p>
          <p className="certification-subTitle">
            {t(`snapshot.certificationDetail.otherContent`)}
          </p>

          <table>
            <thead>
              <tr className="certification-table-header-line">
                <th>{t(`snapshot.certificationDetail.name`)}</th>
                <th>{t(`snapshot.certificationDetail.issuer`)}</th>
                <th>{t(`snapshot.certificationDetail.score`)}</th>
                <th>{t(`snapshot.certificationDetail.gotDate`)}</th>
                <th>{t(`snapshot.certificationDetail.view`)}</th>
              </tr>
            </thead>
            <tbody>
              {validOtherCertificationData &&
              validOtherCertificationData.length > 0 ? (
                validOtherCertificationData.map((item) => (
                  <tr
                    className="certification-each-table-row"
                    key={item.name + " " + item.acquisitionDate}
                  >
                    <td className="left">{t(item.name)}</td>
                    <td>{t(item.issuer)}</td>
                    <td>{t(item.score)}</td>
                    <td>
                      {item.acquisitionDate} /{" "}
                      {item.expirationDate
                        ? item.expirationDate
                        : t(`snapshot.certificationDetail.unlimited`)}
                    </td>
                    <td>
                      {item.image && (
                        <Img
                          src={certificationGlass}
                          width={20}
                          height={20}
                          onClick={() => handleClick(item.name)}
                        />
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="certification-each-table-row">
                  <td className="no-data">
                    {t(`snapshot.certificationDetail.noMoreValid`)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Certificate;
