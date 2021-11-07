import * as React from "react";

function IdCard32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M27 21.6c0 .744-.657 1.4-1.4 1.4H6.203C5.531 23 5 22.313 5 21.6V10.4C5 9.628 5.628 9 6.4 9h19.2c.772 0 1.4.628 1.4 1.4v11.2zM6.4 7A3.404 3.404 0 003 10.4v11.2c0 1.533 1.531 3.38 3.203 3.38L25.6 25c1.806 0 3.4-1.672 3.4-3.4V10.4C29 8.526 27.475 7 25.6 7H6.4z" />
        <path d="M18 15h7v-2h-7zM18 19h7v-2h-7zM12 16.493a1.498 1.498 0 010-2.993 1.498 1.498 0 010 2.993m0-4.993a3.5 3.5 0 00-3.496 3.497A3.5 3.5 0 0012 18.493a3.5 3.5 0 003.496-3.496A3.5 3.5 0 0012 11.5" />
        <path d="M18 23h-2a4 4 0 10-8 0H6a6 6 0 1112 0z" />
      </g>
    </svg>
  );
}

export default IdCard32;