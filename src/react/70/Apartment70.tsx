import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Apartment70({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M24 64v-2h6V50h10v12h16V46H44V33h10v5h2v-9H44V16h10v5h2v-9H14v9h2v-5h10v13H14v9h2v-5h10v13H14v16h6v2H9v-2h3V46H8v-8h4v-9H8v-8h4v-9H9V6h53v6h-4v9h4v8h-4v9h4v8h-4v16h3v2H24zm14-12h-6v10h6V52zm16-2v10H44V50h10zm-28 0v10H16V50h10zm26 2h-6v6h6v-6zm-28 0h-6v6h6v-6zm36-12H46v4h14v-4zm-36 0H10v4h14v-4zm16-7v10H30V33h10zm-2 2h-6v6h6v-6zm14 0h-6v3h6v-3zm-28 0h-6v3h6v-3zm0-12H10v4h14v-4zm36 0H46v4h14v-4zm-20-7v10H30V16h10zm-2 2h-6v6h6v-6zm-14 0h-6v3h6v-3zm28 0h-6v3h6v-3zm8-10H11v2h49V8z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Apartment70;