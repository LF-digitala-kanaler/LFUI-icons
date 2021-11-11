import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Mc40({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M25.797 8.396l7.25 9.57h-2.013a6.007 6.007 0 00-3.552 1.156l1.013 1.005a5.994 5.994 0 11-1.407 1.422l-1.006-.998a6.003 6.003 0 00-1.078 3.223L25 24v.494l-3.525 2.695-7.35.08L10.31 23.1l-2.607 2.587-1.408-1.42 2.663-2.643L6.558 19 4 19v-2h3.44l7.556 8.258 5.793-.062 2.227-1.703.018-.238a8.04 8.04 0 016.058-7.053l.093-.022-4.982-6.576 1.594-1.208zM5.56 19.385l.812 1.828a3.995 3.995 0 105.227 5.375l.096-.22 1.854.75a5.95 5.95 0 01-1.317 1.984 5.994 5.994 0 11-6.954-9.583l.282-.134zM31.994 21c-.75 0-1.45.206-2.05.565l2.214 2.195-1.408 1.42-2.21-2.192A3.994 3.994 0 1031.994 21zM22 21v2h-4v-2h4zm-11.764-8l5.979 2.989 6.897-.318c1.278-.13 1.834-.513 1.884-1.516L25 14h2c0 2.259-1.344 3.357-3.513 3.639l-.228.026-7.473.346L9.764 15H3v-2h7.236zM24 12v2h-3v-2h3z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Mc40;