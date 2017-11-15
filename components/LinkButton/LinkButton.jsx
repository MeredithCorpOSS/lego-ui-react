import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../css/Button.css';

class LinkButton extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    look: PropTypes.oneOf(['normal', 'rounded', 'square', 'circle']),
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
    highlight: PropTypes.bool
  };

  static defaultProps = {
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

  render() {
    const { props } = this;
    let classNames = this.getCssClasses(props);

    return (
      <a
        href={props.name}
        title={props.title}
        disabled={props.disabled}
        onClick={props.onClick}
        className={classNames}
      >
        {props.text}
      </a>
    );
  }
}

export default LinkButton;
