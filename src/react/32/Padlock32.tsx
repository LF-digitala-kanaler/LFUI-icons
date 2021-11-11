import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Padlock32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M6 28V13.01h20V28H6zm18-2V15.01H8V26h16z" />
        <path d="M23.994 14.5V9.826C23.994 5.498 20.408 2 15.997 2S8 5.498 8 9.826V14.5h2V9.826C10 6.614 12.68 4 15.997 4c3.317 0 5.997 2.614 5.997 5.826V14.5h2z" />
        <path d="M21 14.542v-4.64C21 7.19 18.756 5 16 5s-5 2.19-5 4.903v4.64h2v-4.64C13 8.305 14.338 7 16 7s3 1.305 3 2.903v4.64h2zM17.492 22l-.712-2.15a.992.992 0 00.49-.851c0-.552-.459-.999-1.024-.999-.566 0-1.024.447-1.024.999 0 .36.196.675.49.85L15 22h2.492zm-4.27-3.001c0-1.668 1.365-2.999 3.024-2.999s3.024 1.331 3.024 2.999c0 .43-.093.844-.262 1.22L20.26 24h-8.029l1.252-3.782a2.968 2.968 0 01-.261-1.22z" />
      </g>
    </svg>
  );
}

export default Padlock32;