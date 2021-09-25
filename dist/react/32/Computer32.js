import * as React from "react";

function SvgComputer32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M26 23a2 2 0 00-2 2v2a2 2 0 104 0v-2a2 2 0 00-2-2zm1 1v2h-2v-2h2zm-3.857-5h1.428c1.34 0 2.122.802 2.35 1.966l.026.147A4.002 4.002 0 0130 25v2a4 4 0 11-8 0v-2a4.002 4.002 0 012.904-3.848c-.05-.127-.132-.152-.333-.152h-1.428C21.093 21 20 20.07 20 18h-4v2h3v2H8v-2h3v-2H2V2h23v16h-3c0 .888.132 1 1.143 1zM14 18h-1v2h1v-2zm9-14H4v12h19V4zM10.347 5.514L11.76 6.93 6.929 11.76l-1.415-1.414 4.833-4.833zm-3.211-.816l1.393 1.436-2.49 2.416-1.393-1.435 2.49-2.417z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgComputer32;
