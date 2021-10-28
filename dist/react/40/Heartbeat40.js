import * as React from "react";

function Heartbeat40(props) {
  return (
    <svg width={40} height={40} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M29.017 19.124l5.941 9.626H38v2h-4.158l-4.86-7.874L19.905 37l-3.627-7.051-2.95 4.302H2v-2h10.273l4.25-6.198 3.573 6.949 8.921-13.877zM20.374 5.607a5.357 5.357 0 010 7.717L12 21.388l-8.374-8.064a5.357 5.357 0 010-7.717 5.698 5.698 0 017.904 0l.47.452.47-.452a5.698 5.698 0 017.904 0zm-6.517 1.44L12 8.837l-1.857-1.788a3.698 3.698 0 00-5.22.089 3.357 3.357 0 00.09 4.746L12 18.612l6.987-6.729a3.357 3.357 0 000-4.835 3.698 3.698 0 00-5.13 0z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Heartbeat40;
