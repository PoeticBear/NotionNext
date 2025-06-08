import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
import CONFIG from '@/themes/heo/config'

/**
 * 应用中心页面
 * @param {*} props
 * @returns
 */
export default function AppCenter(props) {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return (
    <DynamicLayout theme={theme} layoutName='LayoutAppCenter' {...props} />
  )
}

export async function getStaticProps({ locale }) {
  const props = await getGlobalData({ from: 'app-center', locale })
  
  // 使用heo主题配置中的ALL_APPS数据
  props.apps = CONFIG.ALL_APPS || []
  
  delete props.allPages
  
  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  }
}