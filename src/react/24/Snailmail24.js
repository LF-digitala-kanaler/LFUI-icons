import * as React from "react";

function Snailmail24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M17 2v2h-2v6.82h-2L12.999 8H9.263c.277.647.392 1.437.336 2.351L9.598 18h10.401L20 10.535C20 8.698 19.407 8 18 8h-1V6h1c2.59 0 3.999 1.659 4 4.535V20l-9.001-.001L13 22h-2l-.001-2.001L2 20v-2l5.598-.001.003-7.709C7.703 8.627 7.212 8.016 5.859 8h-.106l-.104.003C4.373 8.048 3.905 8.675 4 10.35V16H2l.002-5.591C1.85 7.774 3.062 6.177 5.4 6.014V6H13L13 2h4z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Snailmail24;