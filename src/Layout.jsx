import './layout.css';

export function Layout({
  columns = 1,
  gap = '1rem',
  padding = '2rem',
  background = 'transparent',
  width = '100%',
  justify = 'start',
  children,
}) {
  const gridTemplate =
    typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns;

  return (
    <div className="layout-outer" style={{ background, padding }}>
      <div
        className="layout-inner"
        style={{
          gridTemplateColumns: gridTemplate,
          gap,
          maxWidth: width,
          justifyContent: justify,
        }}
      >
        {children}
      </div>
    </div>
  );
}
