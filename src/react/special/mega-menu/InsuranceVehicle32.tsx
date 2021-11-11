import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function InsuranceVehicle32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M5 21a5 5 0 1110 0 5 5 0 01-10 0zm2 0a3 3 0 106 0 3 3 0 00-6 0z" />
        <path d="M17.938 20h4.067v2H16v-1a6 6 0 00-10.654-3.787 6.375 6.375 0 00-1.153 2.123l-1.91-.593a8.372 8.372 0 011.513-2.794A8.002 8.002 0 0117.938 20z" />
        <path d="M21 22a4 4 0 118 0 4 4 0 01-8 0zm2 0a2 2 0 104 0 2 2 0 00-4 0z" />
        <path d="M20.072 13H27v6.798h-2V15h-6.222l-3.146-7H7v7.703H5V6h11.926z" />
        <path d="M20.3 7V5a2.702 2.702 0 012.701 2.701v7.173h-2V7.7A.702.702 0 0020.3 7zM10 7.64h2V12h-2z" />
      </g>
    </svg>
  );
}

export default InsuranceVehicle32;