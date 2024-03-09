import { alec } from "assets/assetStore";
import ContentHeader from "components/ContentHeader";
import Footer from "components/Footer";
import { Img } from "components/Image";
import { profileData } from "data/snapshot/Profile";
import { useTranslation } from "react-i18next";
import { calculateAge } from "utils/calculation";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <main>
      <ContentHeader title={`snapshot.profile.headerContent`} />

      <section className="profile-container">
        <div className="profile-box">
          <div className="img-container">
            <Img src={alec} width={166} height={166} />
          </div>

          <div className="upper-box">
            <p>정윤성 (Yoonsung Jeong)</p>
          </div>

          {profileData && (
            <table>
              <tbody>
                {profileData.map((item) => (
                  <tr key={item.type}>
                    <th>{t(item.type)}</th>
                    <td>
                      {t(item.content)}{" "}
                      {item.type === "snapshot.profile.birthday" &&
                        `(${t(`about.content.agePrev`)}${calculateAge()}${t(
                          `about.content.ageNext`
                        )})`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Profile;
