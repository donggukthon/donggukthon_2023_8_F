import { useUrlParam } from './useUrlParam'

export const useUTM = () => {
  const [utmId] = useUrlParam('utm_id', '')
  const [utmContent] = useUrlParam('utm_content', '')
  const [utmTerm] = useUrlParam('utm_term', '')
  const [utmSource] = useUrlParam('utm_source', '')
  const [utmMedium] = useUrlParam('utm_medium', '')
  const [utmCampaign] = useUrlParam('utm_campaign', '')

  return { utmId, utmContent, utmTerm, utmSource, utmMedium, utmCampaign }
}
