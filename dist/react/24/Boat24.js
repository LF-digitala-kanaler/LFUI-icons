import * as React from "react";

function Boat24(props) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M17.477 16.52a3.807 3.807 0 002.866.09l.31-.114.694 1.876-.31.114a5.807 5.807 0 01-4.371-.138 3.807 3.807 0 00-2.866-.091l-.718.265a6 6 0 01-4.164 0l-.718-.265a3.807 3.807 0 00-2.866.09 5.807 5.807 0 01-4.37.14l-.311-.115.694-1.876.31.115c.93.344 1.959.311 2.866-.091a5.807 5.807 0 014.37-.14l.72.267a4 4 0 002.775 0l.718-.266a5.807 5.807 0 014.371.139zM11 5.974l6.52 1.484a2 2 0 011.393 2.742l-2.24 5.196-1.837-.792 2.24-5.196L11 8.026 4.924 9.408l2.24 5.196-1.836.792-2.24-5.196A2 2 0 014.48 7.458L11 5.974zM12 10v4h-2v-4h2zm-2-9a1 1 0 012 0v1h1.417a3 3 0 012.769 1.846l.737 1.77-1.846.769-.737-1.77A1 1 0 0013.417 4H8.583a1 1 0 00-.923.615l-.737 1.77-1.846-.77.737-1.769A3 3 0 018.584 2H10V1z"
          id="boat-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#boat-24_svg__a"
          transform="translate(1 2)"
        />
      </g>
    </svg>
  );
}

export default Boat24;