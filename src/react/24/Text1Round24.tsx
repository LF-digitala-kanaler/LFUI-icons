import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Text1Round24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7m0-16c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9" />
        <path d="M12.926 7.705h-2.638v1.403h1.007v5.614h-1.15V16.1h3.968v-1.38h-1.187z" />
      </g>
    </svg>
  );
}

export default Text1Round24;