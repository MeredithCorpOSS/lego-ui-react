import React from 'react';
import classnames from 'classnames';

import './SvgIcons.css';

function getWrapper(props, child, extra = {}) {
  const size = props.size || 'regular';
  const viewBox = props.viewBox || extra.viewBox || '0 0 24 24';

  let classNames = classnames(
    { [`Theme-${props.theme}`]: props.theme },
    'SvgIcons',
    `SvgIcons-${size}`
  );

  if (props.styles) {
    classNames = props.styles.reduce(function(prevValue, currentValue, key) {
      return prevValue + ` SvgIcons-${currentValue}`;
    }, classNames);
  }

  return (
    <svg
      className={classNames}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {child}
    </svg>
  );
}

export const HamburgerMenu = props => {
  return getWrapper(
    props,
    <g>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </g>
  );
};

export const Edit = props => {
  return getWrapper(
    props,
    <g>
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </g>
  );
};

export const MagnifyingGlass = props => {
  return getWrapper(
    props,
    <g>
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </g>
  );
};

export const Home = props => {
  return getWrapper(
    props,
    <g>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </g>
  );
};

export const Correct = props => {
  return getWrapper(
    props,
    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />,
    { viewBox: '0 -2 24 24' }
  );
};

export const Wrong = props => {
  return getWrapper(
    props,
    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />,
    { viewBox: '0 -2 24 24' }
  );
};

export const NavigationBack = props => {
  return getWrapper(
    props,
    <g>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </g>
  );
};

export const Mail = props => {
  return getWrapper(
    props,
    <g>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </g>,
    { viewBox: '0 -5 24 24' }
  );
};

export const Block = props => {
  return getWrapper(
    props,
    <g>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" />
    </g>,
    { viewBox: '0 -5 28 28' }
  );
};

export const Restore = props => {
  return getWrapper(
    props,
    <g>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
    </g>,
    { viewBox: '0 -5 24 24' }
  );
};

export const Download = props => {
  return getWrapper(
    props,
    <g>
      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
    </g>,
    { viewBox: '0 -3 24 24' }
  );
};

export const StarEmpty = props => {
  return getWrapper(
    props,
    <g>
      <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </g>
  );
};

export const StarFull = props => {
  return getWrapper(
    props,
    <g>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </g>
  );
};

export const ExtXLS = props => {
  return getWrapper(
    props,
    <g>
      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
    </g>,
    { viewBox: '0 -3 24 24' }
  );
};

export const StarHalf = props => {
  return getWrapper(
    props,
    <g>
      <path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
    </g>
  );
};
export const SquareBox = props => {
  return getWrapper(
    props,
    <g>
      <path d="M3,3V21H21V3" />
    </g>,
    { viewBox: '0 -2 24 24' }
  );
};
export const OpenInNew = props => {
  return getWrapper(
    props,
    <g>
      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
    </g>,
    { viewBox: '0 -2 24 24' }
  );
};
