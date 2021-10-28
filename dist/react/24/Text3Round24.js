import * as React from "react";

function Text3Round24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7m0 16c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9" />
        <path d="M11.083 13.641c.024.624.42 1.032.996 1.032.563 0 .947-.504.947-1.27-.024-1.345-1.115-1.536-1.991-1.345v-.252l1.188-2.674H9.872V7.704h4.545v.252l-1.427 2.94c1.128.226 1.643 1.33 1.643 2.493 0 1.703-1.007 2.831-2.53 2.831-1.476 0-2.471-1.03-2.507-2.579h1.487z" />
      </g>
    </svg>
  );
}

export default Text3Round24;
