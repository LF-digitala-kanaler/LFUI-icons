import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Star32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M19.588 17.253a.997.997 0 00-.359 1.111l1.664 5.178-4.296-3.193a1 1 0 00-1.194 0l-4.294 3.192 1.664-5.177a1.001 1.001 0 00-.36-1.11l-4.359-3.21 5.361.013h.002a.999.999 0 00.953-.7L16 8.213l1.631 5.146a1 1 0 00.953.699h.002l5.36-.012-4.358 3.209zm8.362-4.529a1.001 1.001 0 00-.95-.687h-.002l-7.682.017-2.363-7.456a1 1 0 00-1.906 0l-2.36 7.456-7.685-.017H5a1.002 1.002 0 00-.593 1.806l6.242 4.595-2.399 7.46a1 1 0 001.55 1.108l6.2-4.608 6.202 4.608a1.001 1.001 0 001.55-1.108l-2.399-7.46 6.24-4.595a1 1 0 00.357-1.119z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Star32;