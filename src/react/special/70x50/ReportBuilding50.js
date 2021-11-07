import * as React from "react";

function ReportBuilding50({ title, titleId, ...props }) {
  return (
    <svg width={70} height={50} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path
          fill="#005AA0"
          d="M54.508 33.163l1.142-1.642-20.61-14.337L14.428 31.52l1.142 1.642L35.04 19.62z"
        />
        <path
          fill="#005AA0"
          d="M19 28.697v16.749h2v-16.75zM49 28.697v16.749h2v-16.75zM43 34v11.01h2V32h-8v13.01h2V34zM25 41v-9h9v9h-9zm7-2v-5h-5v5h5z"
        />
        <path
          fill="#005AA0"
          d="M16 47h11v-2H16zM33 47h22v-2H33zM21.37 5.04c2.035 1.543 3.287 3.59 3.427 6.257l1.999-.077c-.011-.845.238-2.104.99-3.336a6.17 6.17 0 011.442-1.632c.25 1.648.744 2.863 1.492 3.958.193.282.77 1.043.823 1.118.344.484.481.816.507 1.298.068 1.31-.245 2.084-1.142 2.931l1.372 1.455c1.323-1.249 1.866-2.593 1.767-4.49-.048-.906-.327-1.584-.873-2.353-.082-.115-.644-.856-.803-1.088-.768-1.123-1.193-2.403-1.307-4.577l-.079-1.507-1.357.66c-1.566.762-2.737 1.855-3.548 3.184-.093.151-.18.304-.261.458-.732-1.51-1.841-2.792-3.24-3.852a13.873 13.873 0 00-2.843-1.655 10.556 10.556 0 00-1.333-.492L17.068.934l.072 1.383c.184 3.505-.691 5.594-3.068 8.744-.021.028-.646.852-.826 1.093-1.985 2.66-2.793 4.539-2.651 7.247.145 2.76 1.107 4.873 2.625 6.386 1.01 1.008 2.032 1.556 2.764 1.78l.585-1.913a3.577 3.577 0 01-.554-.251 5.938 5.938 0 01-1.383-1.032c-1.171-1.168-1.921-2.815-2.04-5.074-.112-2.145.525-3.626 2.257-5.947.174-.233.794-1.05.82-1.084 2.29-3.037 3.382-5.325 3.487-8.543.757.347 1.51.784 2.214 1.318z"
        />
        <path
          d="M20 15.672l1.244 1.566c3.343-2.657 2.868-6.323.33-9.305l-1.15-1.352-.56 1.685c-.42 1.262-.979 2.209-2.038 3.604-.145.191-.681.887-.671.874-2.242 2.922-2.97 4.26-2.867 6.213.152 2.905 2.427 5.117 4.144 5.7l.642-1.894c-1.021-.347-2.687-1.967-2.789-3.911-.067-1.287.518-2.364 2.457-4.89l.677-.883c.687-.905 1.199-1.663 1.605-2.436.943 1.798.765 3.607-1.025 5.03z"
          fill="#E30613"
        />
      </g>
    </svg>
  );
}

export default ReportBuilding50;