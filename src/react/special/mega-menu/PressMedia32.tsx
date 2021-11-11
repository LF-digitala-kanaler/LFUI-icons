import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function PressMedia32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path fillRule="nonzero" d="M12 23v-2h12v2zM12 20v-2h12v2z" />
        <path d="M12 17h8v-7h-8v7zm2.037-2H18v-2.962h-3.963V15z" />
        <path
          d="M25.806 25c.74 0 1.194-.546 1.194-1.5V7.135c-.271.084-.565.214-.959.408-1.11.546-1.748.748-2.841.748-1.098 0-1.73-.205-2.805-.755C19.576 7.117 19.215 7 18.5 7c-.717 0-1.088.119-1.927.54-1.092.548-1.728.751-2.823.751-1.094 0-1.748-.206-2.845-.749A7.158 7.158 0 0010 7.147V23.5c0 .56-.087 1.063-.253 1.5h16.059zM6.5 27C4.366 27 3 25.659 3 23.5v-12C3 10.08 4.044 9 5.5 9H7v2H5.5c-.336 0-.5.17-.5.5v12c0 1.046.463 1.5 1.5 1.5 1.066 0 1.5-.419 1.5-1.5V5h1c1.048 0 1.684.202 2.749.728.888.44 1.28.563 2.001.563.717 0 1.088-.119 1.927-.54C16.769 5.205 17.405 5 18.5 5c1.098 0 1.73.205 2.805.755.819.419 1.18.536 1.895.536.72 0 1.1-.12 1.959-.543C26.269 5.202 26.907 5 28 5h1v18.5c0 1.985-1.258 3.5-3.194 3.5H7c-.161-.008-.328 0-.5 0z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default PressMedia32;