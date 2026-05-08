import './display-base.css';
import './VideoDisplay.css';

export function VideoDisplay({ src, title, caption }) {
  return (
    <div className="display-base video-display">
      <div className="video-display__video-wrapper">
        <video className="video-display__video" src={src} controls />
      </div>
      {(title || caption) && (
        <div className="video-display__meta">
          {title && <h3 className="video-display__title">{title}</h3>}
          {caption && <p className="video-display__caption">{caption}</p>}
        </div>
      )}
    </div>
  );
}
