import * as React from "react";

function ChevronUp32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M24.492 18.621l-1.414 1.414-7.072-7.07-7.072 7.07L7.52 18.62l7.071-7.07 1.415-1.414 1.413 1.413z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default ChevronUp32;