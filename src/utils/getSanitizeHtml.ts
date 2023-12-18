import sanitizeHtml from 'sanitize-html'

/**
 * HTML 텍스트에서 원하는 태그만 살리고 나머지 태그는 &lt, &gt로 변환해주는 패키지
 */

const additionalAllowedTags = ['img']

export const getSanitizeHtml = (htmlText: string) => {
  return sanitizeHtml(htmlText, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(additionalAllowedTags),
  })
}
