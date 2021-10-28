import * as React from "react";

function CalendarCross32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M24.693 27H7.306C6.561 27 6 26.459 6 25.741V13h20v12.741c0 .718-.562 1.259-1.307 1.259M7.306 6H10v2h2V6l8-.001V8h2V5.999h2.658C25.411 6.025 26 6.57 26 7.24V11H6V7.24c0-.67.59-1.215 1.306-1.24m17.387-2H22V2h-2v2l-8 .001V2h-2v2.001H7.271c-1.834.063-3.27 1.486-3.27 3.239v18.501C4 27.568 5.451 29 7.305 29h17.387C26.547 29 28 27.568 28 25.741V7.24c0-1.753-1.438-3.176-3.307-3.24" />
        <path d="M19.996 14.585l-3.996 4-3.995-4-1.415 1.413L14.587 20l-4.008 4.012 1.415 1.413L16 21.415l3.996 4 1.415-1.413L17.413 20l3.998-4.002z" />
      </g>
    </svg>
  );
}

export default CalendarCross32;
