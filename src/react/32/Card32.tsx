import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Card32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M26.803 22.688c-.187.2-.471.312-.8.312H6.016C5.493 23 5 22.557 5 22.09V14h21.995v8.162a.685.685 0 01-.192.525zM6.015 9h19.989c.302 0 .599.124.793.333.082.087.216.27.197.575V12H5V9.909c0-.468.493-.91 1.015-.91zm22.976.98a2.648 2.648 0 00-.73-2.01A3.086 3.086 0 0026.004 7H6.014C4.382 7 3 8.332 3 9.907v12.183C3 23.666 4.38 25 6.015 25h19.989c.876 0 1.7-.348 2.263-.952.52-.559.778-1.28.727-1.959L28.99 9.98z" />
        <path d="M6.994 18h6v-2h-6z" />
      </g>
    </svg>
  );
}

export default Card32;