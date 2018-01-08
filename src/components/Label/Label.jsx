// @flow

import React from 'react';
import classnames from 'classnames';

import type { LabelProps } from './Label.types';

import './Label.css';

export class Label extends React.Component<LabelProps> {
  static defaultProps = {
    look: 'normal',
    theme: 'primary',
    size: 'regular'
  };

  getCssClasses(props: LabelProps) {
    let classNames = classnames(
      `Theme-${props.theme}`,
      'Label',
      `Label-${props.look}`,
      `Label-${props.size}`,
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Label-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  render() {
    const props: LabelProps = this.props;
    let classNames = this.getCssClasses(props);

    return <label className={classNames}>{props.children}</label>;
  }
}
