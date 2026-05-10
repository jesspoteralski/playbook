import './display-base.css';
import './Image.css';
import { wrapperStyle, hasWrapper } from './displayWrapper.js';

export function Image({ src, alt = '', caption, padding, border, borderRadius, background, shadow }) {
  const styleProps = { padding, border, borderRadius, background, shadow };

  const content = (
    <div className="display-base image-display">
      <img className="image-display__img" src={src} alt={alt} />
      {caption && <p className="image-display__caption">{caption}</p>}
    </div>
  );

  if (!hasWrapper(styleProps)) return content;
  return <div style={wrapperStyle(styleProps)}>{content}</div>;
}
