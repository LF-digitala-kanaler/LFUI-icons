import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function NotificationSwish32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={32}
      height={32}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M6.931 21.247l.47-.578c3.187.896 6.694-.265 8.834-2.88 2.862-3.518 2.372-8.834-1.227-11.779l-.654-.49 2.975-3.486.602.452C20.493 4.521 22 7.609 22 11c0 6.102-4.898 11-11 11-1.356 0-2.713-.226-4.069-.753zM4.144 19.59A11.003 11.003 0 010 11C0 4.898 4.898 0 11 0c1.583 0 3.088.301 4.445.979l-.496.547C11.528.462 7.906 1.433 5.683 4.21c-2.863 3.6-2.29 8.753 1.309 11.78l.654.49-2.975 3.56-.527-.45z"
          id="notification-swish-32_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#notification-swish-32_svg__a"
          transform="translate(5 5)"
        />
      </g>
    </svg>
  );
}

export default NotificationSwish32;