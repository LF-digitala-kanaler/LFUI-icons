import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Check20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M14.907 5.1l-6.64 6.614-2.943-2.98L3.9 10.137l4.353 4.41 8.063-8.03z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Check20;