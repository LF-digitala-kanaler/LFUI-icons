import * as React from "react";

function DigitalServices40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M34 21h-5c-.764 0-1 .254-1 1.154v9.692c0 .9.236 1.154 1 1.154h5c.764 0 1-.254 1-1.154v-9.692c0-.9-.236-1.154-1-1.154zm-17 6H7.111c-2.544 0-4.02-1.383-4.107-3.843L3 22.923V9.077C3 6.55 4.398 5.09 6.876 5.004L7.11 5H28.89c2.544 0 4.02 1.383 4.107 3.843l.004.234V19h1c1.835 0 2.92 1.099 2.996 2.946l.004.208v9.692C37 33.818 35.903 35 34 35h-5c-1.903 0-3-1.182-3-3.154V27h-7v4h4v2H13v-2h4v-4zm14.5 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM28.889 7H7.11c-1.463 0-2.063.535-2.108 1.902L5 9.077v13.846c0 1.437.54 2.03 1.933 2.074L7.11 25H26v-2.846c0-1.902 1.02-3.069 2.8-3.15L29 19h2V9.077c0-1.437-.54-2.03-1.933-2.074L28.89 7z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default DigitalServices40;
