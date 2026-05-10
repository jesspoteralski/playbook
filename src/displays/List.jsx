import './display-base.css';
import './List.css';
import { wrapperStyle, hasWrapper } from './displayWrapper.js';

export function List({ items = [], padding, border, borderRadius, background, shadow }) {
  const styleProps = { padding, border, borderRadius, background, shadow };

  const content = (
    <div className="display-base list-display">
      <ul className="list-display__list">
        {items.map((item, i) => (
          <li key={i} className="list-display__item">{item}</li>
        ))}
      </ul>
    </div>
  );

  if (!hasWrapper(styleProps)) return content;
  return <div style={wrapperStyle(styleProps)}>{content}</div>;
}
