//@flow
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import type { TextareaProps } from './Textarea.types';

import './Textarea.css';

class Textarea extends React.Component<TextareaProps> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    pattern: PropTypes.string,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    inputWaitTime: PropTypes.number,
    onInput: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    look: PropTypes.oneOf(['normal', 'rounded']),
    size: PropTypes.oneOf(['regular', 'large', 'small']),
    theme: PropTypes.oneOf([
      'primary',
      'warning',
      'danger',
      'success',
      'transparent',
      'secondary'
    ]),
    value: PropTypes.string,
    styles: PropTypes.array,
    classes: PropTypes.string
  };

  static defaultProps = {
    name: 'textarea',
    look: 'normal',
    theme: 'primary',
    size: 'regular',
    inputWaitTime: 0,
    disabled: false,
    value: ''
  };

  onInput = (event: SyntheticInputEvent<*>) => {
    const { props } = this;
    const currentTarget = event.target;
    const { name, value } = currentTarget;
    if (props.onInput) {
      props.onInput(value, name);
    }
  };

  getCssClasses(props: TextareaProps) {
    let classNames = classnames(
      'Textarea',
      `Textarea-${props.look}`,
      `Textarea-${props.size}`,
      `Theme-${props.theme}`,
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Textarea-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  render() {
    const { props } = this;
    const className = this.getCssClasses(props);

    return (
      <textarea
        placeholder={props.placeholder}
        pattern={props.pattern}
        onInput={this.onInput}
        onChange={this.onInput}
        onFocus={props.onFocus}
        name={props.name}
        maxLength={props.maxLength}
        minLength={props.minLength}
        className={className}
        disabled={props.disabled}
        value={props.value}
      />
    );
  }
}

export default Textarea;
