import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function NavigationMortgage32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M26.39 14.262L23.754 1.725l-20.77 4.42L5.704 18.68l10.166-2.214-.425-1.954-8.205 1.81-1.86-8.643 16.834-3.55 1.843 8.578-3.267.684.41 1.958z" />
        <path d="M22.5 14.25a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0zm-5.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM27.5 21.25a3.25 3.25 0 10-6.5 0 3.25 3.25 0 006.5 0zm-4.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM20 24.188l-7-5.456-7 5.456V30h2v-4.73l5-3.997 5 3.997V30h2z" />
        <path d="M12 30h2v-4h-2z" />
      </g>
    </svg>
  );
}

export default NavigationMortgage32;