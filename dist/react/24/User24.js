import * as React from "react";

function User24({ title, titleId, ...props }) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M8.723 3.51a8.7 8.7 0 016.418 2.816L13.67 7.68a6.723 6.723 0 101.512 2.681H10.01c-2.159 0-4.47-1.245-5.125-3.032l1.878-.688c.33.899 1.854 1.72 3.247 1.72h6.56l.253.628a8.723 8.723 0 11-8.1-5.48zm1.808 11.474l1.299 1.52c-.886.757-1.972 1.177-3.118 1.177-1.134 0-2.21-.412-3.09-1.154l1.288-1.53c.528.446 1.151.684 1.802.684.658 0 1.287-.243 1.819-.697zm1-4.203c1.19 0 2.154.965 2.154 2.154h-1.5a.654.654 0 10-1.308 0h-1.5c0-1.19.965-2.154 2.154-2.154zm-5.616 0c1.19 0 2.154.965 2.154 2.154h-1.5a.654.654 0 10-1.309 0h-1.5c0-1.19.965-2.154 2.155-2.154zm13.552-5.743l.81 1.828-2.695 1.195-.811-1.828 2.696-1.195zm-2.298-2.664l1.362 1.464-2.078 1.935-1.362-1.464 2.078-1.935zM14.143.56l1.774.925L14.552 4.1l-1.773-.925L14.143.56z"
          id="user-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#user-24_svg__a"
          transform="translate(2 1)"
        />
      </g>
    </svg>
  );
}

export default User24;
