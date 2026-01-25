export interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-primary rounded-3xl blur-2xl opacity-25 transition duration-1000 group-hover:opacity-40"></div>
      <img
        src={src}
        alt={alt}
        className="relative w-full rounded-3xl shadow-2xl"
      />
    </div>
  );
};
