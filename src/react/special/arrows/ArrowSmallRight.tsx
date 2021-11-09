import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ArrowSmallRight({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={21} height={12} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="currentColor">
        <path d="M0 7h18V5H0z" />
        <path d="M13.728 10.245l1.415 1.415L20.8 6.003 15.143.346 13.728 1.76l4.243 4.243z" />
      </g>
    </svg>
  );
}

export default ArrowSmallRight;
