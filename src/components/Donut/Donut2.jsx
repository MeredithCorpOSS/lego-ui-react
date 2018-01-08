import React from 'react';
import PropTypes from 'prop-types';
import './Donut2.css';

class Donut2 extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: null
    };
  }

  static propTypes = {
    percent: PropTypes.number.isRequired
  };

  getParts(percent) {
    var partB = 388;
    let partA = percent * partB / 100;
    if (partA !== 0) {
      partA += 38;
    }
    if (partA > 90) {
      partA += 44;
    }
    return [partA, partB];
  }

  render() {
    const [partA, partB] = this.getParts(this.props.percent);

    return (
      <div className="Donut2">
        <svg>
          <style
          >{`.Donut2 circle {stroke-dasharray: ${partA} ${partB}}`}</style>
          <circle r="75" cx="125" cy="125" />
        </svg>
      </div>
    );
  }
}

export default Donut2;
