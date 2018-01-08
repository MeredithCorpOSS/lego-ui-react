//@flow
import * as React from 'react';
import type { OptionType } from './Option.types';

export type SelectProps = {
  name: string,
  id: string,
  window?: number,
  allowEmpty?: Boolean,
  emptyText: string,
  onSelect: Function,
  value?: string,
  options: Array<OptionType>,
  look: 'normal' | 'rounded',
  theme:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'transparent'
    | 'secondaary',
  size: 'regular' | 'large' | 'small',
  styles?: Array<string>,
  classes?: string
};
