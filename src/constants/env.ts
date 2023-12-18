export enum EnvironmentType {
  Production = 'production',
  Test = 'test',
  Development = 'development',
}

export const IS_PRODUCTION = process.env.ENVIRONMENT === EnvironmentType.Production
