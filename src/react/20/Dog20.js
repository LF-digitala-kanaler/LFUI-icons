import * as React from "react";

function Dog20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M10.538 14.629l-.459 1.946a3.092 3.092 0 01-2.396-3.005 3.088 3.088 0 013.087-3.087 3.2 3.2 0 011.814.584l-1.137 1.646a1.212 1.212 0 00-.677-.23c-.598 0-1.087.485-1.087 1.087 0 .507.355.94.855 1.059zM7.541 17v2H3v-3.24a1.74 1.74 0 011.753-1.752H7v2H5V17h2.541zM3.883 4.409l-.023.113c-.038.29.028.615.208.914.407.72 1.33.962 2.075.54l.986 1.74c-1.695.962-3.843.397-4.788-1.27a3.432 3.432 0 01-.454-2.247l.35-1.79h2.621A4.64 4.64 0 018.197.999c2.427 0 4.59 1.879 4.803 4.342v.556c0 1.293-1.04 2.415-2.5 2.415S8 7.19 8 5.897V5h2v.897c0 .221.18.415.5.415s.5-.194.5-.415l.004-.468c-.117-1.32-1.394-2.43-2.807-2.43-.834 0-1.603.385-2.09 1.02l-.3.39H3.882z" />
        <path d="M5 9h2v5.44H5zM17.014 12h2a3.922 3.922 0 01-3.914 3.915v-2A1.922 1.922 0 0017.014 12z" />
        <path d="M9.85 8.183l.863-1.804.624.3.112.062c2.787 1.809 4.526 4.915 4.526 8.284 0 1.167-.184 2.29-.548 3.31L15.19 19H7.476v-2h6.266c.154-.62.233-1.285.233-1.975 0-2.66-1.367-5.122-3.562-6.572l-.564-.27z" />
      </g>
    </svg>
  );
}

export default Dog20;