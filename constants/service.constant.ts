import { EServiceTypes, IServiceConfig, IServiceConfigsObject } from 'models/service.model';
import privacyConfig from 'widgets/ServiceConstructor/privacy.config.json';
import termsConfig from 'widgets/ServiceConstructor/terms.config.json';
import imprintConfig from 'widgets/ServiceConstructor/imprint.config.json';

export const serviceConfigs: IServiceConfigsObject = {
  [EServiceTypes.imprint]: (imprintConfig as IServiceConfig),
  [EServiceTypes.privacy]: (privacyConfig as IServiceConfig),
  [EServiceTypes.terms]:   (termsConfig as IServiceConfig),
};
