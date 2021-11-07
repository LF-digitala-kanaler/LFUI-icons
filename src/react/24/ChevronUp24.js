import * as React from "react";

function ChevronUp24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M6.6 14.186L8.014 15.6l4-4 4 4 1.414-1.414-4-4.001-1.415-1.413-1.413 1.413z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default ChevronUp24;