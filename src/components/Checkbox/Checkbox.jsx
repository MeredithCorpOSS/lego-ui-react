//@flow
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import type { CheckboxProps, CheckboxState } from './Checkbox.types';

import './Checkbox.css';

export class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  constructor(props: CheckboxProps) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    title: PropTypes.string,
    classes: PropTypes.string,
    styles: PropTypes.array,
    onCheck: PropTypes.func,
    checked: PropTypes.bool,
    partial: PropTypes.bool,
    theme: PropTypes.oneOf([
      'primary',
      'warning',
      'danger',
      'success',
      'transparent',
      'secondary'
    ]),
    look: PropTypes.oneOf(['normal', 'rounded']),
    size: PropTypes.oneOf(['regular', 'large', 'small'])
  };

  static defaultProps = {
    name: 'input',
    theme: 'primary',
    size: 'regular',
    look: 'normal',
    checked: false,
    partial: false,
    index: String(Math.ceil(Math.random() * Number.MAX_VALUE))
  };

  getCssClasses(props: CheckboxProps, state: CheckboxState) {
    let classNames = classnames(
      `Theme-${props.theme}`,
      'Checkbox',
      `Checkbox-${props.look}`,
      `Checkbox-${props.size}`,
      { 'Checkbox-checked': state.checked },
      { 'Checkbox-partial': props.partial },
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Chcekbox-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  onCheck = (e: Event) => {
    const { props, state } = this;
    this.setState({
      checked: !state.checked
    });

    if (props.onCheck) {
      props.onCheck(props.index, this.refs[props.index].checked);
    }
  };

  componentWillReceiveProps(nextProps: CheckboxProps) {
    this.setState({
      checked: nextProps.checked
    });
  }

  render() {
    const { props, state } = this;
    const id =
      props.id ||
      'Checkbox' + String(Math.ceil(Math.random() * Number.MAX_VALUE));
    const classNames = this.getCssClasses(props, state);

    return (
      <label className={classNames} htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          ref={props.index}
          onChange={e => this.onCheck(e)}
          checked={state.checked}
        />
      </label>
    );
  }
}

export default Checkbox;
