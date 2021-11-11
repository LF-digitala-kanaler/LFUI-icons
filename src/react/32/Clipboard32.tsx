import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Clipboard32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M25 26.19c0 .461-.355.81-.826.81H7.826C7.355 27 7 26.651 7 26.19V7.805c0-.439.372-.79.826-.8H11v3.995h10V7.007h3.153c.475.01.847.36.847.8V26.19zM15 4h2v3h2v2h-6V7h2V4zm4 1.006V2h-6v3.006H7.806C6.232 5.04 5 6.27 5 7.806V26.19C5 27.765 6.241 29 7.826 29h16.348C25.759 29 27 27.765 27 26.19V7.805c0-1.537-1.232-2.767-2.826-2.8H19z" />
        <path d="M11 16h10v-2H11zM11 20h10v-2H11zM11 24h10v-2H11z" />
      </g>
    </svg>
  );
}

export default Clipboard32;