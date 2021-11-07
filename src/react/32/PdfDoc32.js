import * as React from "react";

function PdfDoc32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M7 27V5h11.586L22 8.414V12h2V7.586L19.414 3H5v26h19.002l-.009-5.002-2 .004.005 2.998z"
        />
        <path d="M11.352 14.02v7.969h1.62V19.73h1.173c1.528 0 2.588-1.128 2.588-2.815 0-1.733-1.083-2.896-2.656-2.896h-2.725zm1.585 4.252v-2.77h1.208c.605 0 1.038.547 1.038 1.368 0 .844-.433 1.402-1.038 1.402h-1.208zm4.777-4.252V22h2.553c2.018 0 3.363-1.607 3.363-4.013 0-2.382-1.345-3.967-3.363-3.967h-2.553zm1.607 6.441v-4.902h.923c1.072 0 1.779.98 1.779 2.44 0 1.482-.707 2.462-1.779 2.462h-.923zm7.068-1.3h2.303v-1.493h-2.303v-2.155h2.588V14.02h-4.195V22h1.607v-2.839z" />
      </g>
    </svg>
  );
}

export default PdfDoc32;