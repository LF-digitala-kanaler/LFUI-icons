import * as React from "react";

function Truck32({ title, titleId, ...props }) {
  return (
    <svg width={29} height={25} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M-1-4h32v32H-1z" />
        <path
          d="M23.504 10.64h3.306l.055 5.97A4.24 4.24 0 1120.5 20.2h-5.4v-1a6.56 6.56 0 00-12.874-1.787L.3 16.87a8.546 8.546 0 012.919-4.377V.118h12.857l3.317 10.522h2.111V5.173c0-.091-.015-.202-.042-.307A1.16 1.16 0 0020.339 4V2a3.16 3.16 0 013.058 2.363c.069.263.107.542.107.81v5.467zM10.54 2.118V9h-2V2.118H5.219v9.191A8.561 8.561 0 0117.041 18.2h4.002a4.239 4.239 0 013.817-2.158l-.032-3.402h-6.901L14.61 2.118h-4.07zM8.539 24.52a5.32 5.32 0 110-10.64 5.32 5.32 0 010 10.64zm0-2a3.32 3.32 0 100-6.64 3.32 3.32 0 000 6.64zm16.2 0a2.24 2.24 0 100-4.48 2.24 2.24 0 000 4.48z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Truck32;
