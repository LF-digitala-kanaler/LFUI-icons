import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function TabHouse70({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="none">
        <path
          fill="#005AA0"
          d="M65.1 33.493l1.137-1.646-31.96-22.063L2.432 31.848l1.138 1.644L34.28 12.216z"
        />
        <path
          fill="#E30613"
          d="M38.037 21.073l1.105-1.666-4.87-3.232-4.756 3.238 1.126 1.654 3.644-2.482z"
        />
        <path
          fill="#005AA0"
          d="M10 27.06v26.07h2V27.06zM57 27.06v26.07h2V27.06zM48 35v18h2V33H38v20h2V35zM20 35v8h10v-8H20zm12-2v12H18V33h14z"
        />
        <path fill="#005AA0" d="M5 54h17.01v-2H5zM32 54h32v-2H32z" />
      </g>
    </svg>
  );
}

export default TabHouse70;