import * as React from "react";

function Calendar24(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M19 7H5V5.33c0-.181.161-.326.345-.33H8v1h2V5h4v1h2V5h2.634c.205.004.366.149.366.33V7zm0 11.662a.331.331 0 01-.346.338H5.345A.33.33 0 015 18.662V9h14v9.662zM16 3V2h-2v1h-4V2H8v1H5.325C4.021 3.026 3 4.05 3 5.33v13.332A2.317 2.317 0 005.345 21h13.309A2.317 2.317 0 0021 18.662V5.33c0-1.28-1.021-2.304-2.346-2.33H16z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Calendar24;