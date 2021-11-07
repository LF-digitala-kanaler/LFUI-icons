import * as React from "react";

function TabBank70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="none">
        <path
          d="M9 18.998v32.004c0 .547.45.998.991.998h50.018a.997.997 0 00.991-.998V18.998c0-.547-.45-.998-.991-.998H9.991a.997.997 0 00-.991.998zm-2 0A2.997 2.997 0 019.991 16h50.018A3.001 3.001 0 0163 18.998v32.004A2.997 2.997 0 0160.009 54H9.991A3.001 3.001 0 017 51.002V18.998z"
          fill="#005AA0"
        />
        <path
          fill="#005AA0"
          d="M63 23H7.144v2H63zM62.056 30H8.146v2h53.91zM32 41H13v2h19z"
        />
        <path fill="#E30613" d="M52 35h-2v7h7v-2h-5zM24 46H13v2h11z" />
      </g>
    </svg>
  );
}

export default TabBank70;