import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function CheckEnclosed24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12 5c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" />
        <path d="M10.76 16.147L7.2 12.542l1.424-1.405 2.15 2.177L15.411 8.7l1.41 1.418z" />
      </g>
    </svg>
  );
}

export default CheckEnclosed24;