import * as React from "react";

function Calendar20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <path
        d="M16 6H4V4.33c0-.181.161-.326.345-.33H6v1h2V4h4v1h2V4h1.634c.205.004.366.149.366.33V6zm0 9.662a.331.331 0 01-.346.338H4.345A.33.33 0 014 15.662V8h12v7.662zM15.654 2H14V1h-2v1H8V1H6v1H4.325C3.021 2.026 2 3.05 2 4.33v11.332A2.317 2.317 0 004.345 18h11.309A2.317 2.317 0 0018 15.662V4.33c0-1.28-1.021-2.304-2.346-2.33z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Calendar20;