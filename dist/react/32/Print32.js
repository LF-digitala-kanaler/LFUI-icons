import * as React from "react";

function Print32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M4 20v-5.786C4 12.99 4.984 12 6.194 12h19.612c1.21 0 2.194.99 2.194 2.214V20h-5.824v2H30v-7.786C30 11.888 28.123 10 25.806 10H6.194C3.877 10 2 11.888 2 14.214V22h7.02v-2H4z" />
          <path d="M8 2h15v10H8V2zm2 2v6h11V4H10zM8 16h16v14H8V16zm2 2v10h12V18H10z" />
          <path d="M12 26h8.065v-2H12zM12 22h8.065v-2H12z" />
        </g>
      </g>
    </svg>
  );
}

export default Print32;
