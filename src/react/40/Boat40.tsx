import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Boat40({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <g fill="currentColor">
          <path
            d="M1.681 33.922l2.107.708a6 6 0 004.156-.123l3.003-1.211a4 4 0 012.77-.082l4.372 1.469a6 6 0 003.822 0l4.371-1.47a4 4 0 012.77.083l3.004 1.21a6 6 0 004.156.124l2.107-.708-.638-1.896-2.106.708a4 4 0 01-2.77-.082L29.8 31.441a6 6 0 00-4.156-.123l-4.37 1.469a4 4 0 01-2.55 0l-4.37-1.47a6 6 0 00-4.156.124l-3.003 1.211a4 4 0 01-2.77.082l-2.107-.708-.638 1.896zM20 17.005l13.075 1.26-4.756 11.348 1.845.774 4.756-11.349a2 2 0 00-1.653-2.764l-13.17-1.27h-.193l-13.17 1.27a2 2 0 00-1.653 2.764l4.756 11.349 1.844-.774-4.756-11.348L20 17.005z"
            fillRule="nonzero"
          />
          <path
            fillRule="nonzero"
            d="M19 19v10h2V19zM10.942 15.336l2.026-5.672A1 1 0 0113.909 9h12.182a1 1 0 01.941.664l2.026 5.672 1.884-.672-2.026-5.673A3 3 0 0026.09 7H13.909a3 3 0 00-2.825 1.991l-2.026 5.673 1.884.672z"
          />
          <path d="M19 4h2a1 1 0 011 1v2h-4V5a1 1 0 011-1z" />
        </g>
      </g>
    </svg>
  );
}

export default Boat40;