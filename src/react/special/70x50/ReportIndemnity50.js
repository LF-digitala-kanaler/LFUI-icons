import * as React from "react";

function ReportIndemnity50({ title, titleId, ...props }) {
  return (
    <svg width={70} height={50} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <g fill="#005AA0">
          <path d="M36.322 15.641l-9.447 12.91 1.614 1.182 10.628-14.525-11.791-8.627-10.628 14.524 1.614 1.18 9.447-12.91z" />
          <path d="M25.941 31.802L15.497 24.16l1.285-1.757 2.296 1.672 1.177-1.617-3.908-2.847-3.645 4.982 13.672 10.004 3.647-4.983-7.347-5.376-1.18 1.614 5.732 4.195zM33.512 8.412l-2.159-1.58-2.07-1.514L28 7.073l10.444 7.643 1.285-1.755-6.216-4.549zm1.18-1.614l7.83 5.73-3.646 4.983L25.204 7.506l3.646-4.983.807.59 2.877 2.106 2.159 1.58zM60.363 43.833L31.967 23.055l-1.181 1.614 30.01 21.96 3.61-4.933-30.011-21.96-1.181 1.614L61.61 42.13z" />
        </g>
        <path
          fill="#005AA0"
          d="M14 41v-2h-4v4.475h2V41zM30 43.475h2V39h-8v2h6z"
        />
        <path fill="#E30613" d="M16 41h6v-2h-6z" />
        <path d="M8 44v1h26v-1H8zm28-2v5H6v-5h30z" fill="#005AA0" />
      </g>
    </svg>
  );
}

export default ReportIndemnity50;