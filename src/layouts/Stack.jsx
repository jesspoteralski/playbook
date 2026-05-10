import './Stack.css';

export function Stack({ gap = '1rem', padding, border, background, shadow, children }) {
  return (
    <div className="stack" style={{
      gap,
      padding,
      border,
      background,
      boxShadow: shadow === true ? '0 2px 12px rgba(0,0,0,0.08)' : shadow,
    }}>
      {children}
    </div>
  );
}
