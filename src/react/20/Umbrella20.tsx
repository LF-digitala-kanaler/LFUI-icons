import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Umbrella20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M10 8.814a5.007 5.007 0 00-3.5-1.443c-.657 0-1.297.132-1.889.376.972-2.019 3.002-3.412 5.343-3.412 2.32 0 4.386 1.402 5.395 3.396a4.946 4.946 0 00-1.849-.36A5.007 5.007 0 0010 8.814zM11 1H9v1.4c-3.937.482-7 3.902-7 8.042v.967h1.689s.001-.156.182-.475c.536-.95 1.568-1.563 2.629-1.563 1.022 0 1.932.525 2.5 1.39V16c0 .292-.224.53-.5.53s-.5-.238-.5-.53H6c0 1.394 1.122 2.53 2.5 2.53 1.325 0 2.402-1.053 2.484-2.374l.016-5.42c.562-.834 1.516-1.366 2.5-1.366 1.094 0 2.077.584 2.629 1.562.1.176.171.476.171.476H18v-.967c0-4.112-3.057-7.51-7-8.03V1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Umbrella20;