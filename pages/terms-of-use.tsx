import type { NextPage } from 'next';
import { Column } from 'ui';
import { Footer, NavBar, ServiceConstructor } from 'widgets';
import { EServiceTypes } from 'models/service.model';
// @ts-ignore
import titleImage from 'public/assets/images/terms_headline.png';

const TermsOfUse: NextPage = () => (
  <Column>
    <NavBar />
    <ServiceConstructor type={EServiceTypes.terms} image={titleImage.src} />
    <Footer />
  </Column>
);

export default TermsOfUse;
