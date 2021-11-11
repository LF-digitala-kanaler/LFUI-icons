import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Truck70({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M22 59c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0-2a8 8 0 110-16 8 8 0 010 16z" />
          <path d="M22 53a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z" />
          <path d="M22.194 34.88c-8.008 0-14.5 6.492-14.5 14.5h2c0-6.904 5.596-12.5 12.5-12.5 6.815 0 12.106 5.525 12.106 12.52v1h5.437v-2h-3.469c-.484-7.606-6.465-13.52-14.074-13.52zM53.477 58.88a6.74 6.74 0 100-13.48 6.74 6.74 0 000 13.48zm0-2a4.74 4.74 0 110-9.48 4.74 4.74 0 010 9.48z" />
          <path d="M42.737 48.4v2h2.676l.226-.688c1.144-3.489 4.404-5.932 8.078-5.932 1.818 0 3.546.57 4.985 1.614l1.175-1.619a10.456 10.456 0 00-6.16-1.995c-4.305 0-8.13 2.693-9.726 6.62h-1.254z" />
          <path d="M35.865 9H12.788l-2.243 22.739 2.191 7.27 1.915-.578-2.077-6.89L14.6 11h19.77l6.389 21.64h14.543l.089 10.408 2-.016-.106-12.392H42.254z" />
          <path d="M23.777 10v22h2V10zM49.749 32.196V17.255c0-.315-.046-.644-.127-.955a3.721 3.721 0 00-3.6-2.781v2c.788 0 1.47.534 1.665 1.285.04.152.062.313.062.45v14.942h2z" />
        </g>
      </g>
    </svg>
  );
}

export default Truck70;