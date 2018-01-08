//@flow
import React from 'react';

import { Wrong } from '../../components/SvgIcons/SvgIcons';
import { Button } from '../../components/Button/Button';

import type { ButtonProps } from '../Button/Button.types';

/**
 * The Reject button.
 * Accepts all the props of a regular [Button Component](#button)
 *
 * @version 1.0.0
 * @author [Prathik Shetty](https://github.com/awebdeveloper)
 * @author [Sandip Pal](https://github.com/sandip-pal)
 */
export const RejectButton = (props: ButtonProps) => {
  return <Button theme="secondary" icon={Wrong} text="Reject" {...props} />;
};
