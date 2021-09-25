import * as React from "react";

function SvgNavigationPhone32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M9 5.319C9 4.628 9.625 4 10.308 4h11.384C22.375 4 23 4.628 23 5.319V26.68c0 .691-.624 1.319-1.308 1.319H10.308A1.31 1.31 0 019 26.681V5.32zM10.308 30h11.384C23.482 30 25 28.474 25 26.681V5.32C25 3.525 23.482 2 21.692 2H10.308C8.518 2 7 3.525 7 5.319V26.68A3.31 3.31 0 0010.308 30z"
          fillRule="nonzero"
        />
        <path fillRule="nonzero" d="M23 10V8H9v2zM23 23v-2H9v2z" />
        <path d="M16 24a1.5 1.5 0 110 3 1.5 1.5 0 010-3" />
      </g>
    </svg>
  );
}

export default SvgNavigationPhone32;
