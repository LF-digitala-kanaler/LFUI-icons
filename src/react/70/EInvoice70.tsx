import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function EInvoice70({
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
          d="M56 8v54.592l-11.843-5.704L35 61.101l-9.158-4.213L14 62.592V8h42zm-2 2H16v49.409l9.824-4.732L35 58.9l9.176-4.222L54 59.41V10zm-7 36v2H37v-2h10zm0-6v2H23v-2h24zm-8-5v2H23v-2h16zm8 0v2h-4v-2h4zm-8-5v2H23v-2h16zm8 0v2h-4v-2h4zM34.735 14c3.657 0 5.163 2.82 4.375 6.98h-6.43c.167 1.673 1.099 2.39 2.605 2.39 1.123 0 2.39-.334 3.394-.764l.335 2.366c-1.171.646-2.51 1.028-3.849 1.028-3.275 0-5.665-2.295-5.665-6.143C29.5 15.84 32.177 14 34.735 14zm.024 2.414c-1.195 0-2.056.98-2.104 2.51h3.897c.095-1.553-.502-2.51-1.793-2.51z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default EInvoice70;