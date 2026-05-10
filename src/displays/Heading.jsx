import './display-base.css';
import './Heading.css';
import { wrapperStyle, hasWrapper } from './displayWrapper.js';

export function Heading({ level = 2, eyebrow, children, padding, border, borderRadius, background, shadow }) {
  const Tag = `h${level}`;
  const styleProps = { padding, border, borderRadius, background, shadow };

  const content = (
    <div className="display-base heading-display">
      {eyebrow && <p className="heading-display__eyebrow">{eyebrow}</p>}
      <Tag className={`heading-display__heading heading-display__heading--${level}`}>
        {children}
      </Tag>
    </div>
  );

  if (!hasWrapper(styleProps)) return content;
  return <div style={wrapperStyle(styleProps)}>{content}</div>;
}
