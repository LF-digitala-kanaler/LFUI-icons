import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Mortgage70({
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
          d="M26.01 38.827l16.52 10.325-1.06 1.696-1.47-.92V64h-2V48.679l-12.01-7.506L13 48.987V64h-2V50.19l-1.107.667-1.031-1.714L26.01 38.827zM25 53v11h-2v-9h-5v9h-2V53h9zm10 0v7h-7v-7h7zm-2 2h-3v3h3v-3zm23.966-13.296a5.5 5.5 0 11-10.05 4.474 5.5 5.5 0 0110.05-4.474zm-6.448-.96a3.5 3.5 0 102.847 6.395 3.5 3.5 0 00-2.847-6.395zm6.749-34.987l5.062 23.583-10.842 2.127-.385-1.962 8.844-1.735L55.73 8.128l-43.038 9.148 3.844 17.882.377 1.774 16.975-3.619a7 7 0 11.133 2.018l-18.648 3.974-.208-.978-.585-2.751-4.265-19.84 46.952-9.98zM38.914 29.265a5 5 0 103.907 9.205 5 5 0 00-3.907-9.205zm1.94-16.677l1.248 5.868-1.956.416-1.248-5.869 1.957-.415zm7.96 1.375a3 3 0 11-5.869 1.247 3 3 0 015.87-1.247zm6.847-1.456a3 3 0 11-5.869 1.248 3 3 0 015.87-1.248zm-9.989 1.101a1 1 0 10.416 1.957 1 1 0 00-.416-1.957zm6.847-1.455a1 1 0 10.416 1.956 1 1 0 00-.416-1.956z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Mortgage70;