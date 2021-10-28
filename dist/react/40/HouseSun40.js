import * as React from "react";

function HouseSun40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M27 2c0 6.075 4.925 11 11 11v-2a9 9 0 01-9-9h-2zM25 2h-5v2h5zM36 15v5h2v-5zM7 38V25H5v13zM27 25v13h2V25zM15 31h4v7h2v-9h-8v9h2z" />
          <path d="M30.382 27.786l1.236-1.572L17 14.728 2.382 26.214l1.236 1.572L17 17.272zM27.293 11.293l-4 4 1.414 1.414 4-4z" />
        </g>
      </g>
    </svg>
  );
}

export default HouseSun40;
