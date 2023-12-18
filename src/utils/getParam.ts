export const getParam = function (paramName: string, url = location.search) {
  const params = url.substring(url.indexOf('?') + 1)
  let uriResult = ''
  const paramsWithNoAmpersand: string[] = params.split('&')

  paramsWithNoAmpersand.map((param: string) => {
    const paramsWithNoEqualSign = param.split('=')
    if (paramName === paramsWithNoEqualSign[0]) {
      uriResult = paramsWithNoEqualSign[1]
    }
  })
  const param = decodeURI(uriResult)
  return param === 'undefined' ? undefined : param
}
