import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function MenuEnvelope70({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M6 14h58v42H6V14zm2 2v38h54V16H8z" />
        <path d="M35 36.706L7.635 14.227l-1.27 1.546L35 39.294l28.635-23.521-1.27-1.546zM62.707 53.293l-15-15-1.414 1.414 15 15zM8.707 54.707l15-15-1.414-1.414-15 15z" />
      </g>
    </svg>
  );
}

export default MenuEnvelope70;