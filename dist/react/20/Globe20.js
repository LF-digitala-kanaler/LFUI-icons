import * as React from "react";

function Globe20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M2.293 1.707L3.707.293l4.036 4.035-1.415 1.415zM11.793 11.207l1.414-1.414 4.038 4.037-1.415 1.415zM9 15h2v3H9z"
        />
        <path
          fillRule="nonzero"
          d="M7 19v-2h6v2zM13.5 7.561a3.5 3.5 0 10-7-.122 3.5 3.5 0 007 .122zm2 .035a5.5 5.5 0 11-11-.192 5.5 5.5 0 0111 .192z"
        />
        <path d="M14.516 12.19c-2.534 2.446-6.62 2.412-9.11-.077l-.081-.083a6.509 6.509 0 01.16-9.192L4.095 1.4a8.5 8.5 0 1011.81 12.228l-1.39-1.438z" />
      </g>
    </svg>
  );
}

export default Globe20;
