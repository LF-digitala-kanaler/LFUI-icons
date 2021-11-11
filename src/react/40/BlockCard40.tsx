import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function BlockCard40({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M21 30l.002-2H5.863c-.99 0-1.855-.813-1.855-1.685v-15.63C4.008 9.813 4.873 9 5.863 9h25.32c1.05 0 1.881.79 1.822 1.613l-.003 7.372h2v-7.3C35.147 8.715 33.34 7 31.182 7H5.864c-2.068 0-3.855 1.68-3.855 3.685v15.63C2.008 28.32 3.795 30 5.863 30h15.139v-2L21 30z" />
        <path d="M33.731 13H3.281v2h30.45zM7 20h12v-2H7zM7 23h6v-2H7zM30.5 32a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 2a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" />
        <path d="M25.086 22.5l9.765 9.765 1.414-1.414-9.765-9.765z" />
      </g>
    </svg>
  );
}

export default BlockCard40;