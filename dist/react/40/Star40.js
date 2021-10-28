import * as React from "react";

function Star40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 .833h40v39.024H0z" />
        <path
          d="M30.104 34.406l-5.402-11.698.692-.479 8.483-5.86H23.219l-.23-.681-3.147-9.352-3.211 10.033H5.99l9.19 6.285-.372.774-5.256 10.926 10.233-6.352 10.318 6.404zm-2.88-11.01l5.929 12.842a1.11 1.11 0 01-.036 1.06 1.104 1.104 0 01-1.534.38l-11.797-7.322L8 37.671c-.338.21-.764.221-1.114.029-.53-.292-.724-.953-.461-1.456l6.21-12.91-10.209-6.982a1.11 1.11 0 01.68-1.983H15.17L18.768 3.13a1.105 1.105 0 012.1-.017l3.788 11.255h12.08c.349 0 .676.166.884.444.359.48.271 1.162-.252 1.573l-10.145 7.01z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Star40;
