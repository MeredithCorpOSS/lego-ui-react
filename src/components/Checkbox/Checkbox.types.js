//@flow
import * as React from 'react';
import type { SvgIconProps } from '../SvgIcons/SvgIcons.types';

export type CheckboxProps = {
  name: string,
  id: string,
  index?: string,
  title?: string,
  onCheck: Function,
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
  classes?: string,
  checked: boolean,
  partial: boolean
};

export type CheckboxState = {
  checked: boolean
};
