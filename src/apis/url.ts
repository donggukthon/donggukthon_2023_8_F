export const developmentApiUrl = 'http://localhost:8000'
export const productionApiUrl = 'https://api.my-3d-tree.com'
export const stagingApiUrl = 'https://api.my-3d-tree.com'

// export const requestUrl = (() => {
//   switch (process.env.NEXT_PUBLIC_ENVIRONMENT) {
//     case 'staging':
//       return stagingApiUrl
//     case 'production':
//       return productionApiUrl
//     default:
//       return developmentApiUrl
//   }
// })()

export const requestUrl = productionApiUrl
