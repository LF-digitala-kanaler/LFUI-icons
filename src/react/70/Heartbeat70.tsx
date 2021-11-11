import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Heartbeat70({
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
          d="M48.51 24.542L58 46h6v2h-7l-8.51-18.542-13.59 30.2-5.86-16.165L24 53H6v-2h17l6.36-12.493 5.74 15.834 13.41-29.8zM22.496 11.29l1.044 1.027 1.044-1.027a7.97 7.97 0 0111.181 0 7.751 7.751 0 01.088 10.961l-.088.088L23.54 34.37 11.314 22.34a7.751 7.751 0 01-.087-10.962l.087-.087a7.97 7.97 0 0111.182 0zm-9.779 1.425l-.065.065a5.751 5.751 0 00.065 8.133L23.54 31.564l10.823-10.65.065-.066a5.751 5.751 0 00-.065-8.133 5.97 5.97 0 00-8.376 0l-2.447 2.408-2.447-2.408a5.97 5.97 0 00-8.376 0z"
          id="heartbeat-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#heartbeat-70_svg__a"
        />
      </g>
    </svg>
  );
}

export default Heartbeat70;