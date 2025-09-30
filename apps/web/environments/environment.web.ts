import { env } from './env'
import { Environment, getCharacterUrl, getModelsUrl, getNwDataUrl } from './utils'

export const environment: Environment = {
  ...env,
  cdnUrl: env.cdnUrl,
  production: true,
  standalone: false,
  environment: 'WEB',
  modelsUrl: getModelsUrl(env, 'cdnUrl'),
  nwImagesUrl: getNwDataUrl(env, 'deployUrl'),
  nwTilesUrl: getNwDataUrl(env, 'deployUrl'),
  nwDataUrl: getNwDataUrl(env, 'deployUrl'),
  nwCharUrl: getCharacterUrl(env, 'cdnUrl'),
}
