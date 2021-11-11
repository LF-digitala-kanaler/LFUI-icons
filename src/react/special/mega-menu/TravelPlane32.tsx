import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function TravelPlane32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M14.52 22.31l-1.45 1.38-2.886-3.035 5.183-1.696 5.365 1.369-.495 1.938-4.8-1.225-1.621.53z" />
        <path d="M11.391 26.766l5.287-1.532-.85 3.319 1.288-.373 4-4.223.261-.076 6.005-1.739a.853.853 0 00.563-.514l-2.808-.598-12.86 3.723-2.567.743-2.548-1.359-2.076.445.998.928 5.307 1.256zm.052 2.068l-6.334-1.5L.914 23.43l6.544-1.402 2.476 1.321 1.787-.517 13.342-3.862 4.652.99.169.572a2.842 2.842 0 01-1.946 3.531l-5.743 1.664-4.001 4.223-5.173 1.497.85-3.317-2.428.704zM20 16.494a.5.5 0 10-1 .012.5.5 0 001-.012zm2-.023a2.5 2.5 0 11-5 .058 2.5 2.5 0 015-.058zM15.903 5.743C18.22 6.138 20 8.027 20 10.333c0 .736-.183 1.448-.528 2.09l-1.762-.946c.19-.355.29-.742.29-1.144 0-1.452-1.325-2.666-3-2.666h-1v-1C14 5.214 12.676 4 11 4 9.325 4 8 5.214 8 6.667v1H7c-1.676 0-3 1.214-3 2.666C4 11.786 5.324 13 7 13h1.8v2H7c-2.743 0-5-2.07-5-4.667 0-2.306 1.779-4.195 4.097-4.59C6.557 3.595 8.592 2 11 2c2.409 0 4.443 1.595 4.903 3.743z" />
        <path d="M15 13.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm2 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
      </g>
    </svg>
  );
}

export default TravelPlane32;