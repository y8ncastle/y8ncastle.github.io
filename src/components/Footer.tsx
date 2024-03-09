import { copyrightNext, copyrightPrev } from "constants/common";

const Footer = () => {
  return (
    <footer>
      <p>{copyrightPrev}</p>
      <p>{copyrightNext}</p>
    </footer>
  );
};

export default Footer;
