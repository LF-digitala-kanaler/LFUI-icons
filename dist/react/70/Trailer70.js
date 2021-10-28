import * as React from "react";

function Trailer70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M20 33a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm0 1a3 3 0 110 6 3 3 0 010-6zm0 2a.997.997 0 00-1 1 1 1 0 101-1zm44-10v4h-2v-2H49v10H27v-2h20v-8H11v8h2v2H9V28h55zM8 28v4H6v-4h2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Trailer70;
