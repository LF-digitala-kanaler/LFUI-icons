import * as React from "react";

function Prevent32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M24 17.242c0 3.41-5.227 6.981-7.988 8.5C13.246 24.183 8 20.554 8 17.241v-6.88A6.075 6.075 0 0011.362 7h9.307A6.393 6.393 0 0024 10.331v6.911zM22.25 5H9.75c0 1.912-1.798 3.75-3.75 3.75v8.492C6 23.048 16 28 16 28s10-4.797 10-10.758V8.75c-1.837 0-3.75-1.876-3.75-3.75z" />
        <path
          fillRule="nonzero"
          d="M19.907 12.6l-4.64 4.614-2.343-2.295-1.424 1.405 3.753 3.723 6.063-6.029z"
        />
      </g>
    </svg>
  );
}

export default Prevent32;