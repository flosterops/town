import React, { ReactElement } from 'react';
import { Column } from 'ui/Layout';
import config from './config.json';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { ILinkConfig } from './index';
import { MobileNavLink, MobileNavLinksWrapper } from './styles';

interface IMobileNavLinks {
  handleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, anchor: string) => void;
}

const MobileNavLinks = ({ handleClick }: IMobileNavLinks): ReactElement => (
  <MobileNavLinksWrapper mtop='-90px' jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
    {(config as ILinkConfig[]).map(
      (link: ILinkConfig): ReactElement => (
        <Column
          componentWidth='auto'
          componentHeight='100%'
          ai={AlignItemsTypes.center}
          jc={JustifyContentTypes.center}
          key={link.id}
        >
          <MobileNavLink
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => handleClick(e, link.anchor)}
            href={`${link.anchor}#`}
          >
            {link.name}
          </MobileNavLink>
        </Column>
      )
    )}
  </MobileNavLinksWrapper>
);

export { MobileNavLinks };
