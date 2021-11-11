import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Coins32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M15 28v2H4v-2h11zm6.5-15a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm0 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM13 25v2H4v-2h9zm14-3.5a5.5 5.5 0 01-5.5 5.5v-2a3.5 3.5 0 003.5-3.5h2zM12 22v2H4v-2h8zm0-3v2H4v-2h8zm1-3v2H4v-2h9zm2-3v2H4v-2h11zm4-3v2H4v-2h15zm2-3v2H6V7h15zm-4-3v2H2V4h15z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Coins32;