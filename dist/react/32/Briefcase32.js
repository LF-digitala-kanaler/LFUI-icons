import * as React from "react";

function Briefcase32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M22 4v4h5.5a2.5 2.5 0 012.5 2.5v15a2.5 2.5 0 01-2.5 2.5h-23A2.5 2.5 0 012 25.5v-15A2.5 2.5 0 014.5 8H10V4h12zm6 9.079L24.35 16H7.65L4 13.08V25.5a.5.5 0 00.5.5H8V16h2v10h12V16h2v10h3.5a.5.5 0 00.5-.5V13.079zM18 16v2h-4v-2h4zm9.5-6h-23a.5.5 0 00-.5.5v.02L8.35 14h15.3L28 10.519V10.5a.5.5 0 00-.5-.5zM20 6h-8v2h8V6z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Briefcase32;
