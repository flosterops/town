import type { NextPage } from 'next';
import { Column } from 'ui';
import { Header, NavBar, CinematicTrailer, Footer, Newsletter, Features } from 'widgets';

const Home: NextPage = () => (
  <Column>
    <NavBar withBanner expanded />
    <Header />
    <span id='trailer' />
    <CinematicTrailer />
    <span id='newsletter' />
    <Newsletter />
    <span id='features' />
    <Features />
    <Footer />
  </Column>
);

export default Home;
