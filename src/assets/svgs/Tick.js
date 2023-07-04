import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgTick = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#344054"
      fillRule="evenodd"
      d="M5.665 1.5C3.135 1.5 1.5 3.233 1.5 5.916v8.168c0 2.683 1.635 4.416 4.165 4.416h8.668c2.531 0 4.167-1.733 4.167-4.416V5.916c0-2.683-1.636-4.416-4.166-4.416H5.665ZM14.333 20H5.665C2.276 20 0 17.622 0 14.084V5.916C0 2.378 2.276 0 5.665 0h8.669C17.723 0 20 2.378 20 5.916v8.168C20 17.622 17.723 20 14.333 20Z"
      clipRule="evenodd"
    />
    <Path
      fill="#344054"
      fillRule="evenodd"
      d="M8.814 13.123a.746.746 0 0 1-.53-.22L5.91 10.53a.749.749 0 1 1 1.06-1.06l1.844 1.842 4.216-4.215a.749.749 0 1 1 1.06 1.06l-4.746 4.746a.744.744 0 0 1-.53.22Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTick;
