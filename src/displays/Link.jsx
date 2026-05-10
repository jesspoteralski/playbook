import './display-base.css';
import './Link.css';
import { wrapperStyle, hasWrapper } from './displayWrapper.js';

const icons = {
  'chevron-right': (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'external': (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M6 2H2v10h10V8M8 2h4m0 0v4m0-4L6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'download': (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 2v7m0 0L4.5 6.5M7 9l2.5-2.5M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export function Link({ children, url, icon, padding, border, borderRadius, background, shadow }) {
  const styleProps = { padding, border, borderRadius, background, shadow };

  const content = (
    <div className="display-base link-display">
      <a className="link-display__link" href={url}>
        <span className="link-display__text">{children}</span>
        {icon && <span className="link-display__icon">{icons[icon]}</span>}
      </a>
    </div>
  );

  if (!hasWrapper(styleProps)) return content;
  return <div style={wrapperStyle(styleProps)}>{content}</div>;
}
