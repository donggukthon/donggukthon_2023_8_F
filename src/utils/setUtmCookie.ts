import { setCookie } from './cookies'
import { getUtm } from './getUtm'

const EXPIRE_DAY = 90

export const setUtmCookie = () => {
  const {
    utm_campaign: utmCampaign,
    utm_content: utmContent,
    utm_medium: utmMedium,
    utm_source: utmSource,
    utm_term: utmTerm,
    utm_id: utmId,
  } = getUtm()
  if (utmId || utmTerm || utmContent || utmMedium || utmSource || utmCampaign) {
    const encodedData = encodeURI(
      JSON.stringify({
        utmCampaign,
        utmContent,
        utmMedium,
        utmSource,
        utmTerm,
        utmId,
      })
    )
    setCookie('utm_data', encodedData, EXPIRE_DAY)
    return encodedData
  }
}
