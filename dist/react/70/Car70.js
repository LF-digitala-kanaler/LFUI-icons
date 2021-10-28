import * as React from "react";

function Car70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M35 15c8.751 0 13.146 1.213 15.535 3.63 1.16 1.175 2.772 3.867 4.908 8.154l6.431 1.301A2.662 2.662 0 0164 30.7v1.967a2.657 2.657 0 01-2.647 2.666h-1.92a29.645 29.645 0 011.273 8.598v5.402c0 1.115-.68 2.072-1.647 2.47v2.53A2.657 2.657 0 0156.412 57H51.47a2.657 2.657 0 01-2.647-2.667V52H21.176v2.333A2.657 2.657 0 0118.53 57h-4.94a2.657 2.657 0 01-2.648-2.667v-2.53a2.668 2.668 0 01-1.647-2.47v-5.402c0-2.915.43-5.813 1.274-8.598h-1.92A2.657 2.657 0 016 32.667V30.7c0-1.269.888-2.364 2.126-2.615l6.431-1.301c2.136-4.287 3.747-6.979 4.908-8.154C21.855 16.213 26.25 15 35 15zM19.176 51.999h-6.235v2.334c0 .371.293.667.647.667h4.941a.657.657 0 00.647-.667V52zm37.882 0h-6.235v2.334c0 .371.293.667.648.667h4.94a.657.657 0 00.648-.667L57.058 52zM35 17c-8.268 0-12.178 1.079-14.112 3.036-.996 1.008-2.609 3.727-4.756 8.074l-.218.44-7.392 1.496A.662.662 0 008 30.7v1.967c0 .37.292.666.647.666h4.676l-.642 1.951a27.64 27.64 0 00-1.387 8.647V46L45 46v2l-33.706-.001v1.334c0 .371.292.667.647.667H58.06a.657.657 0 00.647-.667L58.705 48 48 48v-2l10.705-.001v-2.068c0-2.939-.467-5.859-1.386-8.647l-.642-1.95h4.676a.657.657 0 00.647-.667V30.7c0-.32-.22-.593-.522-.654l-7.392-1.497-.218-.44c-2.147-4.346-3.76-7.065-4.756-8.073C47.178 18.08 43.268 17 35 17zm8 24v2H27v-2h16zm-24.5-8a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm33 0a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm-33 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm33 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM43 38v2H27v-2h16zm5.857-15.514L52.767 29H19v-2h30.234l-2.091-3.486 1.714-1.028zM26 19v2c-1.352 0-2.389.518-3.2 1.6l-1.6-1.2c1.189-1.585 2.819-2.4 4.8-2.4z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Car70;
