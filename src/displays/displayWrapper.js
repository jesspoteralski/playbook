export function wrapperStyle({ padding, border, borderRadius, background, shadow }) {
  return {
    padding,
    border,
    borderRadius,
    background,
    boxShadow: shadow === true ? '0 2px 12px rgba(0,0,0,0.08)' : shadow,
  };
}

export function hasWrapper({ padding, border, borderRadius, background, shadow }) {
  return !!(padding || border || borderRadius || background || shadow);
}
