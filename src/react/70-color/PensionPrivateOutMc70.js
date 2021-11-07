import * as React from "react";

function PensionPrivateOutMc70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M14.142 48L7 60.894h56L55.767 48H14.142zm40.453 2l4.99 8.894h-49.19L15.32 50h39.274z"
          fill="#005AA0"
          fillRule="nonzero"
        />
        <path
          d="M23.809 32l-7.121 13h36.574L45.92 32H23.809z"
          stroke="#005AA0"
          strokeWidth={2}
        />
        <path
          d="M43.25 24L46 29H24l2.545-4.618 1.675-3.06 1.607-2.936L35 9l5.5 10h-2.337l-3.193-5.796L27.41 27.02H42.58L40.918 24h2.332z"
          fill="#E30613"
          fillRule="nonzero"
        />
        <path
          fill="#E30613"
          fillRule="nonzero"
          d="M45.143 19.005l1.435 1.389H34.821V22.38h11.757l-1.435 1.444 1.435 1.386 3.761-3.824-3.76-3.768z"
        />
      </g>
    </svg>
  );
}

export default PensionPrivateOutMc70;