import * as React from "react";

function CardBlock24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M13.008 15H3.992C4.004 15 4 6.009 4 6.009 4 6.002 17.006 6 17.006 6 16.999 6 17 12.063 17 12.063h2V6.005A2 2 0 0017.006 4H3.994A2.003 2.003 0 002 6.009v8.982C2 16.101 2.9 17 3.992 17h9.016v-2zm0 0H3.992C4.004 15 4 6.009 4 6.009 4 6.002 17.006 6 17.006 6 16.999 6 17 12.063 17 12.063h2V6.005A2 2 0 0017.006 4H3.994A2.003 2.003 0 002 6.009v8.982C2 16.101 2.9 17 3.992 17h9.016v-2z" />
        <path d="M17.5 20a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 2a5.5 5.5 0 110-11 5.5 5.5 0 010 11z" />
        <path d="M13.586 14L20 20.414 21.414 19 15 12.586zM3 10h15V8H3z" />
      </g>
    </svg>
  );
}

export default CardBlock24;
