import './display-base.css';
import './Video.css';
import { wrapperStyle, hasWrapper } from './displayWrapper.js';

export function Video({ src, title, caption, padding, border, borderRadius, background, shadow }) {
  const styleProps = { padding, border, borderRadius, background, shadow };

  const content = (
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

  if (!hasWrapper(styleProps)) return content;
  return <div style={wrapperStyle(styleProps)}>{content}</div>;
}
