import React from "react";

const ContactFragment: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="1322"
      height="1024"
      viewBox="0 0 1322 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M491.664 32.9197C220.125 116.658 67.7682 404.293 151.364 675.371C209.441 863.695 366.12 994.483 547.416 1028.71C627.081 1043.75 533.615 855.815 852.41 965.807C1020.98 1040.16 1333.19 382.21 1134.69 372.127C945.212 392.975 1118.85 270.654 917.763 230.785C624.328 172.608 721.262 -37.8849 491.664 32.9197Z"
        fill="url(#paint0_linear)"
        fillOpacity="0.6"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1134.69"
          y1="372.126"
          x2="151.364"
          y2="675.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A1B1E4" />
          <stop offset="0.416667" stopColor="#A1B1E4" stopOpacity="0.831626" />
          <stop offset="0.635417" stopColor="#A1B1E4" stopOpacity="0.645833" />
          <stop offset="1" stopColor="#A1B1E4" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ContactFragment;
