import * as React from "react";

function CardBlock70({ title, titleId, ...props }) {
  return (
    <svg
      width={70}
      height={70}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M50.867 12C53.147 12 55 13.828 55 16.09V31.25c5.298 2.314 9 7.6 9 13.751 0 8.284-6.716 15-15 15-7.257 0-13.31-5.153-14.7-12H10.133C7.853 48 6 46.172 6 43.91V16.09C6 13.829 7.854 12 10.133 12h40.734zM36 45c0 7.18 5.82 13 13 13 3.48 0 6.642-1.368 8.976-3.596L39.234 36.42A12.95 12.95 0 0036 45zm13-13c-3.17 0-6.076 1.135-8.333 3.021l18.646 17.894A12.943 12.943 0 0062 45c0-7.18-5.82-13-13-13zm4-6H8v17.91c0 1.15.952 2.09 2.133 2.09h23.9c-.022-.33-.033-.664-.033-1 0-8.284 6.716-15 15-15 1.385 0 2.727.188 4 .54V26zm-31 7v2H11v-2h11zm8-4v2H11v-2h19zm23-11H8v6h45v-6zm-2.133-4H10.133c-1.15 0-2.083.89-2.131 2h44.994l-.001-.058C52.917 14.859 51.997 14 50.867 14z"
          id="card-block-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#card-block-70_svg__a"
        />
      </g>
    </svg>
  );
}

export default CardBlock70;