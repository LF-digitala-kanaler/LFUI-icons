import * as React from "react";

function Travel32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M13.463 27.146l-.617.17-8.192-.931-4.452-4.182 5.815-1.637 2.82 1.518 2.054-.6 14.976-4.376 5.131 1.103.167.572a3.094 3.094 0 01-2.102 3.837l-6.49 1.898-4.498 4.793-5.575 1.63.963-3.795zm.715-2.817l1.938.492-.816 3.217 1.69-.494 4.499-4.793.262-.077 6.752-1.974c.397-.116.679-.438.762-.816l-3.323-.714-14.49 4.233-2.84.83-2.83-1.523-1.63.459 1.387 1.304 7.148.812 1.342-.37.149-.586z" />
        <path d="M13.457 19.735l5.108 1.237.47-1.944-5.627-1.363-5.63 1.646 3.685 3.251 1.324-1.5-.964-.85zM20 15.494a.5.5 0 10-1 .012.5.5 0 001-.012zm2-.023a2.5 2.5 0 11-5 .058 2.5 2.5 0 015-.058zM10 1C7.592 1 5.558 2.595 5.097 4.743 2.78 5.138 1 7.027 1 9.333 1 11.931 3.257 14 6 14h2v-2H6c-1.676 0-3-1.214-3-2.667 0-1.452 1.324-2.666 3-2.666h1v-1C7 4.214 8.325 3 10 3c1.676 0 3 1.214 3 2.667v1h1c1.675 0 3 1.214 3 2.666 0 .438-.119.86-.345 1.24l1.72 1.022A4.41 4.41 0 0019 9.333c0-2.306-1.779-4.195-4.097-4.59C14.443 2.595 12.409 1 10 1z" />
        <path d="M14 12.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm2 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
      </g>
    </svg>
  );
}

export default Travel32;
