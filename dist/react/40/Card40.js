import * as React from "react";

function Card40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M34.183 30c1.111 0 1.884-.753 1.819-1.688l.003-16.696c.06-.826-.773-1.616-1.822-1.616H5.863c-.99 0-1.855.814-1.855 1.688v16.624c0 .874.865 1.688 1.855 1.688h28.32zM2.008 28.312V11.688C2.008 9.682 3.794 8 5.863 8h28.32c2.157 0 3.964 1.716 3.819 3.688l-.003 16.552c.15 2.07-1.587 3.76-3.816 3.76H5.863c-2.069 0-3.855-1.682-3.855-3.688z" />
        <path d="M36.731 14H3.281v2h33.45zM30 19h-2v5h5v-2h-3zM7 22h12v-2H7zM7 25h6v-2H7z" />
      </g>
    </svg>
  );
}

export default Card40;
