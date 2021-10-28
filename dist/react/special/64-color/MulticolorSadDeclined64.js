import * as React from "react";

function MulticolorSadDeclined64({ title, titleId, ...props }) {
  return (
    <svg
      width={64}
      height={64}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          id="multicolor-sad-declined-64_svg__a"
          d="M34.503.25h-3.33v6.907h3.33z"
        />
      </defs>
      <g transform="translate(8 1)" fill="none" fillRule="evenodd">
        <path
          d="M23 54.985c-12.682 0-23-10.317-23-23s10.318-23 23-23c6.694 0 13.07 2.927 17.493 8.03l-1.512 1.31c-4.042-4.665-9.867-7.34-15.981-7.34-11.58 0-21 9.421-21 21 0 11.58 9.42 21 21 21s21-9.42 21-21c0-2.337-.372-4.639-1.106-6.84l-.06-.16H28.158c-11.896 0-14.039-7.579-14.125-7.9l1.932-.519c.073.262 1.906 6.42 12.193 6.42h16.061l.56 1.491A23.634 23.634 0 0146 31.985c0 12.683-10.318 23-23 23"
          fill="#005AA0"
          fillRule="nonzero"
        />
        <path
          d="M23 47c-3.325 0-6-2.676-6-6s2.675-6 6-6c3.323 0 5.998 2.676 5.998 6 .081 3.243-2.675 6-5.999 6zm-.002-10C20.818 37 19 38.818 19 41s1.817 4 3.998 4 3.999-1.818 3.999-4c.09-2.182-1.727-4-3.999-4z"
          fill="#005AA0"
          fillRule="nonzero"
        />
        <circle
          fill="#005AA0"
          fillRule="nonzero"
          cx={14.25}
          cy={29.25}
          r={1.25}
        />
        <circle
          fill="#005AA0"
          fillRule="nonzero"
          cx={31.25}
          cy={29.25}
          r={1.25}
        />
        <path
          fill="#E30613"
          fillRule="nonzero"
          d="M41.291 11.05l-1.6-1.201 3.99-5.312 1.6 1.2zM46.065 18.192l-.94-1.767 5.857-3.115.939 1.766z"
        />
        <mask id="multicolor-sad-declined-64_svg__b" fill="#fff">
          <use xlinkHref="#multicolor-sad-declined-64_svg__a" />
        </mask>
        <path
          fill="#E30613"
          fillRule="nonzero"
          mask="url(#multicolor-sad-declined-64_svg__b)"
          d="M33.13 7.157l-1.958-.414L32.546.25l1.957.414z"
        />
      </g>
    </svg>
  );
}

export default MulticolorSadDeclined64;
