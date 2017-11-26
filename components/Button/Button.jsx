import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Button.css';

class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    look: PropTypes.oneOf(['normal', 'rounded', 'square']),
    theme: PropTypes.oneOf([
      'primary',
      'warning',
      'danger',
      'success',
      'transparent'
    ]),
    size: PropTypes.oneOf(['regular', 'large', 'small']),
    styles: PropTypes.arrayOf(PropTypes.string),
    active: PropTypes.bool,
    highlight: PropTypes.bool,
    classes: PropTypes.string
  };

  static defaultProps = {
    type: 'button',
    name: 'button',
    look: 'normal',
    theme: 'primary',
    size: 'regular'
  };

  getCssClasses(props) {
    let classNames = classnames(
      `Theme-${props.theme}`,
      'Button',
      `Button-${props.look}`,
      `Button-${props.size}`,
      { 'Button-active': props.active },
      { 'Button-highlight': props.highlight },
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Button-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  render() {
    const { props } = this;
    let classNames = this.getCssClasses(props);

    return (
      <button
        name={props.name}
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
        className={classNames}
      >
        {props.text}
      </button>
    );
  }
}

export default Button;
