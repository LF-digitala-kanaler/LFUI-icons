import * as React from "react";

function Farm24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M2 22v-2h.999v-7.555l-.33.298-1.338-1.486L12 1.655l10.669 9.602-1.338 1.486-.332-.3V20H22v2H2zM12 4.345l-7.001 6.3L5 20h2.999L8 12.11h8L15.999 20H19l-.001-9.356L12 4.345zM13.999 16l-3 4h3v-4zm-1.083-1.89L10 14.112 9.999 18l2.917-3.89zM12 7a2 2 0 012 2v1h-4V9a2 2 0 012-2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Farm24;