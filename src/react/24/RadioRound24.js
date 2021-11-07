import * as React from "react";

function RadioRound24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12 5c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" />
        <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 2.5a4 4 0 110-8 4 4 0 010 8z" />
      </g>
    </svg>
  );
}

export default RadioRound24;