import * as React from "react";

function InfoEnclosed32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M15 23h2v-9h-2zM16.017 9.062a1.5 1.5 0 100 3 1.5 1.5 0 000-3" />
        <path d="M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" />
      </g>
    </svg>
  );
}

export default InfoEnclosed32;