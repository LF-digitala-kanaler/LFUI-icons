import * as React from "react";

function Offer32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M5 24.009V13h10v-2H3v15.009h17v-6.954h-2v4.954z" />
        <path d="M10 11.009V10h3V8H8v5.009h5v-2zM22.915 9.753l-1.183-2.654-1.158 2.657-2.882-.31 1.722 2.336-1.705 2.348 2.887-.317 1.183 2.654 1.158-2.657 2.882.31-1.722-2.337 1.705-2.347-2.887.317zm7.163-2.8l-3.503 4.822 3.552 4.82-5.944-.64-2.384 5.47-2.436-5.465-5.93.652 3.503-4.821-3.552-4.821 5.944.64 2.384-5.47 2.436 5.465 5.93-.651z" />
      </g>
    </svg>
  );
}

export default Offer32;
