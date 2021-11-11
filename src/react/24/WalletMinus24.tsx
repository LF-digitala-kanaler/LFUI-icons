import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function WalletMinus24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M3 16c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4zm19-7h-1V6H7v2h12v1h-1v2h2v2h-2v2h1v1h-6c0-3.309-2.691-6-6-6-.341 0-.674.035-1 .09v-4.2A.89.89 0 016.89 5H19V3H6.89A2.893 2.893 0 004 5.89v4.922A5.999 5.999 0 001 16c0 3.309 2.691 6 6 6 2.607 0 4.824-1.673 5.65-4H21v-3h1V9z" />
        <path d="M4 15v2h6v-2z" />
      </g>
    </svg>
  );
}

export default WalletMinus24;