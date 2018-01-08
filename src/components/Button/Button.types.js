//@flow
import * as React from 'react';
import type { SvgIconProps } from '../SvgIcons/SvgIcons.types';

type BaseProps = {
  title?: string,
  onClick: Function,
  look: 'normal' | 'rounded' | 'square' | 'circle' | 'clear',
  theme:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'transparent'
    | 'secondary',
  size: 'regular' | 'large' | 'small',
  styles?: Array<string>,
  active: boolean,
  highlight: boolean,
  classes?: string,
  icon?: React.StatelessFunctionalComponent<SvgIconProps>,
  text?: string,
  children?: React.Node,
  disabled?: boolean
};

export type ButtonProps = {
  type: 'button' | 'reset' | 'submit',
  name: string
} & BaseProps;

export type LinkButtonProps = {
  href: string
} & BaseProps;
