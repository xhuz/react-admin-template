import * as dev from './dev.env';
import * as prod from './prod.env';

enum EnvironmentType {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production'
}

const environments = {
  [EnvironmentType.DEVELOPMENT]: dev,
  [EnvironmentType.PRODUCTION]: prod
};

const NODE_ENV: EnvironmentType =
  (process.env.NODE_ENV as EnvironmentType) ?? EnvironmentType.DEVELOPMENT;

export const ENV = Object.freeze(environments[NODE_ENV]);
