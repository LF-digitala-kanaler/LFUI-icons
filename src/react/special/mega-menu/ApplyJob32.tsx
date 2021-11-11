import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ApplyJob32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M18.539 12.98c-2.71 0-4.716-.767-6.083-2.068-.853-.812-1.293-1.645-1.456-2.258l1.933-.515c.01.043.059.169.155.35.172.328.418.66.747.975.986.938 2.497 1.515 4.704 1.515h8.388l.245.645.173.457c.432 1.25.655 2.57.655 3.919 0 6.627-5.373 12-12 12S4 22.627 4 16C4 9.372 9.372 4 16 4c3.541 0 6.834 1.544 9.1 4.177L23.584 9.48A9.975 9.975 0 0016 6C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.478 10-10c0-1.046-.16-2.07-.463-3.02h-6.998z" />
        <path d="M11.941 16.262h-2a2.262 2.262 0 114.524 0h-2a.262.262 0 10-.524 0zM19.535 16.262h-2a2.262 2.262 0 114.523 0h-2a.261.261 0 10-.523 0zM19.097 20.129l1.415 1.414A6.363 6.363 0 0116 23.409a6.363 6.363 0 01-4.512-1.866l1.414-1.414A4.364 4.364 0 0016 21.409c1.156 0 2.266-.449 3.097-1.28z" />
      </g>
    </svg>
  );
}

export default ApplyJob32;