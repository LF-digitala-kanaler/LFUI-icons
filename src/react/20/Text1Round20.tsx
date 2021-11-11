import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Text1Round20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M10 17c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7m0-16c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9" />
        <path d="M10.926 5.705H8.288v1.403h1.007v5.614h-1.15V14.1h3.968v-1.38h-1.187z" />
      </g>
    </svg>
  );
}

export default Text1Round20;