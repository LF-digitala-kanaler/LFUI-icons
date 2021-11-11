import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function PhoneLandscape40({
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
          d="M34.67 25.339c0 5.808-3.227 8.7-9.245 8.426l2.09 2.089-1.415 1.414-4.384-4.384L26.1 28.5l1.414 1.414-1.859 1.86c4.72.192 6.926-1.789 7.012-6.166l.002-.27h2zM21.83 6.252a3.6 3.6 0 015.092 0l6.576 6.576a3.6 3.6 0 010 5.091L17.376 34.041a3.6 3.6 0 01-5.091 0l-6.576-6.576a3.6 3.6 0 010-5.091zm3.678 1.414a1.6 1.6 0 00-2.263 0L7.123 23.788a1.6 1.6 0 000 2.263l6.576 6.576a1.6 1.6 0 002.263 0l16.122-16.122a1.6 1.6 0 000-2.263zM11.439 26.439a1.5 1.5 0 112.122 2.122 1.5 1.5 0 01-2.122-2.122zM12.833 3l4.46 4.307-4.307 4.46-1.439-1.39 2.143-2.22c-4.29.079-6.27 2.109-6.28 6.29l.002.269-2 .035c-.093-5.387 2.632-8.313 7.833-8.574L11.444 4.44 12.833 3z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default PhoneLandscape40;