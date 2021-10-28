import * as React from "react";

function OfferMulticolor32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="none">
        <path fill="#E30613" d="M14 19v6h2v-6z" />
        <path fill="#005AA0" d="M8 19v6h2v-6z" />
        <path
          fill="#005AA0"
          d="M4 26.009V13h13v-2H2v17.009h20V16.055h-2v9.954z"
        />
        <path
          d="M8 13V8h8v5H8zm6-2v-1h-4v1h4zM7.63 16.001l-1.323-2.078-1.687 1.074L6.532 18H17v-2zM24.913 8.92l-1.085-2.438-1.064 2.44-2.647-.285 1.582 2.147-1.567 2.155 2.652-.29 1.086 2.436 1.063-2.44 2.647.285L26 10.784l1.566-2.156-2.652.292zm6.393-2.463l-3.139 4.32 3.183 4.32-5.326-.574-2.137 4.902-2.182-4.898-5.313.584 3.138-4.32-3.183-4.32 5.326.574 2.137-4.902 2.182 4.898 5.314-.584z"
          fill="#005AA0"
        />
      </g>
    </svg>
  );
}

export default OfferMulticolor32;
