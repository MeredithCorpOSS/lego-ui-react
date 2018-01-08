//@flow
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import type { SelectProps } from './Select.types';
import type { OptionType } from './Option.types';

import './Select.css';
/**
 * This the regular input element.
 *
 * @version 1.0.0
 * @author [Prathik Shetty](https://github.com/awebdeveloper)
 * @author [Sandip Pal](https://github.com/sandip-pal)
 */

export class Select extends React.Component<SelectProps> {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    window: PropTypes.number,
    onSelect: PropTypes.func,
    allowEmpty: PropTypes.bool,
    emptyText: PropTypes.string,
    look: PropTypes.oneOf(['normal', 'rounded']),
    theme: PropTypes.oneOf([
      'primary',
      'transparent',
      'secondary',
      'warning',
      'danger'
    ]),
    size: PropTypes.oneOf(['regular', 'large', 'small'])
  };

  static defaultProps = {
    name: 'select',
    look: 'normal',
    theme: 'primary',
    size: 'regular',
    emptyText: 'Select',
    window: 1
  };

  OnSelect = (event: SyntheticInputEvent<*>) => {
    const { props } = this;
    const currentTarget = event.currentTarget;
    const { name, value } = currentTarget;
    if (props.onSelect) {
      props.onSelect(value, name);
    }
  };

  getCssClasses(props: SelectProps) {
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

  renderOptions(option: OptionType, key: number) {
    return (
      <option value={option.value} key={key}>
        {option.text}
      </option>
    );
  }

  getSelected(props: SelectProps) {
    if (!props.value) {
      const seletedArray = props.options.filter(ele => ele.selected);
      if (seletedArray[0]) {
        return seletedArray[0].value;
      }
    }
    return props.value;
  }

  render() {
    const { props } = this;
    const classNames = this.getCssClasses(props);
    const selected = this.getSelected(props);
    const id =
      props.id ||
      'Select' + String(Math.ceil(Math.random() * Number.MAX_VALUE));

    return (
      <label className={classNames} htmlFor={id}>
        <select
          onChange={this.OnSelect}
          name={props.name}
          id={id}
          className="Select-dropdown"
          value={selected}
        >
          {props.allowEmpty && <option value="">{props.emptyText}</option>}
          {props.options.map(this.renderOptions)}
        </select>
      </label>
    );
  }
}

export default Select;
