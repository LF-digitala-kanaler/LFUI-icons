import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function UserHappy40({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M20 2c5.099 0 9.858 2.133 13.244 5.81l-1.471 1.355A15.952 15.952 0 0020 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16c0-1.836-.31-3.629-.906-5.321h-12.26c-4.293 0-8.908-2.485-10.154-5.885l1.878-.688c.92 2.512 4.749 4.573 8.275 4.573h13.63l.251.628A17.953 17.953 0 0138 20c0 9.941-8.059 18-18 18S2 29.941 2 20 10.059 2 20 2zm6.28 25.305l1.44 1.39C25.69 30.795 22.934 32 19.993 32c-2.934 0-5.685-1.2-7.712-3.293l1.436-1.391C15.374 29.025 17.61 30 19.994 30c2.39 0 4.63-.98 6.287-2.695zM26 17a3 3 0 013 3h-2a1 1 0 00-2 0h-2a3 3 0 013-3zm-12 0a3 3 0 013 3h-2a1 1 0 00-2 0h-2a3 3 0 013-3z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default UserHappy40;