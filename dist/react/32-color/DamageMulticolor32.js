import * as React from "react";

function DamageMulticolor32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fillRule="nonzero" fill="none">
        <path fill="#005AA0" d="M25 6H7v20h3.01v2H5V4h22v24h-8.97v-2H25z" />
        <path
          fill="#005AA0"
          d="M16.087 18.947L14.66 22.6 19 24.127V27h2v-4.29l-3.725-1.31 1.362-3.484-4.38-2.009L11.67 17H6.826v2h5.25l2.148-.907zM22 10h-4.4l-1.033-1.983-2-.523-.089-2.546-1.998.07.14 4.034 2.583.676L16.388 12H20v2.8l5.33 4.002 1.202-1.6L22 13.8z"
        />
        <path fill="#E30613" d="M12 28h4v-2h-4z" />
      </g>
    </svg>
  );
}

export default DamageMulticolor32;
