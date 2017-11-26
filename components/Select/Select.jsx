import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Select.css';

class Select extends React.Component {
  constructor() {
    super();
    this.onSelectTimeout = undefined;
  }
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    window: PropTypes.number,
    SelectWaitTime: PropTypes.number,
    onSelect: PropTypes.func,

    type: PropTypes.oneOf(['text', 'search', 'email', 'url']),
    look: PropTypes.oneOf(['normal', 'rounded']),
    theme: PropTypes.oneOf(['primary', 'transparent']),
    size: PropTypes.oneOf(['regular', 'large', 'small'])
  };

  static defaultProps = {
    name: 'select',
    look: 'normal',
    theme: 'primary',
    size: 'regular',
    window: 1,
    id: String(Math.ceil(Math.random()*1000000))
  };

  OnSelect = event => {
    const { props } = this;
    const { name, value } = event.currentTarget;
    if (props.onSelect) {
      props.onSelect(name, value);
    }
  };

  getCssClasses(props) {
    let classNames = classnames(
      'Select',
      `Select-${props.look}`,
      `Select-${props.size}`,
      `Theme-${props.theme}`,
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Select-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  renderOptions(option, key) {

    return (
      <option value={option.value} key={key} >{option.text}</option>
    );
  }

  getSelected(props) {
    if(!props.value) {
      const seletedArray = props.options.filter((ele) => ele.selected);
      if(seletedArray[0]) {
        return seletedArray[0].value;
      }
    }
    return props.value;
  }

  render() {
    const { props } = this;
    const classNames = this.getCssClasses(props);
    const selected = this.getSelected(props);

    return (
      <select onChange={this.OnSelect} name={props.name} id={props.id}
        className={classNames} value={selected}>
        { props.options.map(this.renderOptions)}
      </select>
    )
  }
}

export default Select;
