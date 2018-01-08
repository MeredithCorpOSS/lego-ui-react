//@flow
import React from 'react';
import classnames from 'classnames';

import type { HighlightWrapperProps } from './HighlightWrapper.types';
import './HighlightWrapper.css';

export class HighlightWrapper extends React.Component<HighlightWrapperProps> {
  render() {
    const { props } = this;

    const classNames = classnames(
      { [`Theme-${props.theme}`]: props.theme },
      'HighlightWrapper',
      props.classes
    );

    let styles = {};
    if (props.imageUrl) {
      styles = { backgroundImage: `url(${props.imageUrl})` };
    }

    return (
      <div className={classNames} style={styles}>
        {props.children}
      </div>
    );
  }
}
