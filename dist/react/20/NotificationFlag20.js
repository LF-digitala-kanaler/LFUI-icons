import * as React from "react";

function NotificationFlag20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M15 11.588c-1.655.159-2.846-.291-4.195-.804C9.273 10.202 7.547 9.56 5 9.74v-5.9c2.12-.338 3.55.233 5.052.847 1.376.563 2.914 1.187 4.948 1.039v5.86zm.795-7.991c-2.067.43-3.42-.12-4.986-.76C9.253 2.2 7.501 1.499 5 1.82V1H3v18.033h2v-7.287c2.184-.186 3.605.343 5.094.908 1.26.478 2.55.969 4.223.969.577 0 1.199-.058 1.88-.195l.803-.162V3.344l-1.205.253z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default NotificationFlag20;
