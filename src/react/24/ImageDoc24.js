import * as React from "react";

function ImageDoc24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M22 2v20H2V2h20zM7.957 13.457L4 17.414V20h9.773l-5.816-6.543zM15 15.415l-1.391 1.39L16.449 20h3.136L15 15.415zM20 4H4v10.584l4.043-4.041 4.234 4.764L15 12.586l5 4.999V4zm-8 1a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default ImageDoc24;