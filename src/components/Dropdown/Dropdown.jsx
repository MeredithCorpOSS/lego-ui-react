import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button/Button';

import './Dropdown.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  static propTypes = {
    name: PropTypes.string,
    side: PropTypes.oneOf(['left', 'right']),
    open: PropTypes.bool,
    attached: PropTypes.bool,
    id: PropTypes.string,
    theme: PropTypes.string,
    classes: PropTypes.string,
    listClasses: PropTypes.string,
    onOpen: PropTypes.func
  };

  static defaultProps = {
    name: 'dropdown',
    side: 'left',
    attached: true,
    open: false,
    theme: 'primary',
    id: String(Math.ceil(Math.random() * 1000000))
  };

  onOpen = () => {
    const { state, props } = this;
    const open = !state.open;
    this.setState({
      open: open
    });

    if (props.onOpen) {
      props.onOpen(open);
    }
  };

  getCssClasses(props, state) {
    let dropdownClassNames = classnames(
      'Dropdown',
      `Theme-${props.theme}`,
      props.classes
    );

    let dropdownListClassNames = classnames(
      'Dropdown-menu',
      `Dropdown-${props.side}`,
      { 'Dropdown-open': state.open },
      { 'Dropdown-attached': props.attached },
      props.listClasses
    );

    return { dropdownClassNames, dropdownListClassNames };
  }

  render() {
    const { props, state } = this;
    let { dropdownClassNames, dropdownListClassNames } = this.getCssClasses(
      props,
      state
    );

    return (
      <div className={dropdownClassNames}>
        <Button
          name={props.name}
          type="button"
          text={props.text}
          theme={props.theme}
          id={props.id}
          look="square"
          aria-haspopup="true"
          onClick={this.onOpen}
        />
        <div
          className={dropdownListClassNames}
          aria-labelledby={this.id}
          onClick={this.onOpen}
        >
          {props.child}
        </div>
      </div>
    );
  }
}

export default Dropdown;
