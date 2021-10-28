import * as React from "react";

function Heart40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M32.893 19.402c2.81-2.81 2.81-7.485 0-10.295-2.81-2.81-7.486-2.81-10.295 0L20 11.705l-2.598-2.598c-2.81-2.81-7.485-2.81-10.295 0-2.81 2.81-2.81 7.486 0 10.295L20 32.295l12.893-12.893zm-11.71-11.71c3.591-3.59 9.534-3.59 13.124 0 3.59 3.591 3.59 9.534 0 13.124L20 35.123 5.693 20.816c-3.59-3.59-3.59-9.533 0-13.123s9.533-3.59 13.123 0L20 8.877l1.184-1.184z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Heart40;
