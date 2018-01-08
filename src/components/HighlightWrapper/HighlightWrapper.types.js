//@flow
import * as React from 'react';

export type HighlightWrapperProps = {
  imageUrl?: string,
  theme:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'transparent'
    | 'secondaary',
  children: React.Node,
  classes: string
};
