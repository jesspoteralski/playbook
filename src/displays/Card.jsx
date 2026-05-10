import './Card.css';

export function Card({
  children,
  padding = '1.5rem',
  background = '#fff',
  shadow = true,
  borderRadius = '10px',
  border,
  gap = '1rem',
}) {
  const style = {
    padding,
    background,
    borderRadius,
    border,
    gap,
    boxShadow: shadow === true ? '0 2px 16px rgba(0,0,0,0.10)' : shadow || 'none',
  };

  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
}
