import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const SvgSuccess = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={108}
    height={108}
    fill="none"
    {...props}>
    <Rect width={100} height={100} x={4} y={4} fill="#D1FADF" rx={48} />
    <Path
      stroke="#039855"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m49.5 54 3 3 6-6m5.5 3c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
    />
    <Rect
      width={100}
      height={100}
      x={4}
      y={4}
      stroke="#ECFDF3"
      strokeWidth={8}
      rx={48}
    />
  </Svg>
);
export default SvgSuccess;
