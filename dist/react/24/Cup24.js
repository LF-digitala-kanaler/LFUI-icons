import * as React from "react";

function SvgCup24(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M17 22H7v-2h1.2c.432 0 .8-.383.8-.875v-2.928a6.019 6.019 0 01-2.664-3.212A4 4 0 116 5V2h12v3a4 4 0 11-.337 7.986A6.013 6.013 0 0115 16.196L15 19.126c0 .492.368.875.8.875H17v2zm-5-5a6.04 6.04 0 01-1-.083v2.208c0 .305-.046.6-.133.876h2.266a2.943 2.943 0 01-.133-.876v-2.208A6.04 6.04 0 0112 17zm4-13H8v1h4v2H8v4a4 4 0 108 0V4zm2 3v4a2 2 0 100-4zM6 7a2 2 0 100 4V7z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgCup24;
