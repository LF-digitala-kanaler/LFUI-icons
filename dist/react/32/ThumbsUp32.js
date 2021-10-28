import * as React from "react";

function ThumbsUp32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M22.153 4l-.69 4.83-1.24 2.17H28v6h-.501l.001 3h-.501L27 23h-.501l.001 3H13.838L9 24.387V27H4V10h5v3h1.381l1.28-2.557 3.024-3.53L16.434 4h5.719zM6.999 12h-1v13h1V12zm12.848-6h-2.282l-1.208 2.014-.098.137-2.92 3.405L11.618 15H9v7.279L14.163 24h10.336v-.586L22.086 21h2.913v-.586L22.579 18h2.92v-.586L23.079 15H26v-2h-9.222l2.76-4.833.31-2.167z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default ThumbsUp32;