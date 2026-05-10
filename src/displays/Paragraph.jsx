import './display-base.css';
import './Paragraph.css';
import { wrapperStyle, hasWrapper } from './displayWrapper.js';

export function Paragraph({ children, padding, border, borderRadius, background, shadow }) {
  const styleProps = { padding, border, borderRadius, background, shadow };

  const content = (
    <div className="display-base paragraph-display">
      <p className="paragraph-display__text">{children}</p>
    </div>
  );

  if (!hasWrapper(styleProps)) return content;
  return <div style={wrapperStyle(styleProps)}>{content}</div>;
}
