import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Pension70({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path d="M0 0h70v70H0z" />
        <path
          d="M13.571 47L5 62h60l-8.571-15H13.57zm1.161 2h40.536l6.286 11H8.446l6.286-11zM23.006 30l-8.631 15h41.25l-8.63-15h-23.99zm22.832 2l6.329 11H17.833l6.33-11h21.675zM35 8L23.75 28h22.5L35 8zm7.83 18H27.17L35 12.08 42.83 26z"
          fill="currentColor"
          fillRule="nonzero"
        />
        <g strokeWidth={2}>
          <path
            d="M-146.05 32l-7.121 13h36.574l-7.341-13h-22.112zM-134.997 11.216L-144.137 28h18.34l-9.2-16.784z"
            stroke="#E30613"
          />
          <path
            d="M-155.266 49l-6.044 11h52.61l-6.121-11h-40.445z"
            stroke="#005AA0"
          />
        </g>
      </g>
    </svg>
  );
}

export default Pension70;