import * as React from "react";

function Shield40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M29.545 2c0 2.88 2.728 5.76 5.455 5.76v12.96C35 27.44 30 33.2 20 38 10 33.2 5 27.44 5 20.72V7.76c2.727 0 5.455-2.88 5.455-5.76h19.09zm-1.7 2h-15.69C11.417 6.479 9.39 8.624 7 9.425V20.72c0 5.625 4.21 10.651 13 15.053 8.79-4.402 13-9.428 13-15.053V9.425C30.611 8.624 28.584 6.479 27.844 4zm-3.865 9.293l1.415 1.414-3.793 3.793 3.793 3.793-1.415 1.414-3.793-3.793-3.792 3.793-1.415-1.414 3.793-3.793-3.793-3.793 1.415-1.414 3.792 3.792 3.793-3.792z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Shield40;
