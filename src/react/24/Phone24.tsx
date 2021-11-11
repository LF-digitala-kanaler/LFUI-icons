import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Phone24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M16.909 18.571a.388.388 0 00.17-.223.39.39 0 00-.016-.28l-1.613-3.076a.33.33 0 00-.205-.169.334.334 0 00-.264.026l-2.32 1.253-.908-.627c-.633-.437-1.262-1.21-1.886-2.404-.628-1.198-.9-2.125-.929-2.872l-.043-1.122.988-.532 1.38-.745c.113-.06.213-.388.154-.5L9.804 4.223a.33.33 0 00-.204-.171.327.327 0 00-.265.028l-1.783.962c-.298.16-.612.594-.817 1.264-.523 1.709-.295 4.264 1.49 7.67 1.315 2.508 2.771 4.085 4.196 4.963 1.169.72 2.196.867 2.707.591l1.78-.959zm.853 1.585l-1.781.96c-1.156.623-2.839.382-4.505-.645-1.264-.779-3.133-2.394-4.845-5.659C4.135 10.05 4.668 6.91 5.013 5.78c.335-1.093.932-1.916 1.685-2.321l1.783-.962a2.122 2.122 0 011.645-.165A2.129 2.129 0 0111.4 3.39l1.612 3.074c.517.983.089 2.391-.893 2.92l-1.381.745c.01.252.092.901.724 2.106.603 1.151 1.076 1.594 1.315 1.759l1.35-.73a2.136 2.136 0 011.646-.162 2.13 2.13 0 011.271 1.053l1.614 3.078c.26.495.31 1.094.143 1.642a2.184 2.184 0 01-1.038 1.281z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Phone24;