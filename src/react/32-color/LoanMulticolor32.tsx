import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function LoanMulticolor32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="none">
        <path
          fill="#005AA0"
          d="M24.964 9.653l1.955-.423-1.387-6.411-13.324 2.776.408 1.958L23.997 5.18z"
        />
        <path
          fill="#005AA0"
          d="M8.62 6.731l17.241 3.7-1.869 8.922-8.5-1.845-.425 1.955 10.47 2.272 2.69-12.842-21.14-4.536-2.778 12.846 3.858.791.402-1.959-1.878-.385z"
        />
        <path
          d="M19.103 25.838c0-.859-.715-1.573-1.574-1.573-.859 0-1.573.714-1.573 1.573 0 .35.013.455.06.55l.055.13a.97.97 0 00.225.33c.325.379.72.564 1.233.564.86 0 1.574-.715 1.574-1.574zm-5.147 0a3.586 3.586 0 013.573-3.573 3.586 3.586 0 013.574 3.573 3.586 3.586 0 01-3.574 3.574c-1.102 0-2.05-.444-2.7-1.206a2.818 2.818 0 01-.631-.985c-.204-.429-.242-.764-.242-1.383z"
          fill="#E30613"
        />
        <path
          d="M12.412 21.985a4.309 4.309 0 110-8.617 4.309 4.309 0 010 8.617zm0-2a2.309 2.309 0 100-4.617 2.309 2.309 0 000 4.617z"
          fill="#005AA0"
        />
      </g>
    </svg>
  );
}

export default LoanMulticolor32;