import React, { FC } from "react";
import useDeviceDetect from "../../hooks/useDeviceDetect";

const HomeFragment: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const isMobile = useDeviceDetect();

  let fragment;
  if (isMobile) {
    fragment = (
      <svg
        width="188"
        height="490"
        viewBox="0 0 188 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M23.1503 105.998C4.66232 141.017 105.842 124.443 8.60778 257.408C-36.0051 308.832 103.163 458.939 188 489.522L188 -0.00012207L108.5 -0.00011512C64.0001 8.50001 65.2238 26.3042 23.1503 105.998Z"
          fill="url(#paint0_linear)"
          fillOpacity="0.6"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="245.097"
            y1="474.617"
            x2="245.097"
            y2="-28.0001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A1B1E4" />
            <stop
              offset="0.416667"
              stopColor="#A1B1E4"
              stopOpacity="0.831626"
            />
            <stop
              offset="0.635417"
              stopColor="#A1B1E4"
              stopOpacity="0.645833"
            />
            <stop offset="1" stopColor="#A1B1E4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else {
    fragment = (
      <svg
        width="1087"
        height="792"
        viewBox="0 0 1087 792"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M17.6221 305.325C-103.109 444.5 433.62 936.738 501.753 750.024C537.669 562.814 603.387 764.791 700.744 584.379C731.437 527.504 737.5 514.5 795 464.073C896 363.073 791.5 395 911 284C1030.5 173 1047 193.5 1069 162.5C1091 131.5 1091.5 104 1072.5 70.5C1053.5 37 958.5 1.11605e-05 958.5 1.11605e-05L795 2.54542e-05L46.3907 2.98645e-05C8.54291 71.6954 216.676 33.1008 17.6221 305.325Z"
          fill="url(#paint0_radial)"
          fillOpacity="0.6"
        />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-365.5 253) rotate(-9.55174) scale(1422.22 1419.8)"
          >
            <stop stopColor="#A1B1E4" />
            <stop
              offset="0.416667"
              stopColor="#A1B1E4"
              stopOpacity="0.831626"
            />
            <stop
              offset="0.771061"
              stopColor="#A1B1E4"
              stopOpacity="0.645833"
            />
            <stop offset="1" stopColor="#A1B1E4" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    );
  }

  return fragment;
};

export default HomeFragment;
