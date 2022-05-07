import { urls } from './urls.helper';
import { detect } from 'detect-browser';
import { AxiosRequestConfig } from 'axios';

export function getSubscribeParams (email: string): AxiosRequestConfig {
  let lang = navigator.language;
  if (lang !== 'de-DE' && lang !== 'fr-FR') {
    lang = 'en-US';
  }
  return {
    method: 'POST',
    url:    urls.subscribe(),
    data:   {
      channel:       "FTOWN",
      email:         email,
      language:      lang,
      osPreferences: detect()?.os === 'iOS' ? 'iOS' : 'Android',
    },
  }
}

export function validateEmail(email: string): boolean {
  if (email === '') {
    return false;
  }
  if (email.split('@').length !== 2) {
    return false;
  }
  return true;
}
