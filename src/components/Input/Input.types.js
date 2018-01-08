//@flow
import * as React from 'react';
import type { SvgIconProps } from '../SvgIcons/SvgIcons.types';

export type InputProps = {
  name: string,
  id: string,
  placeholder?: string,
  title?: string,
  pattern?: string,
  inputWaitTime?: number,
  onInput?: Function,
  onFocus?: Function,
  onBlur?: Function,
  minLength?: number,
  maxLength?: number,
  onInputTimeout?: Function,
  iconAfter?: React.StatelessFunctionalComponent<SvgIconProps>,
  iconBefore?: React.StatelessFunctionalComponent<SvgIconProps>,
  type: 'text' | 'search' | 'email' | 'url',
  look?: 'normal' | 'rounded',
  theme?:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'transparent'
    | 'secondaary',
  size?: 'regular' | 'large' | 'small',
  styles?: Array<string>,
  classes?: string
};
