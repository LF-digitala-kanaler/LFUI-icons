import * as React from "react";

function Heartbeat20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M3.395 3.392A1.29 1.29 0 014.325 3c.354 0 .684.14.93.392l1.248 1.284 1.249-1.284c.491-.504 1.369-.504 1.859 0 .526.54.526 1.453.001 1.993L6.503 8.58 3.395 5.385a1.458 1.458 0 010-1.993zm3.108 8.059l4.543-4.672c1.281-1.318 1.281-3.463-.001-4.782C9.855.773 7.769.7 6.503 1.82A3.266 3.266 0 004.326 1h-.001c-.899 0-1.738.354-2.364.998C.68 3.316.68 5.46 1.961 6.778l4.542 4.673zM18.57 13l-3.55-5.915-4.92 7.874-1.988-3.97L5.514 15h-4.51v2H6.6l1.288-1.989 2.018 4.03 5.079-8.126L17.436 15h1.568v-2z" />
      </g>
    </svg>
  );
}

export default Heartbeat20;