import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Rv24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M20.765 4l2.264 8.358L21.807 18l-.979.001A2.998 2.998 0 0118 20a3.001 3.001 0 01-2.829-2l-5.342.001a3 3 0 01-5.658 0L2.193 18 .971 12.358 3.235 4h17.53zM7 16a1 1 0 100 2 1 1 0 000-2zm11 0a1 1 0 100 2 1 1 0 000-2zm1.234-10H4.765L3.41 11H7v2H3.156l.65 3h.365a3.001 3.001 0 015.658 0h5.342a3.001 3.001 0 015.203-.834l.596-2.755L20.316 10H17V8h2.775l-.541-2zM15 8v7h-2v-5h-1v5h-2V8h5z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Rv24;