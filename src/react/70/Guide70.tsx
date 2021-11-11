import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Guide70({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={70}
      height={70}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M22 55v1h16v-1H22zm8-55a3 3 0 011 5.83V7h21.389l7.09 6.5-7.09 6.5H34v-2h17.611l4.91-4.5L51.61 9H31v44h9v5H20v-5h9V15H8.389l-4.91 4.5L8.39 24H26v2H7.611l-7.09-6.5L7.61 13H29V5.829A3.001 3.001 0 0130 0zm0 2a1 1 0 100 2 1 1 0 000-2zm4 10v2h-2v-4h17v2H34z"
          id="guide-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#guide-70_svg__a"
          transform="translate(5 6)"
        />
      </g>
    </svg>
  );
}

export default Guide70;