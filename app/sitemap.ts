import { MetadataRoute } from 'next'
import { baseUrl, validateEnvironmentVariables } from './_lib/utils'

type Route = {
  url: string
  lastModified: string
}

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  validateEnvironmentVariables()

  const routesMap = [''].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }))

  /* const collectionsPromise = getCollections().then((collections) =>
    collections.map((collection) => ({
      url: `${baseUrl}${collection.path}`,
      lastModified: collection.updatedAt
    }))
  );

  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url: `${baseUrl}/product/${product.handle}`,
      lastModified: product.updatedAt
    }))
  );

  const pagesPromise = getPages().then((pages) =>
    pages.map((page) => ({
      url: `${baseUrl}/${page.handle}`,
      lastModified: page.updatedAt
    }))
  ); */

  const fetchedRoutes: Route[] = []

  /* try {
    fetchedRoutes = (
      await Promise.all([collectionsPromise, productsPromise, pagesPromise])
    ).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  } */

  return [...routesMap, ...fetchedRoutes]
}
