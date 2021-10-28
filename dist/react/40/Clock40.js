import * as React from "react";

function Clock40(props) {
  return (
    <svg width={40} height={40} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M20 2c9.941 0 18 8.059 18 18s-8.059 18-18 18S2 29.941 2 20 10.059 2 20 2zm0 2C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm1 7v9.052l6.734 7.268-1.468 1.36L19 20.836V11h2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Clock40;
