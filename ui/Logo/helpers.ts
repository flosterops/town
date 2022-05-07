import { ELogoType } from 'models/logo.model';
// @ts-ignore
import smallLogo from 'public/assets/images/ft_logo_navbar.png';
// @ts-ignore
import bigLogo from 'public/assets/images/ft_logo.png';
import { IStaticImageData } from 'models/image.model';

export const getLogo = (type: ELogoType): IStaticImageData => {
  switch (type) {
    case ELogoType.small:
    default:
      return smallLogo as IStaticImageData;
    case ELogoType.big:
      return bigLogo as IStaticImageData;
  }
};
