export type EnvironmentString =
  | 'test'
  | 'development'
  | 'staging'
  | 'production'

export type AppConfig = {
  nameApp: string
  website: string
  debugMode: boolean
  environment: EnvironmentString
  deployEnvironment: EnvironmentString
  port: number
  endpoint: string
  defaultLanguage: string
  acceptedLanguages: string[] | []
  otherLanguages: string[] | []
  allLanguages: string[] | []
  publicPages: string[]
}
