import * as React from "react";

function Apartment24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M22 2v20H2V2h20zm-2 2H4v16h5v-6h6v6h5V4zm-7 12h-2v4h2v-4zm0-6v2h-2v-2h2zm5 0v2h-2v-2h2zM8 10v2H6v-2h2zm5-4v2h-2V6h2zm5 0v2h-2V6h2zM8 6v2H6V6h2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Apartment24;