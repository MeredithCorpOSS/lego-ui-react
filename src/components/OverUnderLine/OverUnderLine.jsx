import React from 'react';
import PropTypes from 'prop-types';
import './OverUnderLine.css';

class OverUnderLine extends React.Component {
  static propTypes = {
    over: PropTypes.string.isRequired,
    under: PropTypes.number.isRequired
  };

  render() {
    const { props } = this;
    return (
      <div className="OverUnderLine">
        <div className="OverUnderLine-over">{props.over}</div>
        <div className="OverUnderLine-under">{props.under}</div>
      </div>
    );
  }
}

export default OverUnderLine;
