/* eslint-disable import/prefer-default-export */
export function hilite(color, span) {
  return {
    color: color,
    span: {
      from: { line: span[0], ch: span[1] },
      to: { line: span[2], ch: span[3] }
    }
  };
}
