import * as React from "react";

function Snailmail32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M2 26h28v-2H2zM20 4h2V2h-4v11.343h2z" />
          <path d="M19 6H8v2h11zM15 26v4h2v-4z" />
          <path d="M13 25V11a5 5 0 10-10 0v11h2V11a3 3 0 116 0v14h2zM30 25V11a5 5 0 00-5-5h-3v2h3a3 3 0 013 3v14h2z" />
        </g>
      </g>
    </svg>
  );
}

export default Snailmail32;
