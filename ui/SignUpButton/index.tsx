import React, { ReactElement } from 'react';
// @ts-ignore
import bg from 'public/assets/images/sign_up_btn.png';
// @ts-ignore
import bgHover from 'public/assets/images/sign_up_btn_hovered.png';
import { StyledSignUp } from './styles';

interface ISignUpButton {
  width?: string;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  href?: string;
}

const SignUpButton = ({ type, onClick, href, width = '100%' }: ISignUpButton): ReactElement => (
  <StyledSignUp width={width} href={href} onClick={onClick} image={bg.src} hoverImage={bgHover.src} />
);

export { SignUpButton };
