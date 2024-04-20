import { CSSProperties } from "react";

export const Img = ({
  src,
  width,
  height,
  alt,
  style,
  className,
  onClick,
}: {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <img
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt ? alt : ""}
      style={style}
      onClick={onClick}
    />
  );
};
