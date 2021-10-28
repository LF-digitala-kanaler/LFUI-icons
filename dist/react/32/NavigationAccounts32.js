import * as React from "react";

function NavigationAccounts32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M10 24V13.989L27 14l-.148-.011c.59.089 1.148.614 1.148 1.011v9c0 .448-.552 1-1 1H5c-.448 0-1-.552-1-1V7c0-.448.552-1 1-1h5c.448 0 1 .552 1 1v3h14c.578 0 .95.339 1.003 1.071L26 12l2 .281V11c-.13-1.86-1.382-3-3-3H13V7c0-1.552-1.448-3-3-3H5C3.448 4 2 5.448 2 7v17c0 1.552 1.448 3 3 3h22c1.552 0 3-1.448 3-3v-9c0-1.486-1.406-2.719-2.852-2.989L26.036 12H8v12c0 .499-.516 1-1 1h3v-1z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default NavigationAccounts32;
