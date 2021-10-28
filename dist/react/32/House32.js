import * as React from "react";

function House32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16.004 3.74L3 13.681v14.318h2v-13.33l11.004-8.412L27 14.669v13.33h2V13.681z" />
        <path d="M12 18.009v10h2v-8h4v8h2v-10z" />
      </g>
    </svg>
  );
}

export default House32;