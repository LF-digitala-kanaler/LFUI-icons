import * as React from "react";

function Cup40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M11 5v11c0 4.937 4.048 9 9 9s9-4.063 9-9V5H11zm20 11c0 6.04-4.942 11-11 11S9 22.04 9 16V3h22v13z" />
        <path d="M9.594 8H19.5V6H9.594zM21 26v5.222a5.775 5.775 0 005.775 5.775v-2A3.775 3.775 0 0123 31.222V26h-2zM19.005 26v5.222a5.775 5.775 0 01-5.775 5.775v-2a3.775 3.775 0 003.775-3.775V26h2z" />
        <path d="M10 37h20v-2H10zM30.406 8c2.287 0 4.131 1.797 4.131 4 0 2.203-1.844 4-4.131 4v2c3.38 0 6.131-2.68 6.131-6s-2.75-6-6.131-6v2zM9.594 6c-3.38 0-6.131 2.68-6.131 6s2.75 6 6.131 6v-2c-2.287 0-4.131-1.797-4.131-4 0-2.203 1.844-4 4.131-4V6z" />
      </g>
    </svg>
  );
}

export default Cup40;