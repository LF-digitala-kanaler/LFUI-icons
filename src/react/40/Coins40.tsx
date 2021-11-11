import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Coins40({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M21 36v2H4v-2h17zm7.5-17a9.5 9.5 0 110 19 9.5 9.5 0 010-19zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM17.846 33v2H4v-2h13.846zM35 29a6 6 0 01-6 6v-2a4 4 0 004-4h2zm-18 1v2H4v-2h13zm0-3v2H4v-2h13zm.846-3v2H4v-2h13.846zM19 21v2H4v-2h15zm2-3v2H4v-2h17zm2-3v2H6v-2h17zm0-3v2H6v-2h17zm-4-3v2H2V9h17zm0-3v2H2V6h17z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Coins40;