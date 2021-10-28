import * as React from "react";

function Atv24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M13.3 2.732L16.5 7h2.118l1.233 2.466c.64.067 1.263.225 1.852.468l.3.132-.853 1.81a4.692 4.692 0 00-2.007-.447c-.733 0-1.476.244-2.16.657l1.115 1.206a3.5 3.5 0 11-1.529 1.293l-1.106-1.196c-.833.976-1.4 2.202-1.458 3.408L14 17h-2a6.4 6.4 0 01.08-1h-1.494l-2.282-2.282-.859.89a3.48 3.48 0 01.55 1.7L8 16.5a3.5 3.5 0 11-2.074-3.197l.964-.999-.597-.597 1.414-1.414L11.415 14h1.29c.98-2.084 2.874-3.813 4.988-4.377L17.381 9H15.5l-.54-.72-4.054 3.04L8.585 9H3v1h2v2H1V7h8.414l1.68 1.679 2.666-2-1.06-1.412-1.253.627-.894-1.788 2.746-1.374zM19.5 15a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-15 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Atv24;
