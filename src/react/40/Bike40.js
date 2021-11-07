import * as React from "react";

function Bike40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M9 17a8 8 0 105.467 2.16L13.1 20.62A6 6 0 119 19v-2zM23.07 27.865C24.283 30.937 27.327 33 30.763 33 35.305 33 39 29.426 39 25s-3.695-8-8.237-8c-.308 0-.613.016-.916.049l.214 1.988c.232-.024.466-.037.702-.037C34.215 19 37 21.694 37 25s-2.785 6-6.237 6c-2.616 0-4.922-1.563-5.833-3.87l-1.86.735z" />
          <path d="M24.024 14l5.312 10h-7.319l-7.149-12.497-1.736.994L20.858 26H32.664l-7.438-14H18.25v2z" />
          <path d="M16.263 8H20V6h-5.136L8.06 24.657l1.878.686zM23.606 10.5h5.227a1 1 0 100-2h-5.227a1 1 0 100 2zM22.97 25.243l3-12-1.94-.486-3 12z" />
        </g>
      </g>
    </svg>
  );
}

export default Bike40;