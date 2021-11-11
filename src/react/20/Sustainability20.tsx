import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Sustainability20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M8.66 19.644l7.2-12.134-1.72-1.02-7.2 12.133z" />
          <path d="M17 10c0 1.934-1.866 4-3.042 4-.734 0-1.31-.249-1.793-.77l-1.467 1.359c.864.932 1.972 1.411 3.26 1.411C16.287 16 19 12.996 19 10c0-1.856-.168-4.55-.504-8.094L18.39.79l-1.095.23c-3.306.694-5.935 1.746-7.885 3.172-2.937 2.147-2.541 6.263-.228 8.76l1.467-1.36c-1.594-1.72-1.859-4.47-.059-5.786 1.487-1.087 3.493-1.95 6.019-2.578C16.869 6.16 17 8.42 17 10z" />
          <path d="M11.923 6.615l-1.846.77L12 12h4v-2h-2.667zM9.777 16.514L6.31 12.228l-1.555 1.258 3.469 4.286z" />
          <path d="M5.45 11.095c.889.814.926 1.61.512 2.119l1.553 1.26c1.066-1.314.973-3.309-.716-4.854-1.153-1.055-2.663-1.79-4.516-2.216l-.924-.212-.26.911c-1.094 3.814-1.094 6.332.275 7.622 1.015.958 2.43.958 4.08.177l-.857-1.808c-.983.466-1.544.466-1.852.176-.557-.525-.616-2.095.02-4.662 1.098.355 1.99.852 2.684 1.487z" />
        </g>
      </g>
    </svg>
  );
}

export default Sustainability20;