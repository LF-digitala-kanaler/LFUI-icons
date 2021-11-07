import * as React from "react";

function Contact32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M10 7.319C10 6.628 10.625 6 11.308 6h9.384C21.375 6 22 6.628 22 7.319V24.68c0 .691-.624 1.319-1.308 1.319h-9.384A1.31 1.31 0 0110 24.681V7.32zM11.308 28h9.384C22.482 28 24 26.474 24 24.681V7.32C24 5.525 22.482 4 20.692 4h-9.384C9.518 4 8 5.525 8 7.319V24.68A3.31 3.31 0 0011.308 28z"
          fillRule="nonzero"
        />
        <path fillRule="nonzero" d="M23 11V9H9v2zM23 21v-2H9v2z" />
        <path d="M16 22a1.5 1.5 0 110 3 1.5 1.5 0 010-3" />
      </g>
    </svg>
  );
}

export default Contact32;