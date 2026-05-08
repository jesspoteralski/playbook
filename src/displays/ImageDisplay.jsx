import './display-base.css';
import './ImageDisplay.css';

export function ImageDisplay({ src, alt = '', caption }) {
  return (
    <div className="display-base image-display">
      <img className="image-display__img" src={src} alt={alt} />
      {caption && <p className="image-display__caption">{caption}</p>}
    </div>
  );
}
