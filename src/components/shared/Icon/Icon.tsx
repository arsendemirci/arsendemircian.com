import React from 'react';
import iconConfig from '@/config/svgIcons';
import { IconPropsType } from '@types';

const Icon: React.FC<IconPropsType> = ({ width, height, color, icon }) => {
  return (
    <svg
      width={width ?? 20}
      height={height ?? 20}
      fill={color ?? `currentColor`}
      viewBox={iconConfig[icon].viewBox}
    >
      {iconConfig[icon].fragment}
    </svg>
  );
};
export default Icon;
