import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { AppProps } from 'next/app';
import { Column } from 'ui';
import { ILayout } from 'ui/Layout';
import { GlobalStyle } from 'theme/global.theme';
import { appWithTranslation } from 'next-i18next';
import { gmgHelper } from 'helpers/gmg.helper';
import { gtmHelper } from 'helpers/gtm.helper';

const StyledPage = styled(Column)<ILayout>`
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

interface IApplication extends AppProps {}

const Application = ({ Component, pageProps }: IApplication): ReactElement => {
  useEffect(() => {
    gmgHelper.generate();
    gtmHelper.generate();
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledPage>
        <Component {...pageProps} />
      </StyledPage>
    </>
  )
};

export default appWithTranslation(Application);
