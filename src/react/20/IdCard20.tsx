import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function IdCard20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M17 14.2c0 .394-.344.8-.8.8-7.717.02-11.85.02-12.4 0-.347 0-.8-.39-.8-.8V5.8c0-.441.359-.8.8-.8h12.4c.441 0 .8.359.8.8v8.4zM3.8 3a2.794 2.794 0 00-2.672 2.008A2.77 2.77 0 001 5.8v8.4C1 15.813 2.313 17 3.8 17h12.4c1.613 0 2.8-1.25 2.8-2.8V5.8C19 4.256 17.744 3 16.2 3H3.8z" />
        <path d="M7.5 7v1c-.55 0-1 .45-1 1 0 .551.45 1 1 1s1-.449 1-1c0-.55-.45-1-1-1V7zm0 0V6c1.655 0 3 1.345 3 3 0 1.656-1.345 3-3 3s-3-1.344-3-3c0-1.655 1.345-3 3-3v1z" />
        <path d="M12.5 15h-2a3 3 0 00-6 0h-2a5 5 0 1110 0zM12 9h4V7h-4zM12 12h4v-2h-4z" />
      </g>
    </svg>
  );
}

export default IdCard20;