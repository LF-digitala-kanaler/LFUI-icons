import * as React from "react";

function ChevronLeft20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M12.186 15.6l1.414-1.414-4-4 4-4-1.414-1.414-4.001 4-1.413 1.415L8.185 11.6z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default ChevronLeft20;