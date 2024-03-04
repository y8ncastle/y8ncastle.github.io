import { Img } from "components/Image";
import { SkillProps } from "interfaces/About";
import { useState } from "react";

const SkillBox = (props: SkillProps) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className="skill-box"
      onMouseOver={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Img src={props.icon} height={36} />
      <p>{onHover ? props.period : props.name}</p>
    </div>
  );
};

export default SkillBox;
