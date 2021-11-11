import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function List32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g transform="translate(4 7)" fill="currentColor" fillRule="evenodd">
        <path fillRule="nonzero" d="M7 3h16V1H7zM7 10h16V8H7zM7 17h16v-2H7z" />
        <circle cx={2} cy={2} r={1.5} />
        <circle cx={2} cy={9} r={1.5} />
        <circle cx={2} cy={16} r={1.5} />
      </g>
    </svg>
  );
}

export default List32;