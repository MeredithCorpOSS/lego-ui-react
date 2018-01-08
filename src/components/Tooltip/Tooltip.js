// @flow

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import type { TooltipProps, TooltipState } from './Tooltip.types';

import './Tooltip.css';

export class Tooltip extends React.Component<TooltipProps, TooltipState> {
  static propTypes = {
    theme: PropTypes.oneOf([
      'primary',
      'warning',
      'danger',
      'success',
      'transparent',
      'secondary'
    ]),
    position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    look: PropTypes.oneOf(['rounded', 'square']),
    event: PropTypes.oneOf(['click', 'hover']),
    children: PropTypes.node,
    toolTipMessage: PropTypes.node,
    styles: PropTypes.array,
    classes: PropTypes.string
  };

  constructor(props: TooltipProps) {
    super(props);
    this.state = {
      show: false
    };
  }

  static defaultProps = {
    event: 'hover',
    look: 'square',
    theme: 'transparent'
  };

  getCssClasses(props: TooltipProps) {
    let classNames = classnames(
      `Theme-${props.theme}`,
      `Tooltip-${props.look}`,
      `Tooltip-${props.position}`,
      'Tooltip',
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Tooltip-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  showTooltip = (e: Event) => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const props = this.props;
    const { state } = this;
    let classNames = this.getCssClasses(props);

    return (
      <div
        className="Tooltip-wrapper"
        onClick={props.event === 'click' && this.showTooltip}
        onMouseOver={props.event === 'hover' && this.showTooltip}
        onMouseLeave={props.event === 'hover' && this.showTooltip}
      >
        <div>{props.children}</div>
        {state.show && (
          <span className={classNames}>{props.toolTipMessage}</span>
        )}
      </div>
    );
  }
}
