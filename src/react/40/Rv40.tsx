import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Rv40({
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
          d="M14 24a3 3 0 110 6 3 3 0 010-6zm15 0a3 3 0 110 6 3 3 0 010-6zm5.744-14l3.305 11.016L35.72 28H33v-2h1.279l1.672-5.017L33.256 12H5.819l-1.6 8H7v2H4.386l1.334 4H10v2H4.28l-2.313-6.936L4.18 10h30.564zM14 26a1 1 0 100 2 1 1 0 000-2zm15 0a1 1 0 100 2 1 1 0 000-2zm-4 0v2h-7v-2h7zm0-12v11h-2v-9h-3v9h-2V14h7zm7.244 0l2.1 7H27v-7h5.244zm-1.488 2H29v3h2.656l-.9-3zM15 14v5H7v-5h8zm-2 2H9v1h4v-1z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Rv40;