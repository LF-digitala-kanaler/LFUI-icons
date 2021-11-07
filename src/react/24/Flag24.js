import * as React from "react";

function Flag24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M17 13.088c-1.655.159-2.846-.291-4.195-.804C11.273 11.702 9.547 11.06 7 11.24v-5.9c2.12-.338 3.55.233 5.052.847 1.376.563 2.914 1.187 4.948 1.039v5.86zm.795-7.991c-2.067.43-3.42-.12-4.986-.76C11.253 3.7 9.501 2.999 7 3.32V2.5H5v18.033h2v-7.287c2.184-.186 3.605.343 5.094.908 1.26.478 2.55.969 4.223.969.577 0 1.199-.058 1.88-.195l.803-.162V4.844l-1.205.253z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Flag24;