import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './input.css';

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

  render() {
    const { props } = this;
    const className = classnames(
      'Input',
      `Input-${props.look}`,
      `Input-${props.size}`,
      `Theme-${props.theme}`
    );

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
        className={className}
      />
    );
  }
}

export default Input;
