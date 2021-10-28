import * as React from "react";

function Snowmobile32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M15.37 18.029c1.502 0 2.63 1.382 2.63 3 0 1.617-1.127 3-2.63 3H4.63c-1.502 0-2.63-1.383-2.63-3s1.128-3 2.63-3zm2.337-10.736l9.69 9.69-2.251 2.363-.186.17 2.029 2.03c.418-.298.92-.792 1.713-1.61l.606-.629 1.442 1.386-.475.491c-2.411 2.482-3 2.798-5.076 2.815L20 24v-2l4.614-.001-1.308-1.307a3.2 3.2 0 01-1.128.3l-.215.008H19L19 19h2.974a.99.99 0 00.438-.106c.31-.137.691-.394 1.128-.786l.19-.176.871-.915-3.603-3.602L18.414 16H7c-.343 0-.963.409-1.076.805l-.178.636-1.926-.535.18-.65c.358-1.252 1.688-2.173 2.844-2.25L7 14h10.584v-.001l-1-1L15 13v-2h2.414L19 12.585l.586-.585-3.292-3.293 1.414-1.414zM15.37 20.029H4.631c-.298 0-.631.407-.631 1 0 .592.333 1 .63 1h10.74c.298 0 .63-.408.63-1 0-.593-.332-1-.63-1z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Snowmobile32;
