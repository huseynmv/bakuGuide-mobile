import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const SvgBrokenClouds = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.532 6.056c.354-.037.713-.056 1.076-.056 4.861 0 8.958 3.39 10.213 8.014.1-.007.201-.01.303-.013h-.158V14h1.594a3.5 3.5 0 1 0-1.838-6.515 5.497 5.497 0 0 0-.243-1.606 5.761 5.761 0 0 0-10.947.177Zm15.645 9.25C26.887 16.576 28 18.653 28 21c0 3.866-3.022 7-6.75 7-.084 0-.167-.002-.25-.005V28H10.767v-.001l-.159.001C4.75 28 0 23.075 0 17c0-4.906 3.097-9.061 7.374-10.48A7.76 7.76 0 0 1 22.29 5.005a5.5 5.5 0 0 1 2.887 10.302ZM21 26H10.608C5.922 26 2 22.04 2 17s3.922-9 8.608-9c3.976 0 7.401 2.85 8.349 6.791l.003-.001c.134.547.22 1.114.25 1.695A4.54 4.54 0 0 1 21.25 16c2.555 0 4.75 2.17 4.75 5 0 2.81-2.164 4.97-4.697 5H21Z"
      fill="url(#BrokenClouds_svg__a)"
    />
    <Defs>
      <LinearGradient
        id="BrokenClouds_svg__a"
        x1={14}
        y1={0}
        x2={14}
        y2={28}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B2D4F7" />
        <Stop offset={1} stopColor="#D9E2F3" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgBrokenClouds;
