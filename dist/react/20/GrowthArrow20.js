import * as React from "react";

function GrowthArrow20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <path
        d="M12.007 5v2.001h2.586l-4.587 4.585-2.999-2.999L1.3 14.293l1.414 1.414 4.293-4.293 2.999 3 6.001-5.999V11h1.999V5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default GrowthArrow20;