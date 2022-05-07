import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ESocialIconTypes } from 'models/social.model';

export const socialIcons = {
  [ESocialIconTypes.twitter]:   faTwitter,
  [ESocialIconTypes.instagram]: faInstagram,
  [ESocialIconTypes.facebook]:  faFacebookF,
  [ESocialIconTypes.youtube]:   faYoutube,
};
