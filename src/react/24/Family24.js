import * as React from "react";

function Family24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M9 12a4 4 0 113.036-6.604l1.518-1.303a6 6 0 101.338 2.767l-.156-.81h-4.723c-.553 0-1.241-.503-1.587-1.226l-1.804.863C7.28 7.062 8.63 8.05 10.013 8.05H13A4 4 0 019 12z" />
          <path d="M16 19a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4zM4 22v-6.55c0-.994.724-1.826 2.389-2.529L5.61 11.08C3.276 12.064 2 13.532 2 15.449V22h2z" />
          <path d="M12 22v-1.138c0-1.712.704-2.577 2.2-2.882l-.4-1.96c-2.43.496-3.8 2.18-3.8 4.842V22h2zM19.248 22v-1.138c0-1.546-.888-2.546-2.248-2.893l.495-1.938c2.198.562 3.753 2.312 3.753 4.831V22h-2z" />
        </g>
      </g>
    </svg>
  );
}

export default Family24;