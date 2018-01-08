//@flow
import React from 'react';
import classnames from 'classnames';

import type { GridProps } from './Grid.types';
import './Grid.css';

export class Grid extends React.Component<GridProps> {
  static defaultProps = {
    size: 'regular',
    look: 'normal'
  };

  getCssClasses(props: GridProps) {
    let classNames = classnames(
      'Grid',
      `Grid-${props.size}`,
      `Grid-${props.look}`,
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Grid-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  render() {
    const { props } = this;

    const classNames = this.getCssClasses(props);

    return (
      <div className={classNames}>
        {React.Children.map(props.children, (ele, i) => {
          return (
            <div className="Grid-Item" key={i}>
              {ele}
            </div>
          );
        })}
      </div>
    );
  }
}
