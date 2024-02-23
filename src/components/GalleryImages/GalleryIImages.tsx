import "./GalleryImages.css";

export function GalleryImages({ images }: { images: string[] }) {
  return (
    <div className="gallery">
      <div className="gallery-images">
        {images.map((image) => {
          return (
            <div className="image">
              <figure>
                <img src={image} alt="Preview" className="image-figure" />
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}
