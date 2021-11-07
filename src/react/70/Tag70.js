import * as React from "react";

function Tag70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M8.063 40.367l20.816 20.816 32.055-32.055.25-10.555L50.675 8.06l-10.556.25L8.063 40.368zM39.254 6.295l12.242-.29 11.745 11.744-.29 12.242-34.072 34.072L5.183 40.367 39.254 6.295zm14.142 20.956c-3.105 3.104-8.171 3.061-11.317-.084-3.146-3.146-3.189-8.213-.084-11.317 3.104-3.105 8.171-3.062 11.317.084 3.145 3.146 3.188 8.212.084 11.317zm-1.44-1.44c2.304-2.304 2.272-6.081-.084-8.437-2.356-2.356-6.133-2.388-8.437-.084-2.304 2.304-2.272 6.081.084 8.437 2.356 2.356 6.133 2.388 8.437.084zm-1.17-1.17c-1.688 1.687-4.437 1.664-6.14-.04-1.705-1.704-1.728-4.454-.041-6.141 1.687-1.687 4.437-1.664 6.14.04 1.705 1.704 1.728 4.453.04 6.14zm-1.44-1.44c.886-.887.874-2.347-.04-3.261-.915-.914-2.374-.927-3.261-.04s-.874 2.346.04 3.26c.914.915 2.374.927 3.26.04z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Tag70;