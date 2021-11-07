import * as React from "react";

function Logout24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M16.282 9.697L17.547 11h-6.05v2h6.05l-1.265 1.303 1.434 1.394L21.308 12l-3.592-3.696z" />
        <path d="M10.407 18a5.83 5.83 0 01-4.176-1.75c-2.313-2.344-2.313-6.157 0-8.5A5.83 5.83 0 0110.407 6a5.83 5.83 0 014.176 1.75l1.424-1.405A7.818 7.818 0 0010.408 4a7.818 7.818 0 00-5.6 2.345c-3.077 3.118-3.077 8.191 0 11.31a7.818 7.818 0 005.6 2.345 7.818 7.818 0 005.6-2.345l-1.424-1.405A5.83 5.83 0 0110.408 18" />
      </g>
    </svg>
  );
}

export default Logout24;