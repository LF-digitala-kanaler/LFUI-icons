import * as React from "react";

function UserHappy70({ title, titleId, ...props }) {
  return (
    <svg
      width={70}
      height={70}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M26 0c7.365 0 14.239 3.08 19.13 8.392l-1.47 1.355A23.929 23.929 0 0026 2C12.745 2 2 12.745 2 26s10.745 24 24 24 24-10.745 24-24a23.95 23.95 0 00-1.472-8.296H30.167c-7.39 0-12.56-3.081-14.49-8.345l1.878-.689c1.619 4.417 6.01 7.034 12.612 7.034H49.89l.252.628A25.93 25.93 0 0152 26c0 14.36-11.64 26-26 26S0 40.36 0 26 11.64 0 26 0zm9.23 35.362l1.54 1.276C33.955 40.038 30.11 42 25.992 42c-4.11 0-7.947-1.953-10.761-5.342l1.538-1.278c2.448 2.948 5.733 4.62 9.223 4.62 3.497 0 6.788-1.679 9.238-4.638zM36.5 22c2.454 0 4.5 1.754 4.5 4h-2c0-1.067-1.088-2-2.5-2s-2.5.933-2.5 2h-2c0-2.246 2.046-4 4.5-4zm-21 0c2.454 0 4.5 1.754 4.5 4h-2c0-1.067-1.088-2-2.5-2s-2.5.933-2.5 2h-2c0-2.246 2.046-4 4.5-4z"
          id="user-happy-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#user-happy-70_svg__a"
          transform="translate(9 10)"
        />
      </g>
    </svg>
  );
}

export default UserHappy70;