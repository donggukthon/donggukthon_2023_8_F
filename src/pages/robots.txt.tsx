import { IS_PRODUCTION } from '@constants/env'
import { NextPage } from 'next'

const crawlableRobotsTxt = `User-agent: BaiDuSpider
User-agent: MJ12bot
User-agent: BadBot
User-agent: M12bot
Disallow: /

User-agent : *
Disallow: /

User-agent : Googlebot
User-agent : Yeti
User-agent : Daumoa
User-agent : Daum
User-agent : Bingbot
Allow : /
Allow : /posts
Allow : /quotation/bridge
Allow : /_next/*.css$
Allow : /_next/*.js$
Disallow: /_next/
Disallow: /*dashboard
Disallow: /*admin
Disallow: /*api

`

const uncawlableRobotsTxt = `User-agent : *
Disallow: /
`

const RobotsTxt: NextPage = () => <></>

RobotsTxt.getInitialProps = async ({ res }) => {
  if (res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write(IS_PRODUCTION ? crawlableRobotsTxt : uncawlableRobotsTxt)
    res.end()
  }
}

export default RobotsTxt
