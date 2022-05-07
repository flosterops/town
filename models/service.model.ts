import { IConfig } from './config.model';

export enum EServiceTypes {
  privacy = 'privacy',
  imprint = 'imprint',
  terms = 'terms',
}

export type IServiceElementTypes = 'Title' | 'Description';

export interface IServiceElement extends IConfig {
  type: IServiceElementTypes;
  text: string;
}

export interface IServiceConfig {
  pageTitle: string;
  elements: IServiceElement[];
}

export type IServiceConfigsObject = {
  [key in EServiceTypes]: IServiceConfig;
};
