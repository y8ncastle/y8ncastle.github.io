import { CSSProperties } from "react";

export const Img = ({
  src,
  width,
  height,
  alt,
  style,
}: {
  src: string;
  width: number;
  height: number;
  alt?: string;
  style?: CSSProperties;
}) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt ? alt : ""}
      style={style}
    />
  );
};
