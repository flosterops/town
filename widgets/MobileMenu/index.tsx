import React, { ReactElement } from 'react';
import { Logo, Row, SignUpButton } from 'ui';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { MobileMenuFooter, MobileModalHeader, MobileSignUpWrapper, StyledMobileMenu } from './styles';
// @ts-ignore
import closeImg from 'public/assets/images/close_navbar_mobile.png';
// @ts-ignore
import bg from 'public/assets/images/navbar_links_bg_tile_mobile.png';
// @ts-ignore
import navBarBg from 'public/assets/images/header_bg.png';
import { ELogoType } from 'models/logo.model';
import { MobileSocialMedia } from 'widgets/SocialMedia/MobileSocialMedia';
import { BurgerButton } from 'widgets/BurgerMenu/styles';
import { MobileNavLinks } from '../NavLinks/MobileNavLinks';

interface IMobileMenu {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MobileMenu = ({ open, setOpen }: IMobileMenu): ReactElement => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, anchor: string): void => {
    e.preventDefault();
    setOpen(false);
    const span = document.querySelector<HTMLElement>(`span#${anchor}`);
    if (span) {
      span.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <StyledMobileMenu image={bg.src} open={open} componentWidth='100%' componentHeight='45vh'>
      <MobileModalHeader image={navBarBg.src} componentHeight='185px'>
        <Row componentHeight='73px' jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
          <Logo width={90} height={55} type={ELogoType.small} />
        </Row>
      </MobileModalHeader>
      <MobileNavLinks handleClick={handleLinkClick} />
      <MobileSignUpWrapper jc={JustifyContentTypes.center} componentHeight='80px'>
        <SignUpButton
          onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => handleLinkClick(e, 'newsletter')}
        />
      </MobileSignUpWrapper>
      <MobileMenuFooter>
        <MobileSocialMedia />
        <BurgerButton onClick={(): void => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={closeImg.src} alt='close' />
        </BurgerButton>
      </MobileMenuFooter>
    </StyledMobileMenu>
  );
};

export { MobileMenu };
