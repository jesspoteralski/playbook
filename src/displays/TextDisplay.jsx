import './display-base.css';
import './TextDisplay.css';

export function TextDisplay({ eyebrow, title, body }) {
  return (
    <div className="display-base text-display">
      <div className="text-display__left">
        {eyebrow && <p className="text-display__eyebrow">{eyebrow}</p>}
        {title && <h2 className="text-display__title">{title}</h2>}
      </div>
      <div className="text-display__right">
        {body && <p className="text-display__body">{body}</p>}
      </div>
    </div>
  );
}
