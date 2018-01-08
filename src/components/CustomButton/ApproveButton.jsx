//@flow
import React from 'react';

import { Correct } from '../../components/SvgIcons/SvgIcons';
import { Button } from '../../components/Button/Button';

import type { ButtonProps } from '../Button/Button.types';

/**
 * The Approve button.
 * Accepts all the props of a regular [Button Component](#button)
 *
 * @version 1.0.0
 * @author [Prathik Shetty](https://github.com/awebdeveloper)
 * @author [Sandip Pal](https://github.com/sandip-pal)
 */
export const ApproveButton = (props: ButtonProps) => {
  return <Button theme="primary" icon={Correct} text="Approve" {...props} />;
};
