import * as React from "react";

function Boat32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M22.79 6.652c.246.16.438.346.583.56.057.085.103.168.146.256a4.396 4.396 0 01.087.197l1.826 4.698-1.864.724c-.71-1.827-.71-1.827-1.795-4.628l-.015-.03c-.06-.133-.024-.078-.056-.1-.475-.307-1.96-.54-4.84-.54h-1.716c-2.874.004-4.36.238-4.839.546-.035.023 0-.028-.056.093l-1.819 4.677-1.864-.725c.712-1.83.712-1.83 1.864-4.783.015-.034.037-.084.058-.127a1.95 1.95 0 01.148-.257c.146-.214.34-.4.587-.56.804-.517 2.305-.795 4.92-.853V4.425c0-1.047.815-1.925 1.858-1.925 1.044 0 1.86.878 1.86 1.925v1.373c2.621.054 4.125.333 4.927.854zM1.456 27.483l1.088-1.678a3.446 3.446 0 003.763.03 6.983 6.983 0 017.7-.028l-1.086 1.68c-1.705-1.104-3.816-1.096-5.529.03a5.452 5.452 0 01-5.936-.034zm11.443 0l1.088-1.678a3.446 3.446 0 003.764.03 6.983 6.983 0 017.7-.028l-1.087 1.68c-1.705-1.104-3.816-1.096-5.529.03a5.452 5.452 0 01-5.936-.034zm11.437 0l1.089-1.678a3.452 3.452 0 003.777.022l1.07 1.69a5.452 5.452 0 01-5.936-.034zM27.7 14.836c.347.573.396 1.292.114 1.949L24.27 24.18l-1.804-.864 3.526-7.356a.115.115 0 00-.006-.093l-.092-.006-9.898-1.352-9.837 1.344-.181.008c.02.026.018.068.015.063l3.524 7.364-1.805.863-3.539-7.398A2.112 2.112 0 014.3 14.83c.36-.593.983-.962 1.662-.969l10.034-1.37 10.108 1.38a1.932 1.932 0 011.596.965z" />
        <path d="M15 16h2v6.608h-2z" />
      </g>
    </svg>
  );
}

export default Boat32;
