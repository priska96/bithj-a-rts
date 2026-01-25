export interface ImageProps {
  src: string;
  alt: string;
  title: string;
  category: string;
}
export const ImageCard = ({ src, alt, title, category }: ImageProps) => {
  return (
    <>
      <div className="aspect-square overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-main-text">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{category}</p>
      </div>
    </>
  );
};
