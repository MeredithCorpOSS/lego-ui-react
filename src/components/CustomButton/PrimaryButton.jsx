//@flow
import React from 'react';

import { Button } from '../../components/Button/Button';

import type { ButtonProps } from '../Button/Button.types';
/**
 * The Primary button.
 * Accepts all the props of a regular [Button Component](#button)
 *
 * @version 1.0.0
 * @author [Prathik Shetty](https://github.com/awebdeveloper)
 * @author [Sandip Pal](https://github.com/sandip-pal)
 */
export const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      text="Submit"
      look="rounded"
      size="small"
      theme="primary"
      {...props}
    />
  );
};
