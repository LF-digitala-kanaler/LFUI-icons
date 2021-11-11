import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Document32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M6 3v26h20l-.007-20.914L20.915 3H6zm2 2h12.085l3.908 3.915L24 27H8V5z" />
        <path d="M11 13h10v-2H11zM11 17h10v-2H11zM11 21h10v-2H11z" />
      </g>
    </svg>
  );
}

export default Document32;