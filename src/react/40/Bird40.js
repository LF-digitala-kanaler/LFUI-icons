import * as React from "react";

function Bird40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M34.795 10.049l.285.022.29.029 1.626.197-3.353 4.947.01 1.428-.009.695c-.033 1.433-.17 2.434-.524 3.597-.645 2.115-1.93 3.883-4.022 5.262a8.344 8.344 0 01-.31.195l-.352 5.791-1.996-.12.29-4.767c-.71.217-1.458.364-2.23.448l.726 4.722-1.977.304-.761-4.947c-2.843-.067-5.86-.848-8.498-2.013-2.955 2.126-6.64 3.896-11.068 5.324l-.626.198-.592-1.91c5.815-1.805 10.276-4.18 13.44-7.13l.674-.648.374-.371.283-.292.367-.4.287-.328.426-.509.652-.807 1.048-1.32c.167-.212.326-.41.478-.598l.442-.534a20.53 20.53 0 011.676-1.778c.246-.231.499-.457.762-.68l.402-.33 1.25 1.562a17.182 17.182 0 00-1.625 1.477l-.375.399c-.126.137-.252.28-.381.43l-.4.472-.43.53-1.716 2.156-.585.71-.404.465-.287.315-.32.337-.345.346-.529.515c-.342.333-.699.66-1.07.98l.05.019c4.168 1.585 9.173 2.08 12.15.117 1.694-1.117 2.697-2.497 3.209-4.175.34-1.117.442-2.097.445-3.754l-.009-1.258.003-.451.004-.298 1.777-2.622h-.226c-.993.005-2.02.089-3.017.279l-.494.104c-.262.06-.515.127-.76.201l-.221.071.041.15.092.362c.207.845.35 1.685.4 2.483a7.865 7.865 0 01-.043 1.56c-.274 2.293-1.74 3.937-3.967 5.012-1.28.619-2.655.985-3.917 1.172l-.417.055-.237-1.985c1.172-.14 2.51-.468 3.701-1.043 1.668-.805 2.67-1.928 2.854-3.467.048-.345.057-.742.03-1.179a12.438 12.438 0 00-.346-2.134c-.054-.22-.11-.43-.167-.628l-.115-.381-.08-.243-.31-.873.848-.375c.669-.297 1.393-.53 2.166-.708 1.86-.427 3.805-.504 5.553-.382z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Bird40;