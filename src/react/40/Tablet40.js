import * as React from "react";

function Tablet40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <g transform="translate(6 3)" fill="currentColor">
          <path
            d="M2-1h24a3 3 0 013 3v30a3 3 0 01-3 3H2a3 3 0 01-3-3V2a3 3 0 013-3zm0 2a1 1 0 00-1 1v30a1 1 0 001 1h24a1 1 0 001-1V2a1 1 0 00-1-1H2z"
            fillRule="nonzero"
          />
          <circle cx={14} cy={30.5} r={1.5} />
          <path
            fillRule="nonzero"
            d="M9.293 3.293l-6 6 1.414 1.414 6-6zM3.707 6.707l3-3-1.414-1.414-3 3z"
          />
        </g>
      </g>
    </svg>
  );
}

export default Tablet40;