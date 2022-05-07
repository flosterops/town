import React, { ReactElement } from 'react';
// @ts-ignore
import bg from 'public/assets/images/sign_up_btn.png';
// @ts-ignore
import bgHover from 'public/assets/images/sign_up_btn_hovered.png';
import { StyledSubmit } from './styles';

interface ISignUpButton {
  width?: string;
}

const SubmitButton = ({ width = '100%' }: ISignUpButton): ReactElement => (
  <StyledSubmit type='submit' width={width} image={bg.src} hoverImage={bgHover.src} />
);

export { SubmitButton };
