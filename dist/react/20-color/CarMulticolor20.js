import * as React from "react";

function SvgCarMulticolor20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <g transform="translate(0 1)" fill="none" fillRule="evenodd">
        <path
          d="M3 9.066l.992-3.094 1.524-2.997a.697.697 0 01.063-.063c.111-.1.28-.209.525-.32C6.908 2.23 8.18 2.002 10 2c1.819-.001 3.09.228 3.894.591.246.111.415.22.527.321.033.03.053.05.063.063l1.519 2.988L17 9.07V15h2V8.758l-1.142-3.559-1.631-3.21C15.882 1.39 14.623-.003 9.999 0 5.375.003 4.12 1.387 3.774 1.988l-1.638 3.22L1 8.754V15h2V9.066z"
          fill="#005AA0"
          fillRule="nonzero"
        />
        <path
          fill="#005AA0"
          fillRule="nonzero"
          d="M11.978 5.003l-.396-.916 1.836-.794 1.604 3.71H6v-2zM2 16.003v-2h16v2zM2 13.003v-2h5v2zM13 13.003v-2h5v2z"
        />
        <path fill="#E30613" fillRule="nonzero" d="M8 13.003v-2h4v2z" />
        <path
          d="M1 7a1 1 0 110-2h1.5a1 1 0 110 2H1zM17.5 7a1 1 0 010-2H19a1 1 0 010 2h-1.5z"
          fill="#005AA0"
          fillRule="nonzero"
        />
        <circle fill="#005AA0" cx={5.5} cy={8.75} r={1.25} />
        <circle fill="#005AA0" cx={14.5} cy={8.75} r={1.25} />
        <path
          d="M17 17.5a1 1 0 01-1-1v-2h3v2a1 1 0 01-1 1h-1zM2 17.5a1 1 0 01-1-1v-2h3v2a1 1 0 01-1 1H2z"
          fill="#005AA0"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgCarMulticolor20;
