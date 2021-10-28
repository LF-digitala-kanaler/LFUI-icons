import * as React from "react";

function PhoneBroken20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M3 4.319C3 3.628 3.625 3 4.308 3h6.384C11.375 3 12 3.628 12 4.319V15.68c0 .691-.624 1.319-1.308 1.319H4.308A1.31 1.31 0 013 15.681V4.32zM4.308 19h6.384C12.482 19 14 17.474 14 15.681V4.32C14 2.525 12.482 1 10.692 1H4.308C2.518 1 1 2.525 1 4.319V15.68A3.31 3.31 0 004.308 19z" />
        <path d="M11.02 6.002H6.621L5.587 4.019 3.85 5l1.558 3.002H9.02V9.8l4.061 3.049-.014-2.512-2.047-1.536zM9 14.499a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001zM16 11V9h3v2zM15.58 8.046l-.97-1.75 2.624-1.454.97 1.75zM14.606 13.529l1.03-1.715 2.571 1.545-1.03 1.715z" />
      </g>
    </svg>
  );
}

export default PhoneBroken20;
