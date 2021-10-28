import * as React from "react";

function Apartment40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M36 2v34h2v2H13v-2h3V26h8v10h10V4H6v32h4v2H2v-2h2V2h32zM22 28h-4v8h4v-8zm10-2v6h-6v-6h6zm-18 0v6H8v-6h6zm16 2h-2v2h2v-2zm-18 0h-2v2h2v-2zm20-12v6h-6v-6h6zm-9 0v6h-6v-6h6zm-9 0v6H8v-6h6zm16 2h-2v2h2v-2zm-9 0h-2v2h2v-2zm-9 0h-2v2h2v-2zM32 6v6h-6V6h6zm-9 0v6h-6V6h6zm-9 0v6H8V6h6zm16 2h-2v2h2V8zm-9 0h-2v2h2V8zm-9 0h-2v2h2V8z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Apartment40;
