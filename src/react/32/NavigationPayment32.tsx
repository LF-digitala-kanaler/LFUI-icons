import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function NavigationPayment32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M30.482 20.814l-8.826 8.826-4.403-4.404 1.515-1.515 2.888 2.888 7.31-7.31z" />
        <path
          fillRule="nonzero"
          d="M23.791 2.46l-13.72 2.667.382 1.964 11.836-2.263.984 4.35 1.95-.444z"
        />
        <path
          d="M4.336 15.135l1.987-8.796L24.214 10l-1.91 8.786s-8.45-1.908-9.459-2.112l-.396 1.96c.99.2 11.342 2.55 11.342 2.55l2.79-12.71-21.79-4.492-2.873 12.674 5.268 1.141.423-1.954-3.273-.708zM14.5 25A3.25 3.25 0 108 25a3.25 3.25 0 006.5 0zM10 25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
          fillRule="nonzero"
        />
        <path
          d="M13.5 16.25a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0zm-5.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default NavigationPayment32;