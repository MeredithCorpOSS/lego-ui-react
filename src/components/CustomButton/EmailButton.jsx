//@flow
import React from 'react';

import { Mail } from '../../components/SvgIcons/SvgIcons';
import { LinkButton } from '../../components/Button/LinkButton';

import type { LinkButtonProps } from '../Button/Button.types';

/**
 * The Email button.
 * Accepts all the props of a regular [LinkButton Component](#linkbutton)
 *
 * @version 1.0.0
 * @author [Prathik Shetty](https://github.com/awebdeveloper)
 * @author [Sandip Pal](https://github.com/sandip-pal)
 */
export const EmailButton = (props: LinkButtonProps) => {
  return (
    <LinkButton
      theme="transparent"
      size="small"
      look="clear"
      icon={Mail}
      text="Email"
      {...props}
    />
  );
};
