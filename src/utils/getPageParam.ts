export const getPageParam = (page: string | string[] | undefined, defaultPage = 0) => {
  if (!page) {
    return defaultPage
  }

  if (Array.isArray(page)) {
    return isNaN(parseInt(page[0])) ? defaultPage : parseInt(page[0]) - 1
  }

  return isNaN(parseInt(page)) ? defaultPage : parseInt(page) - 1
}
