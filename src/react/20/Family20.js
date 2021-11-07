import * as React from "react";

function Family20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M3 19H1v-5.469c0-2.316 1.454-4.145 3.846-4.519l.308 1.976C3.768 11.205 3 12.171 3 13.531V19z" />
        <path d="M8.538 6C6.892 6 5.78 5.18 5.18 3.974l1.791-.89c.286.575.75.918 1.566.918h4.147l.177.778a5.5 5.5 0 11-1.191-2.356l-1.516 1.305A3.5 3.5 0 1011 6.009c0-.001-.82-.004-2.462-.008zM19.018 19h-2v-1.375c0-.817-.813-1.613-2.104-1.936l.485-1.94c2.098.524 3.619 2.015 3.619 3.876V19zM8 19h2v-1.375c0-.817.813-1.613 2.104-1.936l-.485-1.94C9.521 14.273 8 15.764 8 17.625V19z" />
        <path d="M13.5 16a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </g>
    </svg>
  );
}

export default Family20;