import * as React from "react";

function Heartbeat32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M5.762 5.767A2.575 2.575 0 017.612 5c.704 0 1.361.272 1.85.767L11 7.327l1.54-1.56c.974-.99 2.722-.99 3.698 0 1.013 1.027 1.013 2.762 0 3.789L11 14.868 5.762 9.556c-1.013-1.027-1.013-2.762 0-3.79zM11 17.715l6.662-6.755c1.794-1.82 1.794-4.778 0-6.597A4.559 4.559 0 0014.39 3a4.557 4.557 0 00-3.273 1.363L11 4.48l-.115-.117A4.561 4.561 0 007.611 3a4.559 4.559 0 00-3.273 1.363c-1.794 1.819-1.794 4.778 0 6.597L11 17.715zM28.614 20l-4.557-7.895-7.934 11.907-2.952-5.899L9.47 23H2v2h8.466l2.357-3.113 3.054 6.101 8.058-12.093L27.46 22h2.59v-2z" />
      </g>
    </svg>
  );
}

export default Heartbeat32;
