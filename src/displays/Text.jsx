import './display-base.css';
import './Text.css';
import { wrapperStyle, hasWrapper } from './displayWrapper.js';

export function Text({ eyebrow, title, body, padding, border, borderRadius, background, shadow }) {
  const styleProps = { padding, border, borderRadius, background, shadow };

  const content = (
    <div className="display-base text-display">
      <div className="text-display__left">
        {eyebrow && <p className="text-display__eyebrow">{eyebrow}</p>}
        {title && <h2 className="text-display__title">{title}</h2>}
      </div>
      {body && (
        <div className="text-display__right">
          <p className="text-display__body">{body}</p>
        </div>
      )}
    </div>
  );

  if (!hasWrapper(styleProps)) return content;
  return <div style={wrapperStyle(styleProps)}>{content}</div>;
}
