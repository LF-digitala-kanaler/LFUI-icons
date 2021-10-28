import * as React from "react";

function TabDamage70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="none">
        <path fill="#005AA0" d="M56 12H14v45h9v2H12V10h46v49H34.059v-2H56z" />
        <path d="M18 53h34V16H18v37zm-2-39h38v41H16V14z" fill="#005AA0" />
        <path
          fill="#005AA0"
          d="M29.877 42.018l-1.898 5.453 5.66 2.237v4.706h2v-6.066l-5.14-2.031 1.838-5.281-5.347-2.754-3.415 1.289H17v2h6.94l2.925-1.104zM45.193 23.602l-6.804-.002-1.755-3.041-3.473-.897L33 15.025l-1.998.07.214 6.13 4.106 1.06 1.912 3.315 5.96.002.002 5.208 8.808 6.354 1.17-1.622-7.978-5.756z"
        />
        <path fill="#E30613" d="M25 59h7v-2h-7z" />
      </g>
    </svg>
  );
}

export default TabDamage70;
