import { EServiceTypes, IServiceConfig } from 'models/service.model';
import { serviceConfigs } from 'constants/service.constant';

export const getServiceConfig = (type: EServiceTypes): IServiceConfig => serviceConfigs[type]
