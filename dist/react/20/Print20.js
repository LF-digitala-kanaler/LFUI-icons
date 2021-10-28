import * as React from "react";

function Print20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <path
          d="M5 15H1V9.5A3.5 3.5 0 014.5 6H5V1h10v5h.5A3.5 3.5 0 0119 9.5V15h-4v4H5v-4zm0-2v-2h10v2h2V9.5A1.5 1.5 0 0015.5 8h-11A1.5 1.5 0 003 9.5V13h2zm2-7h6V3H7v3zm0 7v4h6v-4H7z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Print20;