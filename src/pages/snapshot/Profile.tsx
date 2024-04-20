import useGlobalStore from "Store";
import { alec } from "assets/assetStore";
import ContentHeader from "components/ContentHeader";
import Footer from "components/Footer";
import { Img } from "components/Image";
import { profileData } from "data/snapshot/Profile";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { calculateAge } from "utils/calculation";

const Profile = () => {
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
