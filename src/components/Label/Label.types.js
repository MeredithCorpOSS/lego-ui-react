//@flow
import * as React from 'react';
import type { SvgIconProps } from '../SvgIcons/SvgIcons.types';

export type LabelProps = {
  look: 'normal' | 'rounded' | 'square' | 'circle' | 'clear',
  theme:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'transparent'
    | 'secondaary',
  size: 'regular' | 'large' | 'small',
  styles?: Array<string>,
  classes: string,
  children?: React.Node
};
