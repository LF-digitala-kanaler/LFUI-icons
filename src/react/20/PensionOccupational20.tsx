import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function PensionOccupational20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16.353 13l-2.118-4h-8.47l-2.118 4zM14.619 14l1.059 2H4.322l1.058-2H3.118L1 18h18l-2.118-4zM10 1L6.294 8h2.262L10 5.274 11.442 8h2.263z" />
      </g>
    </svg>
  );
}

export default PensionOccupational20;
