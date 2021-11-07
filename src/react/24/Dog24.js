import * as React from "react";

function Dog24({ title, titleId, ...props }) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M8.228.822c2.83.708 3.942 2.999 3.942 5.263 0 .716-.236 1.346-.68 1.788 2.025 2.12 3.205 4.291 3.508 6.508.64-.243.983-.804.983-1.758h2c0 2.165-1.202 3.481-2.96 3.819-.102.886-.344 1.897-.723 3.035l-.228.683H1.453v-1.905c0-1.372.921-2.53 2.179-2.887V8.991h2v6.263h.453v2H4.453a1 1 0 00-.996.906h9.158c.309-1.052.46-1.932.46-2.632 0-2.287-1.235-4.624-3.779-7.017-1.42-.181-2.032-1.318-2.032-3.152h2c0 1.042.086 1.179.453 1.179.371 0 .453-.098.453-.453 0-.483-.123-1.133-.402-1.71-.392-.806-1.03-1.364-2.025-1.612-1.556-.39-2.606-.06-3.365.999l-.299.417H2v.718c0 1.209 1.532 2.02 2.898 1.365l.864 1.804C3.136 9.324 0 7.663 0 4.896V2.18h3.083C4.333.747 6.104.291 8.228.822zm1.489 10.074c.636 0 1.247.189 1.766.535l-1.112 1.663a1.18 1.18 0 10-1.036 2.098l-.647 1.892a3.18 3.18 0 011.029-6.188z"
          id="dog-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#dog-24_svg__a"
          transform="translate(3 1.813)"
        />
      </g>
    </svg>
  );
}

export default Dog24;