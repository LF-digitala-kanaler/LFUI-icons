import * as React from "react";

function Cup32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M23 30H9v-2h2c1.132 0 2-.76 2-1.625v-3.887A9.004 9.004 0 017 14c-2.68 0-5-2.003-5-4.5C2 6.992 4.195 5 6.857 5H7V2h18v3c2.734 0 5 1.983 5 4.5S27.734 14 25 14a9.004 9.004 0 01-6 8.488v3.887c0 .866.868 1.625 2 1.625h2v2zm-7-7c-.338 0-.671-.019-1-.055v3.43c0 .588-.152 1.14-.421 1.626h2.842A3.341 3.341 0 0117 26.375v-3.43A9.099 9.099 0 0116 23zm7-19H9v1h6v2H9v7a7 7 0 0014 0V4zm2 3v5c1.684 0 3-1.151 3-2.5S26.684 7 25 7zM7 7h-.143C5.26 7 4 8.142 4 9.5 4 10.822 5.365 12 7 12V7z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Cup32;
