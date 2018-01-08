//@flow
import * as React from 'react';

export type GridProps = {
  children: React.Node,
  styles?: Array<string>,
  classes?: string,
  size: 'regular' | 'large' | 'small',
  look: 'normal' | 'space-between' | 'space-around'
};
