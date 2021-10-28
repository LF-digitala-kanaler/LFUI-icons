import * as React from "react";

function Pencil24(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M4 3v18h14.001l-.007-5.001-2 .002.005 3H6v-14h10V3z" />
        <path d="M19.778 7.967l-.739-.739-6.032 6.033V14h.739l6.032-6.033zM14.574 16h-3.567v-3.567L19.039 4.4l3.568 3.567L14.574 16z" />
      </g>
    </svg>
  );
}

export default Pencil24;