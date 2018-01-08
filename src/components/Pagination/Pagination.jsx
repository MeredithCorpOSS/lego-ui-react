//@flow
import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

import { LinkButton } from '../Button/LinkButton';

import type { PaginationProps } from './Pagination.types';

class Pagination extends React.Component<PaginationProps> {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    window: PropTypes.number.isRequired,
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
    goTo: PropTypes.func.isRequired,
    scrollTo: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    ])
  };

  static defaultProps = {
    prevText: '\u02C2',
    nextText: '\u02C3',
    firstText: '\u00AB',
    lastText: '\u00BB',
    scrollTo: {
      x: 0,
      y: 0
    },
    theme: 'primary',
    look: 'clear',
    currentPage: 1
  };

  goTo(nextPage: number) {
    const { props } = this;

    if (props.currentPage !== nextPage) {
      props.goTo(nextPage);
    }

    if (props.scrollTo !== false) {
      window.scrollTo(props.scrollTo.x, props.scrollTo.y);
    }
  }

  calculateWindowItems(
    totalPages: number,
    currentPage: number,
    window: number
  ) {
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

  renderButton(text: string, page: number, active: boolean = false) {
    const { theme, size, look } = this.props;

    return (
      <LinkButton
        href="#"
        onClick={e => this.goTo(page)}
        text={text}
        theme={theme}
        look={look}
        size={size}
        active={active}
        key={text}
      />
    );
  }

  render() {
    const {
      currentPage,
      totalPages,
      window,
      prevText,
      nextText,
      firstText,
      lastText
    } = this.props;

    const numbers = this.calculateWindowItems(totalPages, currentPage, window);
    const showFirstPage = currentPage > 1;
    const showLastPage = currentPage !== totalPages && totalPages >= 1;

    return (
      <div className="Pagination">
        {showFirstPage && this.renderButton(firstText, 1)}
        {showFirstPage && this.renderButton(prevText, currentPage - 1)}
        {numbers.length > 1 &&
          numbers.map(i =>
            this.renderButton(i.toString(), i, currentPage === i)
          )}
        {showLastPage && this.renderButton(nextText, currentPage + 1)}
        {showLastPage && this.renderButton(lastText, totalPages)}
      </div>
    );
  }
}

export default Pagination;
