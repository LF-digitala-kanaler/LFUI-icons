import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Parasol24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path d="M0 0h24v24H0z" />
        <path
          d="M22.059 18v2c-1.538 0-2.811.253-3.829.748l-.25.129c-1.282.703-2.834 1.072-4.647 1.118l-.392.005H2v-2h10.941c1.538 0 2.811-.253 3.829-.748l.25-.129c1.282-.703 2.834-1.072 4.647-1.118l.392-.005zM9.48 7.145a1 1 0 011.038 0l6.176 3.75a1 1 0 01.42.511l.824 2.25A1 1 0 0117 15h-5.727a1 1 0 01-.274-.038L11 19H9v-4.038a1 1 0 01-.14.03L8.728 15H3a1 1 0 01-.94-1.344l.824-2.25a1 1 0 01.42-.51zM10 9.17l-5.358 3.253L4.43 13h3.95l1.002-.786a1 1 0 011.123-.077l.113.077 1.001.786h3.95l-.212-.578L10 9.169zM22 7v3h-2V7h2zm-4.54-1.817l1.414 1.414-2.122 2.121-1.414-1.414 2.121-2.121zM20 2a2 2 0 001.85 1.995L22 4v2a4 4 0 01-3.995-3.8L18 2h2zm-3 0v2h-3V2h3z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Parasol24;