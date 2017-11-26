import React from 'react';
import classnames from 'classnames';

import "./SvgIcons.css"

function getWrapper(props, child) {
  const size = props.size || 'regular';
  const viewBox = props.viewBox || "0 0 24 24";

  const classNames = classnames(
    { [`Theme-${props.theme}`] : props.theme },
    'SvgIcons',
    `SvgIcons-${size}`,
  );
  return (
    <svg className={classNames} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
       {child}
    </svg>
  );

}

export const Star = (props) => {
  return getWrapper(props, <g>
    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </g>);
}

export const HamburgerMenu = (props) => {
  return getWrapper(props, <g>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </g>);
}

export const Edit = (props) => {
  return getWrapper(props, <g>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </g>);
}

export const MagnifyingGlass = (props) => {
  return getWrapper(props, <g>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </g>);
}

export const Home = (props) => {
  return getWrapper(props, <g>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none" />
  </g>);
}
