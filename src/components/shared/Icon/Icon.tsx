import React from 'react';
import iconConfig from '@/config/svgIcons';
import { IconPropsType } from '@types';

const Icon: React.FC<IconPropsType> = ({ width, height, color, icon, bg }) => {
  return (
    <svg
      style={{ backgroundColor: bg }}
      width={width ?? 20}
      height={height ?? 20}
      fill={
        color
          ? `${color}`
          : iconConfig[icon].fill
            ? `${iconConfig[icon].fill}`
            : `currentColor`
      }
      viewBox={iconConfig[icon].viewBox}
    >
      {iconConfig[icon].fragment}
    </svg>
  );
};
export default Icon;
