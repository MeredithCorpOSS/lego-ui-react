import React from 'react';
import './Alert.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Wrong } from '../SvgIcons/SvgIcons';

/** * @summary Layout for Alert.
 */
export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true,
      id:
        props.id ||
        'Alert' + String(Math.ceil(Math.random() * Number.MAX_VALUE))
    };
  }

  static propTypes = {
    name: PropTypes.string,
    onCloseClick: PropTypes.func,
    look: PropTypes.oneOf(['normal', 'rounded', 'square']),
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
    classes: PropTypes.string,
    showClose: PropTypes.bool,
    duration: PropTypes.number,
    onClose: PropTypes.func
  };

  static defaultProps = {
    look: 'normal',
    theme: 'primary',
    size: 'regular',
    showClose: false,
    duration: 2000,
    closeIcon: Wrong
  };

  componentDidMount() {
    this.autoRemoveAlert();
  }

  componentWillReceiveProps(newProps, oldProps) {
    clearTimeout(this.alertCloseTimeout);
    this.setState({
      showAlert: true
    });

    this.autoRemoveAlert();
  }

  autoRemoveAlert() {
    if (!this.props.autoClose) {
      return;
    }

    this.alertCloseTimeout = setTimeout(() => {
      this.setState(
        {
          showAlert: false
        },
        () => {
          this.onClose();
        }
      );
    }, this.props.duration);
  }

  getCssClasses(props, state) {
    let classNames = classnames(
      'Alert',
      `Alert-${props.look}`,
      `Alert-${props.size}`,
      `Theme-${props.theme}`,
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Alert-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  onCloseClick = e => {
    this.setState({
      showAlert: false
    });
    this.onClose();
  };

  onClose = () => {
    const { props } = this;
    if (props.onClose) {
      props.onClose(props.name); // pass this to parent
    }
  };

  /**
   * Render method
   * @return {Object}JSX
   */
  render() {
    const { props, state } = this;
    let classNames = this.getCssClasses(props, state);

    const Icon = props.icon;
    const CloseIcon = props.closeIcon;
    if (!state.showAlert) {
      return false;
    }

    return (
      <div>
        <div id={this.state.id} className={classNames}>
          {Icon && (
            <span className="Alert-icon">
              <Icon size={props.size} />
            </span>
          )}
          {!Icon ? (
            props.text
          ) : (
            <span className="Alert-text">{props.text}</span>
          )}
          {props.showClose && (
            <div className="Alert-close" onClick={this.onCloseClick}>
              <CloseIcon size={props.size} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
