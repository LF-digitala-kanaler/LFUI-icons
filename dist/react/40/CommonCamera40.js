import * as React from "react";

function CommonCamera40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M29.987 10.8H35.5a2.5 2.5 0 012.5 2.5v20.2a2.5 2.5 0 01-2.5 2.5h-31A2.5 2.5 0 012 33.5V13.3a2.5 2.5 0 012.5-2.5h5.513l3.039-4.664A2.5 2.5 0 0115.146 5h9.708a2.5 2.5 0 012.094 1.136l3.039 4.664zM4.5 12.8a.5.5 0 00-.5.5v20.2a.5.5 0 00.5.5h31a.5.5 0 00.5-.5V13.3a.5.5 0 00-.5-.5h-6.598l-3.63-5.573A.5.5 0 0024.855 7h-9.708a.5.5 0 00-.419.227l-3.63 5.573H4.5z" />
          <path d="M29 22a9 9 0 10-18 0 9 9 0 0018 0zm-16 0a7 7 0 1114 0 7 7 0 01-14 0z" />
        </g>
      </g>
    </svg>
  );
}

export default CommonCamera40;
