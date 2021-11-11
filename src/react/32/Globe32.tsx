import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Globe32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M9.303 20.654c-3.937-3.936-3.937-10.403 0-14.34L7.888 4.9c-4.717 4.718-4.717 12.45 0 17.169 4.718 4.718 12.451 4.718 17.17 0l-1.415-1.415c-3.937 3.937-10.403 3.937-14.34 0z" />
        <path d="M25.78 24.295l1.403-1.426-4.154-4.085-1.402 1.426zM10.115 8.63l1.414-1.414L7.444 3.13 6.03 4.545z" />
        <path d="M24.999 13.648A8.5 8.5 0 108 13.352 8.5 8.5 0 0025 13.648zM10 13.387a6.5 6.5 0 1112.998.226 6.5 6.5 0 01-12.998-.226zM15 30h2v-5h-2z" />
        <path d="M20 30v-2h-8v2z" />
      </g>
    </svg>
  );
}

export default Globe32;