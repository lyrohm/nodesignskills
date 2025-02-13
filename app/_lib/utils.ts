import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { requiredEnvironmentVariables } from '../_data/constants/commonConstants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

export const getAppTItle = (path: string) => {
  const regexPlugins = /\/plugins\//
  const contientPlugins = regexPlugins.test(path)
  if (contientPlugins) return 'Détails plugin'

  switch (path) {
    case 'test':
      return 'Page test'
    default:
      return 'dashboard'
  }
}

export const isObject = (
  object: unknown
): object is Record<string, unknown> => {
  return typeof object === 'object' && object !== null && !Array.isArray(object)
}

export const validateEnvironmentVariables = () => {
  const missingEnvironmentVariables = [] as string[]

  requiredEnvironmentVariables.forEach(envVar => {
    if (!process.env[envVar]) {
      missingEnvironmentVariables.push(envVar)
    }
  })

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join(
        '\n'
      )}\n`
    )
  }

  if (
    process.env.SHOPIFY_STORE_DOMAIN?.includes('[') ||
    process.env.SHOPIFY_STORE_DOMAIN?.includes(']')
  ) {
    throw new Error(
      'Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.'
    )
  }
}
