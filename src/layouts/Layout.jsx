import "./layout.css";

export function Layout({
  columns = 1,
  gap = "1rem",
  padding,
  background = "transparent",
  border,
  borderRadius,
  width = "1400px",
  justify = "start",
  children,
}) {
  const gridTemplate =
    typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns;

  return (
    <div
      className="layout-outer"
      style={{ background, padding, border, borderRadius }}>
      <div
        className="layout-inner"
        style={{
          gridTemplateColumns: gridTemplate,
          gap,
          maxWidth: width,
          justifyContent: justify,
        }}>
        {children}
      </div>
    </div>
  );
}
