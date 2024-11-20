import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, Circle } from 'react-native-svg';
import { colors } from '../../src/theme/constants/colors';

export const SearchIcon = () => (
  <Svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
    <Path
      d='M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z'
      fill={colors.content}
    />
  </Svg>
);

export const ArrowDownIcon = () => (
  <Svg width='20' height='12' viewBox='0 0 10 6' fill='none'>
    <Path
      d='M0.75 0.75L5 5.25L9.25 0.75'
      stroke={colors.primary.blue}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
);

export const ArrowUpIcon = () => (
  <Svg width='20' height='12' viewBox='0 0 10 6' fill='none'>
    <Path
      d='M9.25 5.25L5 0.75L0.75 5.25'
      stroke={colors.primary.blue}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
);

export const NotificationIcon = () => (
  <Svg width='36' height='36' viewBox='0 0 32 32' fill='none'>
    <G clip-path='url(#clip0_7304_628)'>
      <Path
        d='M23.3334 23.1453C24.0039 23.1453 24.647 22.8795 25.1219 22.4062C25.5968 21.9328 25.8646 21.2905 25.8667 20.62C25.8663 20.2683 25.7964 19.9201 25.6612 19.5955C25.526 19.2708 25.3281 18.976 25.0787 18.728L23.4 17.048V12.0573C23.3999 11.086 23.2083 10.1243 22.8362 9.22709C22.4642 8.32989 21.9189 7.5148 21.2317 6.82843C20.5444 6.14205 19.7287 5.59785 18.831 5.22692C17.9333 4.85599 16.9713 4.66561 16 4.66666C14.0405 4.66772 12.1615 5.4468 10.7762 6.83267C9.3908 8.21854 8.6124 10.0978 8.61204 12.0573V17.044L6.93338 18.724C6.68385 18.972 6.48569 19.2667 6.35025 19.5914C6.2148 19.916 6.14473 20.2642 6.14404 20.616C6.14616 21.2865 6.414 21.9288 6.88886 22.4022C7.36372 22.8755 8.00688 23.1413 8.67738 23.1413L23.3334 23.1453Z'
        stroke={colors.content}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M14.028 27.3333H17.9706'
        stroke={colors.content}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='clip0_7304_628'>
        <Rect width='32' height='32' fill='white' />
      </ClipPath>
    </Defs>
  </Svg>
);

export const CircleIcon = () => (
  <Svg width='9' height='9' viewBox='0 0 9 9' fill='none'>
    <Circle cx='4.5' cy='4.5' r='4' fill={colors.content} />
  </Svg>
);
