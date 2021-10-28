import * as React from "react";

function Calendar32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <path
        d="M24.693 27H7.306C6.561 27 6 26.459 6 25.742V13h20v12.742c0 .717-.562 1.258-1.307 1.258M7.306 6H10v2h2V6h8v2h2V6h2.658c.753.025 1.342.57 1.342 1.24V11H6V7.24c0-.67.59-1.215 1.306-1.24m17.387-2H22V2h-2v2h-8V2h-2v2H7.271c-1.834.064-3.27 1.487-3.27 3.24v18.502C4 27.569 5.451 29 7.305 29h17.387C26.547 29 28 27.569 28 25.742V7.24c0-1.753-1.438-3.176-3.307-3.24"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Calendar32;