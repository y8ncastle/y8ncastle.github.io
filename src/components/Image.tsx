export const Img = ({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt?: string;
}) => {
  return <img src={src} width={width} height={height} alt={alt ? alt : ""} />;
};
