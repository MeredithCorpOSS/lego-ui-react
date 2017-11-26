import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MagnifyingGlass } from "../SvgIcons/SvgIcons";

import './Input.css';

const iconSizes = {
  small : 'tiny',
  regular : 'small',
  large : 'regular',
}

class Input extends React.Component {
  constructor() {
    super();
    this.onInputTimeout = undefined;
  }
  static propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    pattern: PropTypes.string,
    inputWaitTime: PropTypes.number,
    onInput: PropTypes.func,

    type: PropTypes.oneOf(['text', 'search', 'email', 'url']),
    look: PropTypes.oneOf(['normal', 'rounded']),
    theme: PropTypes.oneOf(['primary', 'transparent']),
    size: PropTypes.oneOf(['regular', 'large', 'small'])
  };

  static defaultProps = {
    type: 'text',
    name: 'input',
    look: 'normal',
    theme: 'primary',
    size: 'regular',
    inputWaitTime: 500
  };

  onInput = event => {
    const { props } = this;
    const { name, value } = event.target;
    if (
      !props.onInput ||
      (value.length < props.minLength && value.length !== 0)
    ) {
      return false;
    }

    clearTimeout(this.onInputTimeout);

    this.onInputTimeout = setTimeout(function() {
      props.onInput(value, name);
    }, props.inputWaitTime);
  };

  getCssClasses(props) {
    let classNames = classnames(
      'Input',
      `Input-${props.look}`,
      `Input-${props.size}`,
      `Theme-${props.theme}`,
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Input-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  renderInput(props) {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        title={props.title || props.placeholder}
        pattern={props.pattern}
        onInput={this.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        name={props.name}
        maxLength={props.maxLength}
        minLength={props.minLength}
      />
    );
  }

  render() {

    const { props } = this;
    const classNames = this.getCssClasses(props);


    let icon = props.icon;
    if(props.type === 'search' && !icon) {
      icon = <MagnifyingGlass size={iconSizes[props.size]} viewBox="0 -3 24 24"/>
    }

    return (
      <div className={classNames}>
        <span className="InputIcon">{icon}</span>
        { this.renderInput(props) }
      </div>
    )
  }
}

export default Input;
