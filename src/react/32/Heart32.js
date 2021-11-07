import * as React from "react";

function Heart32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M25.508 15.89l-9.493 9.492-9.493-9.492c-1.996-1.997-1.996-5.37 0-7.368 1-.998 2.341-1.498 3.684-1.498 1.342 0 2.685.5 3.684 1.498l2.125 2.125 2.125-2.125c2-1.996 5.371-1.995 7.368 0 1.997 1.997 1.997 5.371 0 7.368m1.414-8.782c-2.81-2.81-7.385-2.812-10.196 0l-.71.711-.712-.71c-2.812-2.813-7.387-2.81-10.196 0-2.81 2.81-2.81 7.384 0 10.195L16.015 28.21l10.907-10.906a7.154 7.154 0 002.094-5.099 7.151 7.151 0 00-2.094-5.097"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Heart32;