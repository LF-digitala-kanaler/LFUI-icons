import * as React from "react";

function MulticolorBike48({ title, titleId, ...props }) {
  return (
    <svg width={48} height={48} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="none">
        <path
          d="M12.5 35.956a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-2a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM35.5 35.956a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-2a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
          fill="#005C9C"
        />
        <path
          d="M25.203 28.676a1.095 1.095 0 01-.586-.298l-9.157-8.942 1.398-1.431 8.198 8.006 2.551-6.29h-7.595v-2h9.578l8.49 11.218-2.045-.027a17857.294 17857.294 0 01-10.117-.136l-.437-.007-.094-.002c-.045-.002-.045-.002-.182-.02l-.002-.07zM26.9 26.79l.988.013 6.129.082-4.66-6.157A6772.87 6772.87 0 0126.9 26.79z"
          fill="#005C9C"
        />
        <path
          d="M27.5 16.456a1 1 0 010-2h4.506a1 1 0 010 2H27.5z"
          fill="#E30613"
        />
        <path
          fill="#005C9C"
          d="M18.736 15l-5.81 14.346-1.854-.75L17.388 13h4.976v2z"
        />
      </g>
    </svg>
  );
}

export default MulticolorBike48;