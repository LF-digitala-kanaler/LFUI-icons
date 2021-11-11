import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Shield70({
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
          d="M9.755 2C8.864 5.656 5.656 8.864 2 9.755V26c0 8.22 6.53 15.507 20 21.798C35.47 41.507 42 34.22 42 26V9.755C38.344 8.864 35.136 5.656 34.245 2H9.755zM36 0c0 4 4 8 8 8v18c0 9.333-7.333 17.333-22 24C7.333 43.333 0 35.333 0 26V8c4 0 8-4 8-8h28zm-7.707 15.537L22 21.829l-6.293-6.292-1.414 1.414 6.292 6.292-6.292 6.294 1.414 1.414L22 24.658l6.293 6.293 1.414-1.414-6.293-6.294 6.293-6.292-1.414-1.414z"
          id="shield-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#shield-70_svg__a"
          transform="translate(13 10)"
        />
      </g>
    </svg>
  );
}

export default Shield70;