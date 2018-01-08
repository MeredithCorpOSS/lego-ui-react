import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MagnifyingGlass } from '../SvgIcons/SvgIcons';

import type { InputProps } from './Input.types';

import './Input.css';

const iconSizes = {
  small: 'tiny',
  regular: 'small',
  large: 'regular'
};

/**
 * This the regular input element.
 *
 * @version 1.0.0
 * @author [Prathik Shetty](https://github.com/awebdeveloper)
 * @author [Sandip Pal](https://github.com/sandip-pal)
 */
export class Input extends React.Component<InputProps> {
  constructor() {
    super();
    this.onInputTimeout = undefined;
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    pattern: PropTypes.string,
    inputWaitTime: PropTypes.number,
    onInput: PropTypes.func,
    type: PropTypes.oneOf(['text', 'search', 'email', 'url']),
    look: PropTypes.oneOf(['normal', 'rounded']),
    iconBefore: PropTypes.func,
    theme: PropTypes.oneOf([
      'primary',
      'warning',
      'danger',
      'success',
      'transparent',
      'secondary'
    ]),
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

  getCssClasses(props: InputProps) {
    let classNames = classnames(
      'Input',
      `Input-${props.type}`,
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

  renderInput(props: InputProps) {
    const id = 'Input' + String(Math.ceil(Math.random() * Number.MAX_VALUE));

    return (
      <input
        id={id}
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

    let iconAfter = '';
    let iconBefore = '';

    let IconAfter = props.iconAfter;
    let IconBefore = props.iconBefore;
    if (props.type === 'search' && !IconAfter) {
      iconAfter = (
        <MagnifyingGlass size={iconSizes[props.size]} viewBox="0 -3 24 24" />
      );
    } else if (IconAfter) {
      iconAfter = <IconAfter />;
    }

    if (IconBefore) {
      iconBefore = <IconBefore />;
    }

    return (
      <div className={classNames}>
        <span className="InputIcon InputIconBefore">{iconBefore}</span>
        {this.renderInput(props)}
        <span className="InputIcon InputIconAfter">{iconAfter}</span>
      </div>
    );
  }
}
