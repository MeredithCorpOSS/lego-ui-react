//@flow
import * as React from 'react';
import type { SvgIconProps } from '../SvgIcons/SvgIcons.types';

type scrollToType = {
  x: number,
  y: number
};

export type PaginationProps = {
  currentPage: number,
  totalPages: number,
  window: number,
  look: 'normal' | 'rounded' | 'square' | 'circle' | 'clear',
  theme:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'transparent'
    | 'secondary',
  size: 'regular' | 'large' | 'small',
  goTo: Function,
  scrollTo: scrollToType,
  prevText: string,
  nextText: string,
  firstText: string,
  lastText: string
};
