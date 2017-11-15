import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

import LinkButton from '../LinkButton/LinkButton';

class Pagination extends React.Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    window: PropTypes.number.isRequired,
    look: PropTypes.oneOf(['normal', 'rounded', 'square', 'circle']),
    theme: PropTypes.oneOf([
      'primary',
      'warning',
      'danger',
      'success',
      'transparent'
    ]),
    size: PropTypes.oneOf(['regular', 'large', 'small']),
    goTo: PropTypes.func.isRequired
  };

  static defaultProps = {
    prevText: '\u00AB',
    nextText: '\u00BB'
  };

  goTo(nextPage) {
    if (this.props.currentPage !== nextPage) {
      this.props.goTo(nextPage);
    }
  }

  calculateWindowItems(totalPages, currentPage, window) {
    const mid = parseInt(window / 2, 10);
    let start = currentPage - mid;
    let end = currentPage + mid;

    if (window % 2 === 0) {
      start += 1;
    }

    /* Not enough pages before */
    if (currentPage <= mid) {
      start = 1;
      end = Math.min(window, totalPages);
    }

    /* Not enough pages after */
    if (totalPages - currentPage <= mid) {
      start = Math.max(totalPages - window + 1, 1);
      end = totalPages;
    }

    let numbers = [];
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  render() {
    const {
      currentPage,
      totalPages,
      window,
      theme,
      size,
      look,
      prevText,
      nextText
    } = this.props;

    const numbers = this.calculateWindowItems(totalPages, currentPage, window);

    return (
      <div className="Pagination">
        {currentPage === 1 ? (
          ''
        ) : (
          <LinkButton
            onClick={e => this.goTo(currentPage - 1)}
            text={prevText}
            theme={theme}
            look={look}
            size={size}
          />
        )}

        {numbers.map(i => (
          <LinkButton
            onClick={e => this.goTo(i)}
            text={i}
            key={i}
            theme={theme}
            size={size}
            active={currentPage === i}
          />
        ))}

        {currentPage === totalPages ? (
          ''
        ) : (
          <LinkButton
            onClick={e => this.goTo(currentPage + 1)}
            text={nextText}
            theme={theme}
            size={size}
            look={look}
          />
        )}
      </div>
    );
  }
}

export default Pagination;
