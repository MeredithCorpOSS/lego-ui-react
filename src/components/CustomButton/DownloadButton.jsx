//@flow
import React from 'react';

import { Download } from '../../components/SvgIcons/SvgIcons';
import { LinkButton } from '../../components/Button/LinkButton';

import type { LinkButtonProps } from '../Button/Button.types';

/**
 * The Download button.
 * Accepts all the props of a regular [LinkButton Component](#linkbutton)
 *
 * @version 1.0.0
 * @author [Prathik Shetty](https://github.com/awebdeveloper)
 * @author [Sandip Pal](https://github.com/sandip-pal)
 */
export const DownloadButton = (props: LinkButtonProps) => {
  return (
    <LinkButton
      theme="warning"
      icon={Download}
      text={'Download'}
      download="true"
      {...props}
    />
  );
};
