import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const SvgSnow = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10.994 12.001-5.113 2.991-4.053-1.86-.832 1.83 2.766 1.27-1.522.89.99 1.737 1.522-.89-.298 3.061 1.98.186.437-4.486 5.116-2.992v6.015l-3.62 2.627L9.542 24l2.445-1.775V24h2v-1.776l2.445 1.775 1.175-1.619-3.62-2.627V13.75l5.127 3 .436 4.486 1.981-.185-.298-3.062 1.522.89.99-1.738-1.521-.89 2.766-1.27-.832-1.83-4.053 1.86-5.15-3.01 5.134-3.003 4.08 1.872.831-1.83-2.792-1.282 1.54-.9-.991-1.738-1.51.883.295-3.032-1.98-.185-.434 4.457-5.141 3.007V4.268l3.643-2.645L16.455.005l-2.468 1.791V0h-2v1.762L9.565.005 8.39 1.623l3.597 2.61v6.032l-5.1-2.983-.44-4.515-1.98.185.3 3.09-1.539-.9-.99 1.738 1.51.883-2.74 1.257.833 1.83 4.026-1.848 5.127 3Z"
      fill="url(#Snow_svg__a)"
    />
    <Defs>
      <LinearGradient
        id="Snow_svg__a"
        x1={12.998}
        y1={0}
        x2={12.998}
        y2={24}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B2D4F7" />
        <Stop offset={1} stopColor="#D9E2F3" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgSnow;
