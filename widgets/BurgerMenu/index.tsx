import React, { ReactElement, useState } from 'react';
// @ts-ignore
import burger from 'public/assets/images/open_menu_mobile.png';
import { BurgerButton, StyledBurgerMenu } from './styles';
import { MobileMenu } from '../MobileMenu';
import { JustifyContentTypes } from 'models/layout.model';

const BurgerMenu = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledBurgerMenu jc={JustifyContentTypes.flexEnd} componentWidth='auto'>
      <BurgerButton onClick={(): void => setOpen(true)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={burger.src} alt='Burger button' />
      </BurgerButton>
      <MobileMenu open={open} setOpen={setOpen} />
    </StyledBurgerMenu>
  );
};

export { BurgerMenu };
