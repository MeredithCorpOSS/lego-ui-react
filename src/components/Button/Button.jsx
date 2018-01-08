// @flow

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import type { ButtonProps } from './Button.types';

import './Button.css';

/**
 * This the regular button element.
 *
 * @version 1.0.0
 * @author [Prathik Shetty](https://github.com/awebdeveloper)
 * @author [Sandip Pal](https://github.com/sandip-pal)
 */

export class Button extends React.Component<ButtonProps> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    look: PropTypes.oneOf(['normal', 'rounded', 'square', 'circle', 'clear']),
    theme: PropTypes.oneOf([
      'primary',
      'warning',
      'danger',
      'success',
      'transparent',
      'secondary'
    ]),
    size: PropTypes.oneOf(['regular', 'large', 'small']),
    styles: PropTypes.arrayOf(PropTypes.string),
    active: PropTypes.bool,
    highlight: PropTypes.bool,
    classes: PropTypes.string,
    disabled: PropTypes.bool
  };

  static expectedProps = [
    'title',
    'href',
    'onClick',
    'look',
    'theme',
    'size',
    'classes',
    'styles',
    'active',
    'highlight',
    'text',
    'icon',
    'type'
  ];

  static defaultProps = {
    type: 'button',
    name: 'button',
    look: 'normal',
    theme: 'primary',
    size: 'regular'
  };

  filterExtraProps(props: ButtonProps) {
    const extraProps = {};
    Object.keys(props)
      .filter(key => this.constructor['expectedProps'].indexOf(key) === -1)
      .forEach(key => (extraProps[key] = props[key]));
    return extraProps;
  }

  getCssClasses(props: ButtonProps) {
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
    const props: ButtonProps = this.props;
    let classNames = this.getCssClasses(props);
    const Icon = props.icon;
    const extraProps = this.filterExtraProps(props);

    return (
      <button
        name={props.name}
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
        className={classNames}
        {...extraProps}
      >
        {Icon && <Icon size={props.size} />}
        {!Icon ? props.text : <span>{props.text}</span>}
        {props.children}
      </button>
    );
  }
}
