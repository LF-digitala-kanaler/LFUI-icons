import * as React from "react";

function TabOffer70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="none">
        <path fill="#005AA0" d="M17 38v12h2V38z" />
        <path fill="#E30613" d="M38 38v12h2V38z" />
        <path fill="#005AA0" d="M9 52V26h28v-2H7v30h43V40.005h-2V52z" />
        <path
          d="M21 26v-8h15v8H21zm13-2v-4H23v4h11zM16.176 34l-4.254-6.683-1.687 1.074L15.078 36h27.738l2.7-3.801-1.631-1.158L41.784 34z"
          fill="#005AA0"
        />
        <path
          d="M54.55 12.584l-3.764 5.33-6.23-1.963 2.748 5.908-4.819 4.393 6.505.582 1.41 6.363 3.764-5.33 6.23 1.964-2.747-5.908 4.819-4.393-6.506-.583-1.41-6.363zm.974-4.846l2.072 9.348 9.578.857-7.094 6.468 4.042 8.69-9.166-2.887-5.53 7.83-2.072-9.348-9.578-.858 7.095-6.468-4.043-8.69 9.167 2.887 5.529-7.83z"
          fill="#005AA0"
        />
      </g>
    </svg>
  );
}

export default TabOffer70;
