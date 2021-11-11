import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ArrowLargeLeft({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={16} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="currentColor">
        <path d="M32 7H3v2h29z" />
        <path d="M9.278 2.35L7.864.936.793 8.006l7.071 7.072 1.414-1.414-5.657-5.657z" />
      </g>
    </svg>
  );
}

export default ArrowLargeLeft;