import * as React from "react";

function Car40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M20 5c6.02 0 9.086.873 10.78 2.642l.634.65c.295.312.56.62.833.971.565.73 1.118 1.607 1.686 2.706l.176.348 3.197.85c.938.196 1.615 1.003 1.688 1.954l.006.169v1.377c0 1.187-.938 2.166-2.118 2.166l.1-.004.07.289c.377 1.615.625 3.636.694 5.452l.015.539.004.443v3.781c0 .775-.4 1.46-1.004 1.844l-.114.066v1.59c0 1.136-.858 2.081-1.965 2.162l-.153.005h-3.47c-1.18 0-2.118-.98-2.117-2.199l.025-.801H10.968l-.033.994c-.076 1.063-.905 1.924-1.96 2L8.825 35H5.47c-1.18 0-2.118-.98-2.118-2.167l-.001-1.59-.113-.066a2.177 2.177 0 01-.998-1.69l-.006-.154v-3.781c0-2.038.267-4.52.712-6.434l.07-.289-.052-.001c-1.056-.077-1.886-.942-1.96-2.008L1 16.667V15.29c0-1.023.701-1.916 1.642-2.11l3.248-.863.177-.348c.505-.977.998-1.778 1.498-2.457l.188-.249c.272-.352.538-.659.833-.97l.76-.78C11.065 5.832 14.126 5 20 5zm0 2l-.41.001c-5.246.036-7.718.763-8.927 2.024-1.537 1.605-1.978 2.142-2.896 4.004l-.476.986-4.188 1.11c-.052.01-.103.075-.103.165v1.377c0 .101.063.166.118.166h2.604l-.56 1.751c-.559 1.753-.927 4.684-.927 6.968V26H13v2H4.235v1.333c0 .081.04.14.085.16l.033.007h1v3.333c0 .102.062.167.118.167h3.353c.055 0 .117-.065.118-.199L9.032 30h22l-.09 2.833c0 .102.062.167.117.167h3.47c.056 0 .118-.065.118-.167V29.5h1c.055 0 .118-.065.118-.167L35.764 28H27v-2h8.764v-.448c0-2.15-.325-4.873-.83-6.647l-.097-.32-.559-1.752h2.604c.055 0 .118-.065.118-.166V15.29c0-.09-.05-.155-.155-.178l-4.136-1.097-.341-.711c-.875-1.804-1.298-2.43-2.435-3.65l-.596-.629C28.097 7.731 25.528 7 20 7zm5 19v2H15v-2h10zm5-8a3 3 0 110 6 3 3 0 010-6zm-20 0a3 3 0 110 6 3 3 0 010-6zm20 2a1 1 0 100 2 1 1 0 000-2zm-20 0a1 1 0 100 2 1 1 0 000-2zm18.622-9.49L31.71 16H12v-2h16.29l-1.412-2.51 1.744-.98z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Car40;