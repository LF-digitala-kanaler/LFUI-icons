import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ChevronDown24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M17.6 10.014L16.186 8.6l-4 4-4-4-1.414 1.414 4 4.001 1.415 1.413 1.413-1.413z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default ChevronDown24;
