//@flow
import React from 'react';

import { Block } from '../../components/SvgIcons/SvgIcons';
import { Button } from '../../components/Button/Button';

import type { ButtonProps } from '../Button/Button.types';

/**
 * The Block button.
 * Accepts all the props of a regular [Button Component](#button)
 *
 * @version 1.0.0
 * @author [Prathik Shetty](https://github.com/awebdeveloper)
 * @author [Sandip Pal](https://github.com/sandip-pal)
 */
export const BlockButton = (props: ButtonProps) => {
  return (
    <Button theme="danger" size="small" icon={Block} text="Block" {...props} />
  );
};
