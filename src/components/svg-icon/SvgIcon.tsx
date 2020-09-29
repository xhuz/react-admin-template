import React from 'react';

interface SvgIconProps {
  iconName: string;
  style?: any;
}

export function SvgIcon({iconName, style}: SvgIconProps) {
  return (
    <svg className="svg-icon" aria-hidden="true" style={{...style}}>
      <style jsx>{`
        .svg-icon {
          width: 1em;
          height: 1em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
      `}</style>
      <use href={'#icon-' + iconName} />
    </svg>
  );
}
