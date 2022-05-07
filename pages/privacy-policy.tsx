import type { NextPage } from 'next';
import { Column } from 'ui';
import { Footer, NavBar, ServiceConstructor } from 'widgets';
import { EServiceTypes } from 'models/service.model';
// @ts-ignore
import titleImage from 'public/assets/images/privacy-policy_headline.png';

const PrivacyPolicy: NextPage = () => (
  <Column>
    <NavBar />
    <ServiceConstructor type={EServiceTypes.privacy} image={titleImage.src} />
    <Footer />
  </Column>
);

export default PrivacyPolicy;
