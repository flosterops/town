import React, { ReactElement } from 'react';
import { ELogoType } from 'models/logo.model';
import { getLogo } from './helpers';
import { StyledLogo } from './styles';
import { useRouter } from 'next/router';

interface ILogo {
  type: ELogoType;
  width?: number;
  height?: number;
  redirect?: boolean;
}

const Logo = ({ type, width, height, redirect = false }: ILogo): ReactElement => {
  const logo = getLogo(type);
  const router = useRouter();
  const handleClick = (): void => {
    if (redirect) {
      router.push('/');
    }
  };
  /* eslint-disable-next-line @next/next/no-img-element */
  return <StyledLogo pointer={redirect} onClick={handleClick} width={width} height={height} src={logo.src} alt='logo' />;
};

export { Logo };
