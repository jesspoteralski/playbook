import './display-base.css';
import './Button.css';
import { wrapperStyle, hasWrapper } from './displayWrapper.js';

export function Button({ children, primary, secondary, url, padding, border, borderRadius, background, shadow }) {
  const styleProps = { padding, border, borderRadius, background, shadow };
  const variant = primary ? 'primary' : secondary ? 'secondary' : 'default';
  const Tag = url ? 'a' : 'button';

  const content = (
    <div className="display-base button-display">
      <Tag
        className={`button-display__btn button-display__btn--${variant}`}
        href={url}
      >
        {children}
      </Tag>
    </div>
  );

  if (!hasWrapper(styleProps)) return content;
  return <div style={wrapperStyle(styleProps)}>{content}</div>;
}
