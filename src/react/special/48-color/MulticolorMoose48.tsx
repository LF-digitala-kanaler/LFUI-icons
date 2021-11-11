import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function MulticolorMoose48({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={48} height={48} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="none">
        <path
          d="M9.426 23.386l-.28-.081c-1.324-.375-2.229-.338-3.08.47-.131.105-.283.259-.431.466-.66.924-.66 2.129.32 3.356 2.452 2.668 7.49 2.308 11.625-.713l-1.024-1.41c-3.498 2.557-7.57 2.848-9.282.986-.442-.555-.442-.9-.225-1.204a.765.765 0 01.1-.118l.092-.078c.297-.29.627-.305 1.432-.077.072.02.137.039.26.076 1.09.322 1.568.401 2.237.218 1.581-.435 1.68-1.724.736-3.047-.53-.743-1.082-1.3-2.868-2.984l-.231-.218c-1.49-1.41-2.23-2.21-2.565-2.838-.198-.372-.237-.369.33-.453l.057.04c.17.124.399.328.685.608.453.442.406.392 2.003 2.11l.23.247c2.335 2.5 3.213 3.271 4.22 3.06 1.203-.253 1.869-.976 1.874-2.024.003-.632-.148-1.09-.647-2.283l-.076-.182-.073-.18-1.612.656.08.193.077.187c.391.936.513 1.305.512 1.6 0 .179-.052.234-.492.326.117-.024.107-.027.03-.072a4.84 4.84 0 01-.68-.52c-.497-.438-1.083-1.031-1.944-1.953l-.227-.244-.54-.583-.53-.567a33.96 33.96 0 00-.99-1.02c-.921-.9-1.397-1.248-2.026-1.152-1.915.295-2.597 1.519-1.795 3.026.46.865 1.26 1.729 2.905 3.286l.233.22c1.676 1.58 2.212 2.12 2.645 2.728.104.146.175.266.22.351-.235.064-.525.016-1.285-.209z"
          fill="#005AA0"
        />
        <path
          d="M21.035 19.348c-1.435-.943-2.467-2.013-3.187-3.216-.86-1.439-1.089-2.343-1.506-5.058-.198-1.288-.366-1.894-.805-2.424-1.617-1.958-3.748-1.385-4.515.659-.512 1.366-.429 1.648 1.821 7.635l1.628-.615c-1.941-5.164-2.093-5.68-1.821-6.407.326-.87.846-1.01 1.548-.16.159.192.278.62.425 1.578.452 2.94.716 3.989 1.734 5.69.856 1.43 2.072 2.69 3.725 3.776l.953-1.458z"
          fill="#E30613"
        />
        <path
          d="M38.952 22.438l-.326.089c-.784.217-1.083.263-1.327.196-.152-.042-.118-.01-.107.075-.004-.029.063-.212.25-.496.405-.619.954-1.203 2.534-2.77l.153-.152c1.539-1.529 2.264-2.333 2.736-3.16.804-1.41.426-2.677-1.23-3.091-1.21-.304-2.46.521-4.193 2.277-.317.32-.646.67-1.026 1.085-.27.296-1.14 1.263-1.204 1.333-.37.408-.647.704-.882.94.096-.78.364-2.017.809-3.722l.092-.352c.927-3.529 1.112-4.394.936-5.25-.311-1.514-2.12-2.568-3.952-1.44-.775.478-.997 1.243-1.276 3.24l-.11.8a46.53 46.53 0 01-.122.838c-.1.641-.207 1.194-.336 1.717-.52 2.108-1.39 3.585-2.842 4.486a6.002 6.002 0 00-.405-.183c-1.62-.663-3.461-.663-5.307.437l.888 1.499c1.331-.793 2.61-.793 3.761-.322.28.116.473.225.556.284l.43.305.468-.241c2.214-1.137 3.463-3.106 4.14-5.846.142-.577.258-1.178.365-1.866.042-.266.08-.535.127-.868.013-.095.088-.647.11-.799.107-.766.187-1.213.287-1.557.085-.294.163-.43.176-.438.705-.434 1.252-.116 1.338.305.09.437-.135 1.49-.914 4.455l-.093.355c-.905 3.467-1.149 4.918-.654 5.882.342.667 1.023.743 1.619.437.297-.152.61-.407.999-.785.294-.286.62-.633 1.078-1.138.068-.075.935-1.037 1.2-1.327.365-.4.68-.734.98-1.037 1.265-1.282 2.197-1.898 2.536-1.813.433.109.416.052.14.534-.361.635-1.036 1.384-2.45 2.787l-.151.151c-1.691 1.677-2.261 2.285-2.764 3.052-.886 1.35-.722 2.629.85 3.06.666.184 1.145.11 2.25-.197l.303-.082c.793-.208 1.147-.189 1.448.085l.07.057c.004.003.05.046.1.117.217.304.217.649-.264 1.25-2.3 2.453-6.409 1.65-9.04-1.734l-1.371 1.072c3.224 4.148 8.555 5.189 11.724 1.804 1.025-1.278 1.025-2.483.365-3.407a2.339 2.339 0 00-.444-.477c-.844-.75-1.737-.792-3.028-.454zM23.54 26.82c0-1.076-.87-1.948-1.944-1.948a1.946 1.946 0 00-1.944 1.948h1.74a.205.205 0 11.408 0h1.74zM29.626 26.82c0-1.076-.87-1.948-1.943-1.948a1.946 1.946 0 00-1.944 1.948h1.74a.205.205 0 11.408 0h1.74z"
          fill="#005AA0"
        />
        <path
          d="M31.829 31.588c.114-.28.255-.676.396-1.16.343-1.182.523-2.38.45-3.525-.073-1.134-.396-2.147-1.018-2.987l-1.396 1.04c.405.546.625 1.24.678 2.059.059.914-.093 1.922-.384 2.925a11.11 11.11 0 01-.39 1.115l-.075.17v6.288l.004.092c.004.078-.07.294-.373.567-.724.65-2.261 1.084-4.851 1.084V41c2.98 0 4.92-.547 6.012-1.53.724-.652.977-1.38.947-1.985v-5.897zM17.905 37.485c-.03.604.223 1.333.947 1.984 1.093.984 3.032 1.531 6.012 1.531v-1.744c-2.59 0-4.127-.433-4.85-1.084-.304-.273-.378-.489-.372-.599l.002-.06v-6.288l-.075-.17a11.11 11.11 0 01-.657-2.254l-1.712.303c.079.45.184.892.309 1.323.14.485.282.881.396 1.16v5.898z"
          fill="#005AA0"
        />
      </g>
    </svg>
  );
}

export default MulticolorMoose48;