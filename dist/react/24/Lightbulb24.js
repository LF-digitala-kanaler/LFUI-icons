import * as React from "react";

function Lightbulb24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M14 20v2h-4v-2h4zm1-3v2H9v-2h6zM12 6c3.596 0 5 1.423 5 5 0 1.095-.325 2.02-.976 3.144l-.858 1.432c-.145.252-.163.313-.166.386V16h-2c0-.469.151-.907.433-1.428l.12-.216c.044-.074.091-.154.145-.241l.447-.723c.59-.972.855-1.656.855-2.392l-.005-.406c-.058-2.066-.616-2.564-2.787-2.593L12 8c-2.486 0-3 .522-3 3 0 .681.223 1.314.714 2.16l.588.957c.107.175.189.316.265.456.246.455.393.847.426 1.252L11 16H9l-.003-.073c-.016-.12-.126-.3-.851-1.49C7.382 13.181 7 12.192 7 11c0-3.577 1.404-5 5-5zm-6.5 4v2H3v-2h2.5zM21 10v2h-2.5v-2H21zM5.707 4.293L7.475 6.06 6.06 7.475 4.293 5.707l1.414-1.414zm12.653-.075l1.413 1.415-1.77 1.766-1.413-1.415 1.77-1.766zM13 2v2.5h-2V2h2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Lightbulb24;
