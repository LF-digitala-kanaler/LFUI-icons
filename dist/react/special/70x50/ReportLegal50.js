import * as React from "react";

function ReportLegal50({ title, titleId, ...props }) {
  return (
    <svg width={70} height={50} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path
          d="M35 13a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 110-12 6 6 0 010 12z"
          fill="#005AA0"
        />
        <path
          fill="#005AA0"
          d="M30.877 8H17v2h13.877zM14 31v1.088C14 33.694 15.321 35 16.957 35h6.086C24.68 35 26 33.694 26 32.088V31H14zm9.043 6h-6.086C14.222 37 12 34.804 12 32.088V29h16v3.088C28 34.804 25.778 37 23.043 37z"
        />
        <path
          fill="#005AA0"
          d="M26.054 30.187l1.892-.646-7-20.51h-1.892l-7 20.51 1.892.646L20 12.45zM44 32.088C44 33.694 45.321 35 46.957 35h6.086C54.68 35 56 33.694 56 32.088V31H44v1.088zM53.043 37h-6.086C44.222 37 42 34.804 42 32.088V29h16v3.088C58 34.804 55.778 37 53.043 37z"
        />
        <path
          fill="#005AA0"
          d="M56.054 30.187l1.892-.646-7-20.51h-1.892l-7 20.51 1.892.646L50 12.45z"
        />
        <path
          fill="#005AA0"
          d="M39.481 10H53V8H39.481zM47 45H24v-1h10V15.632h2V44h2V13.632h-6V42H22v5h27v-5h-9v2h7z"
        />
        <path
          d="M37.5 9a2.5 2.5 0 10-2.5 2.5v-2a.5.5 0 11.5-.5h2z"
          fill="#E30613"
        />
      </g>
    </svg>
  );
}

export default ReportLegal50;
