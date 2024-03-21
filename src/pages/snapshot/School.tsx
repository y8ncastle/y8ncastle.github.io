import Footer from "components/Footer";
import SchoolBanner from "components/Snapshot/School/SchoolBanner";
import { schoolBannerData } from "data/snapshot/School";
import { useTranslation } from "react-i18next";

const School = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section className="snapshot-container">
        <div className="common-top-box">
          <p>{t(`snapshot.school.title`)}</p>
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
