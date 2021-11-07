import * as React from "react";

function Shield20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M15 1H5c0 1.53-1.438 3-3 3v6.794c0 4.644 8 8.306 8 8.306s8-3.537 8-8.306V4c-1.47 0-3-1.5-3-3m-1.517 2A5.605 5.605 0 0016 5.517v5.277c0 2.314-3.624 4.85-5.99 6.079C7.638 15.614 4 13.051 4 10.794V5.55A5.299 5.299 0 006.55 3h6.933" />
        <path
          fillRule="nonzero"
          d="M6.5 7.414L7.914 6l5.657 5.657-1.414 1.414z"
        />
        <path
          fillRule="nonzero"
          d="M12.157 6l1.414 1.414-5.657 5.657L6.5 11.657z"
        />
      </g>
    </svg>
  );
}

export default Shield20;