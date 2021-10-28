import * as React from "react";

function Smalltruck24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M17 3v11H4.219l.281 1.401a2.982 2.982 0 011.324-.396L6 15c1.306 0 2.417.835 2.83 2h6.34A3.001 3.001 0 0120 15.765v-3.569L18.71 9H18V7h2.06L22 11.806V19h-1.171a3 3 0 01-5.658 0H8.829A3 3 0 013 18l.003.115L2.18 14H2V3h15zm1 14a1 1 0 100 2 1 1 0 000-2zM6 17a1 1 0 100 2 1 1 0 000-2zm9-12H4v7h11V5z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Smalltruck24;
