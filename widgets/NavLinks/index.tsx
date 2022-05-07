import React, { ReactElement } from 'react';
import { Row } from 'ui';
import { IConfig } from 'models/config.model';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { NavLinksWrapper, StyledLink } from './styles';
import config from './config.json';

export interface ILinkConfig extends IConfig {
  name: string;
  anchor: string;
}

const NavLinks = (): ReactElement => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, anchor: string): void => {
    e.preventDefault();
    const span = document.querySelector<HTMLElement>(`span#${anchor}`);
    if (span) {
      span.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavLinksWrapper componentHeight='100%' ai={AlignItemsTypes.center}>
      {(config as ILinkConfig[]).map(
        (link: ILinkConfig): ReactElement => (
          <Row
            componentWidth='auto'
            componentHeight='100%'
            ai={AlignItemsTypes.center}
            jc={JustifyContentTypes.center}
            key={link.id}
          >
            <StyledLink
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => handleClick(e, link.anchor)}
              href={`${link.anchor}#`}
            >
              {link.name}
            </StyledLink>
          </Row>
        )
      )}
    </NavLinksWrapper>
  );
};

export { NavLinks };
