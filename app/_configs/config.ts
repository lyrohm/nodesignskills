import { HOME_PAGE } from '../_data/constants/pageConstants'
import { AppConfig, EnvironmentString } from '../_types/config'

const environment: EnvironmentString = (process.env.NODE_ENV ||
  'development') as EnvironmentString
const deployEnvironment: EnvironmentString = (process.env.DEPLOY_ENV ||
  environment) as EnvironmentString

const config: AppConfig = {
  nameApp: 'Nodesignskills',
  website: process.env.NEXT_PUBLIC_WEBSITE || '',
  environment,
  deployEnvironment,
  debugMode: process.env.NEXT_PUBLIC_DEBUG_MODE === 'true' ? true : false,
  port: parseInt(process.env.PORT || '4000', 10),
  endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
  defaultLanguage: process.env.DEFAULT_LANGUAGE || 'en',
  otherLanguages: ['en'],
  allLanguages: ['en', 'fr'],
  acceptedLanguages: (process.env.ACCEPTED_LANGUAGES || 'fr,en').split(','),
  publicPages: [HOME_PAGE]
}

export default config
