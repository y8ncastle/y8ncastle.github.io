import { fabArrow } from "assets/assetStore";
import { Img } from "./Image";

const FabButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="fab" onClick={onClick}>
      <Img src={fabArrow} width={24} height={24} />
    </div>
  );
};

export default FabButton;
