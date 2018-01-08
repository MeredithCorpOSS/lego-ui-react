import React from 'react';
import classnames from 'classnames';
import './MenuTooltip.css';

export class MenuTooltip extends React.Component {
  render() {
    var newChildren = this.props.children.map((child, key) => {
      const className = classnames('MenuTooltip-item', child.props.className);

      return React.cloneElement(child, { className, key });
    });

    return <div>{newChildren}</div>;
  }
}
