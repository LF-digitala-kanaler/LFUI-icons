import * as React from "react";

function Gravestones24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M12.6 8.083l.4-.174.4.174c3.659 1.597 5.6 3.715 5.6 6.372V22H7v-7.545c0-2.657 1.941-4.775 5.6-6.372zM9 14.455V20h8v-5.545c0-1.63-1.269-3.088-4-4.358-2.731 1.27-4 2.728-4 4.358z" />
          <path d="M4 16v-5.545c0-1.63 1.269-3.088 4.002-4.359 2.71 1.242 4.01 2.47 4.01 3.452h2c0-2.084-1.964-3.873-5.612-5.465L8 3.91l-.4.174C3.941 5.68 2 7.798 2 10.455V18h6.002v-2H4zM16.154 4.074C18.741 4.992 20 6.608 20 8.5V13h-2.27v2H22v-1-5.5c0-2.898-1.981-5.312-5.605-6.454l-.357-.112-.344.15c-1.33.58-2.564 1.456-3.414 2.339l1.44 1.387c.602-.624 1.48-1.268 2.434-1.736z" />
        </g>
      </g>
    </svg>
  );
}

export default Gravestones24;
