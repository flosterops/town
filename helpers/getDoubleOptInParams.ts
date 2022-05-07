import { urls } from './urls.helper';
import { detect } from 'detect-browser';
import { AxiosRequestConfig } from 'axios';

export function getDoubleOptInParams (token: string): AxiosRequestConfig {
  return {
    method: 'POST',
    url:    urls.doubleOptIn(),
    data:   { token },
  }
}
