import * as React from "react";

function Padlock40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M7 37V17h26v20H7zm24-2V19H9v16h22z" />
        <path d="M30 17.226v-5.445C30 6.373 25.518 2 20 2c-5.517 0-10 4.373-10 9.78v5.446h2v-5.445C12 7.489 15.576 4 20 4c4.424 0 8 3.489 8 7.78v5.446h2z" />
        <path d="M26 17.678v-5.8C26 8.626 23.308 6 20 6s-6 2.626-6 5.878v5.8h2v-5.8C16 9.742 17.786 8 20 8c2.215 0 4 1.742 4 3.878v5.8h2zM22.272 30.025l-1.277-3.86c.526-.315.879-.88.879-1.527 0-.99-.823-1.793-1.838-1.793-1.015 0-1.838.803-1.838 1.793 0 .647.353 1.212.88 1.528l-1.278 3.86h4.472zm-6.074-5.387c0-2.106 1.73-3.793 3.838-3.793 2.109 0 3.838 1.687 3.838 3.793 0 .742-.218 1.445-.603 2.04l1.77 5.347h-10.01l1.77-5.347a3.745 3.745 0 01-.603-2.04z" />
      </g>
    </svg>
  );
}

export default Padlock40;
