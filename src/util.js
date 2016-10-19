export function hilite(color, span) {
  return {
    color: color,
    span: {
      from: { line: span[0], to: span[1] },
      to: { line: span[2], to: span[3] }
    }
  };
}
