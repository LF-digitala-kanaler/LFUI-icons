import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function PensionPrivate70({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M55.767 48L63 61H7l7.142-13h41.625zm-1.176 2H15.325l-4.944 9h49.217l-5.007-9zm-7.946-19l8.47 15H15.142l8.217-15h23.287zm-1.167 2H24.542l-6.025 11H51.69l-6.212-11zM35 9.13L45.891 29H24.18L35 9.13z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default PensionPrivate70;