import { Img } from "components/Image";
import { SkillProps } from "interfaces/About";

const SkillBox = (props: SkillProps) => {
  return (
    <div className="skill-box">
      <Img src={props.icon} height={36} />
      <p>{props.name}</p>
    </div>
  );
};

export default SkillBox;
