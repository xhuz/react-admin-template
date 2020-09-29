import {resolve} from 'path';

export const resolveUrl = (baseUrl: string, ...args: string[]) => {
  return resolve(baseUrl, ...args);
};
