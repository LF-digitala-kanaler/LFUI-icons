import * as React from "react";

function Text3Round32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" />
        <path d="M17.44 14.49l1.784-3.675V10.5H13.54v1.785h2.94l-1.485 3.345v.315c1.095-.24 2.46 0 2.49 1.68 0 .96-.48 1.59-1.185 1.59-.72 0-1.214-.51-1.245-1.29h-1.86c.046 1.935 1.29 3.225 3.136 3.225 1.904 0 3.165-1.41 3.165-3.54 0-1.455-.646-2.835-2.056-3.12" />
      </g>
    </svg>
  );
}

export default Text3Round32;
