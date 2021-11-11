import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Smalltruck40({
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
          d="M11.071 25.071a4 4 0 110 8 4 4 0 010-8zM30 25a4 4 0 110 8 4 4 0 010-8zM11.07 27.071a2 2 0 100 4 2 2 0 000-4zM30 27a2 2 0 100 4 2 2 0 000-4zm3.677-14L38 23.807V30h-3v-2h1v-3.806L32.323 15H30v-2h3.677zM29 6v18H4.387l1.333 4H6v2H4.28l-2.001-6H2V6h27zm-4 22v2h-9v-2h9zm2-20H4v14h23V8zm-5 11v2h-2v-2h2zm-7 0v2h-2v-2h2zm-6 0v2H7v-2h2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Smalltruck40;