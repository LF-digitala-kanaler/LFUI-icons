import * as React from "react";

function Bell24(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M12 2a2 2 0 012 2v.178c3.261.627 5 2.902 5 6.635v3.982l2.017 4.705h-6.058a3 3 0 01-5.918 0H2.983L5 14.795v-3.982c0-3.733 1.739-6.008 5-6.635V4a2 2 0 012-2zm.866 17.5h-1.732a1 1 0 001.732 0zM12 6c-3.455 0-5 1.497-5 4.813v4.392L6.017 17.5h11.966L17 15.205v-4.392C17 7.497 15.455 6 12 6z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Bell24;