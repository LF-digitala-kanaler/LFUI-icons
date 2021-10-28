import * as React from "react";

function Sustainability24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M21.227 1.5l.15 1.393c.415 3.85.623 6.853.623 9.016C22 15.284 18.885 18 16.06 18c-1.07 0-2.03-.269-2.862-.8l-3.351 5.332-1.694-1.064 1.196-1.906-.105.093-4.335-5 1.511-1.31.334.384c-.08-.35-.258-.731-.557-1.132-.613-.826-1.449-1.54-2.515-2.143-.527 2.49-.45 4.157.13 4.961.338.47.8.61 1.602.409l.485 1.94c-1.554.388-2.862-.003-3.71-1.18-1.12-1.553-1.12-4.145-.157-7.836l.296-1.133 1.073.469c1.9.83 3.373 1.936 4.402 3.32 1.113 1.497 1.236 3.083.655 4.29l1.926 2.222 3.417-5.438-1.674-2.99 1.746-.977 1.14 2.038 1.552-2.466 1.693 1.064-1.525 2.424H19v2h-3.524l-1.214 1.934c.513.332 1.104.495 1.797.495C17.837 16 20 14.114 20 11.91c0-1.816-.155-4.286-.466-7.404-3.75 1.78-6.173 3.046-7.232 3.773-1.466 1.007-1.786 3.482-.466 4.843l-1.435 1.393c-2.203-2.27-1.696-6.191.769-7.885 1.297-.89 4.208-2.39 8.788-4.536l1.269-.594z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Sustainability24;
