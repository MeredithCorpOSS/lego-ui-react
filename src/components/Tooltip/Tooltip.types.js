//@flow
import * as React from 'react';

export type TooltipProps = {
  look: 'normal' | 'rounded' | 'square',
  position: 'left | top | right | bottom',
  theme:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'transparent'
    | 'secondaary',
  children?: React.Node,
  event: 'click | hover',
  toolTipMessage: string | React.Element<any>,
  styles?: Array<string>,
  classes?: string
};

export type TooltipState = {
  show: boolean
};
