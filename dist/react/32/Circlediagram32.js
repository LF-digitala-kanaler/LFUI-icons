import * as React from "react";

function Circlediagram32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M17 4c7.18 0 13 5.82 13 13s-5.82 13-13 13S4 24.18 4 17v-1h12V4h1zm1 2.045V18H6.045C6.55 23.607 11.262 28 17 28c6.075 0 11-4.925 11-11 0-5.738-4.393-10.45-10-10.955zM15 2v13H2v-1C2 7.373 7.373 2 14 2h1zm-2 2.05A10.003 10.003 0 004.05 13H13V4.05z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Circlediagram32;
