import * as React from "react";

function Suitcase20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <g transform="translate(1 1)" fill="currentColor" fillRule="evenodd">
        <path
          d="M2.5 5c-.274 0-.5.226-.5.5v9c0 .274.226.5.5.5h13c.274 0 .5-.226.5-.5v-9c0-.274-.226-.5-.5-.5h-13zm0-2h13C16.879 3 18 4.122 18 5.5v9c0 1.378-1.121 2.5-2.5 2.5h-13A2.503 2.503 0 010 14.5v-9C0 4.122 1.121 3 2.5 3z"
          fillRule="nonzero"
        />
        <path
          fillRule="nonzero"
          d="M3.443 9.3L2.7 7.443 7.057 5.7 7.8 7.557z"
        />
        <circle cx={7.5} cy={10.5} r={1.5} />
        <circle cx={13} cy={8} r={2} />
        <path
          fillRule="nonzero"
          d="M.086 11.5L1.5 10.086 6.914 15.5 5.5 16.914zM12.5 16.914L11.086 15.5l5.414-5.414 1.414 1.414zM14 4.5h-2C12 3.151 10.684 2 9 2S6 3.151 6 4.5H4C4 1.983 6.266 0 9 0s5 1.983 5 4.5z"
        />
      </g>
    </svg>
  );
}

export default Suitcase20;
