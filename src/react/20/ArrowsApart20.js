import * as React from "react";

function ArrowsApart20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M8.071.83L.48 7.461 8.071 14.3V11h5.933v-.799l2.487 2.301-2.487 2.32v-.796H9.003v2h3.001v3.247l7.512-6.784-7.512-6.69V9H6.07v.855L3.527 7.488 6.07 5.17V6h4.934V4H8.071z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default ArrowsApart20;