//@flow
import * as React from 'react';
import type { SvgIconProps } from '../SvgIcons/SvgIcons.types';

export type TextareaProps = {
  name: string,
  id: string,
  placeholder?: string,
  title?: string,
  pattern?: string,
  minLength?: number,
  maxLength?: number,
  inputWaitTime?: number,
  onInput: Function,
  onFocus?: Function,
  onBlur?: Function,
  onInputTimeout?: Function,
  disabled: boolean,
  type: 'text' | 'search' | 'email' | 'url',
  look: 'normal' | 'rounded',
  size: 'regular' | 'large' | 'small',
  theme:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'transparent'
    | 'secondaary',
  value: string,
  styles?: Array<string>,
  classes?: string
};
