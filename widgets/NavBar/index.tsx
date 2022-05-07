import React, { ReactElement } from 'react';
import { Logo, Row, SignUpButton } from 'ui';
import { ELogoType } from 'models/logo.model';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
// @ts-ignore
import bg from 'public/assets/images/header_bg.png';
import { NavLinks } from '../NavLinks';
import { SocialMedia } from '../SocialMedia';
import { LogoWrapper, StyledNavBar } from './styles';
import { BurgerMenu } from '../BurgerMenu';
import { StoreBanner } from '../StoreBanner';

interface INavBar {
  withBanner?: boolean;
  expanded?: boolean;
}

const NavBar = ({ withBanner = false, expanded = false }: INavBar): ReactElement => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault();
    const span = document.querySelector('span#newsletter');
    if (span) {
      span.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledNavBar image={bg.src} componentHeight='80px'>
      <Row componentHeight='75px' ai={AlignItemsTypes.center}>
        <LogoWrapper
          componentHeight='100%'
          componentWidth='auto'
          ai={AlignItemsTypes.center}
          jc={JustifyContentTypes.center}
        >
          <Logo redirect type={ELogoType.small} />
        </LogoWrapper>
        {expanded && <NavLinks />}
      </Row>
      <Row componentHeight='80px' ai={AlignItemsTypes.center} jc={JustifyContentTypes.flexEnd}>
        {expanded && <SignUpButton width='230px' onClick={handleClick} />}
        <SocialMedia />
        {withBanner && <StoreBanner />}
        {/* MOBILE */}
        {expanded && <BurgerMenu />}
      </Row>
    </StyledNavBar>
  );
};

export { NavBar };
