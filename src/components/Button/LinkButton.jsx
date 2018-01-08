//@flow
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Button.css';

import type { LinkButtonProps } from './Button.types';

/**
 * These are the links that look like a button element.
 *
 * @version 1.0.0
 * @author [Prathik Shetty](https://github.com/awebdeveloper)
 * @author [Sandip Pal](https://github.com/sandip-pal)
 */

export class LinkButton extends React.Component<LinkButtonProps> {
  static propTypes = {
    title: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
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
    text: PropTypes.node
  };

  static expectedProps = [
    'title',
    'href',
    'onClick',
    'look',
    'theme',
    'size',
    'styles',
    'classes',
    'active',
    'highlight',
    'text',
    'icon'
  ];

  static defaultProps = {
    look: 'normal',
    theme: 'primary',
    size: 'regular',
    highlight: false,
    active: false
  };

  getCssClasses(props: LinkButtonProps) {
    let classNames = classnames(
      `Theme-${props.theme}`,
      'Button',
      `Button-${props.look}`,
      `Button-${props.size}`,
      { ' Button-active': props.active },
      { ' Button-highlight': props.highlight }
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Button-${currentValue}`;
      }, classNames);
    }
    return classNames;
  }

  filterExtraProps(props: LinkButtonProps) {
    const extraProps = {};
    Object.keys(props)
      .filter(key => this.constructor['expectedProps'].indexOf(key) === -1)
      .forEach(key => (extraProps[key] = props[key]));
    return extraProps;
  }

  render() {
    const { props } = this;
    let classNames = this.getCssClasses(props);
    const Icon = props.icon;
    const extraProps = this.filterExtraProps(props);

    return (
      <a
        href={props.href}
        title={props.title}
        disabled={props.disabled}
        onClick={props.onClick}
        className={classNames}
        {...extraProps}
      >
        {Icon && <Icon size={props.size} />}
        <span>{props.text}</span>
      </a>
    );
  }
}
