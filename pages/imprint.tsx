import type, { NextPage } from 'next';
import { Column } from 'ui';
import { Footer, NavBar, ServiceConstructor } from 'widgets';
import { EServiceTypes } from 'models/service.model';
// @ts-ignore
import titleImage from 'public/assets/images/imprint_headline.png';

const Imprint: NextPage = () => (
  <Column>
    <NavBar />
    <ServiceConstructor type={EServiceTypes.imprint} image={titleImage.src} />
    <Footer />
  </Column>
);

export default Imprint;
