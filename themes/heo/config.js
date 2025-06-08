const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2025-06-07', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到育AI有方', url: 'https://blog.yuaiyoufang.com' },
    { title: '访问文档中心获取更多帮助', url: 'https://docs.yuaiyoufang.com' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '',
  HEO_HERO_TITLE_2: '应用大全',
  HEO_HERO_TITLE_3: '',
  HEO_HERO_TITLE_4: '',
  HEO_HERO_TITLE_5: '最新资讯',
  HEO_HERO_TITLE_LINK: 'https://yuaiyoufang.com',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '应用大全',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '教学工具', url: '/tag/教学工具' },
  HEO_HERO_CATEGORY_2: { title: '教育资讯', url: '/tag/教育资讯' },
  HEO_HERO_CATEGORY_3: { title: '学习方法', url: '/tag/学习方法' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是Sihang',
    '🔍 教育工具全栈开发者',
    '💡  提供智能教学工具',
    '📰 分享前沿教育科技资讯',
    '🌱 助力家校高效教学与快乐学习',
    '💻 践行编程与教育理想',
    '✨ 赋能智慧教学与轻松育娃',
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/tangly1024',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.tangly1024.com',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: '求解平均数',
      img_1: '/images/heo/app-01-icon.jpeg',
      color_1: '#989bf8',
      title_2: '平均数',
      img_2: '/images/heo/app-05-icon.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: '三角形内角和',
      img_1: '/images/heo/app-02-icon.png',
      color_1: '#989bf8',
      title_2: '三角形内角和',
      img_2: '/images/heo/app-08-icon.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: '3',
      img_1: '/images/heo/app-03-icon.jpeg',
      color_1: '#989bf8',
      title_2: '3',
      img_2: '/images/heo/app-06-icon.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: '4',
      img_1: '/images/heo/app-04-icon.jpeg',
      color_1: '#989bf8',
      title_2: '4',
      img_2: '/images/heo/app-01-icon.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: '5',
      img_1: '/images/heo/app-05-icon.jpeg',
      color_1: '#989bf8',
      title_2: '5',
      img_2: '/images/heo/app-03-icon.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: '6',
      img_1: '/images/heo/app-06-icon.jpeg',
      color_1: '#989bf8',
      title_2: '6',
      img_2: '/images/heo/app-09-icon.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: '7',
      img_1: '/images/heo/app-07-icon.jpeg',
      color_1: '#989bf8',
      title_2: '7',
      img_2: '/images/heo/app-06-icon.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: '8',
      img_1: '/images/heo/app-08-icon.jpeg',
      color_1: '#989bf8',
      title_2: '7',
      img_2: '/images/heo/app-10-icon.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: '8',
      img_1: '/images/heo/app-11-icon.jpeg',
      color_1: '#989bf8',
      title_2: '7',
      img_2: '/images/heo/app-04-icon.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: '8',
      img_1: '/images/heo/app-12-icon.jpeg',
      color_1: '#989bf8',
      title_2: '7',
      img_2: '/images/heo/app-09-icon.jpeg',
      color_2: '#ffffff'
    },
  ],

  

  ALL_APPS: [
    {
      "title_1": "求解平均数",
      "img_1": "/images/heo/app-01-icon.jpeg",
      "subject": "Mathematics",
      "function_introduction": "通过输入数据集合，计算并展示算术平均数，帮助理解数据集中趋势的统计概念"
    },
    {
      "title_1": "三角形内角和",
      "img_1": "/images/heo/app-02-icon.png",
      "subject": "Mathematics",
      "function_introduction": "通过动画演示或互动操作，验证三角形内角和为180°的几何定理，直观理解角度关系"
    },
    {
      "title_1": "认识几分几秒",
      "img_1": "/images/heo/app-03-icon.jpeg",
      "subject": "Mathematics",
      "function_introduction": "以钟表模型和时间换算练习，帮助认识时分秒的进制关系，掌握时间的读取与单位转换"
    },
    {
      "title_1": "分数的初步认识",
      "img_1": "/images/heo/app-04-icon.jpeg",
      "subject": "Mathematics",
      "function_introduction": "通过图形分割和分数表示互动，引导理解分数的基本概念、读写方法及简单大小比较"
    },
    {
      "title_1": "理解周长的概念",
      "img_1": "/images/heo/app-05-icon.jpeg",
      "subject": "Mathematics",
      "function_introduction": "结合平面图形的边线测量与计算，直观阐释周长定义，掌握不同图形周长的计算方法"
    },
    {
      "title_1": "理解质量单位",
      "img_1": "/images/heo/app-06-icon.jpeg",
      "subject": "Mathematics/Science",
      "function_introduction": "通过实物重量对比和单位换算练习，认识克、千克等质量单位，建立实际重量感知"
    },
    {
      "title_1": "字词积累",
      "img_1": "/images/heo/app-07-icon.jpeg",
      "subject": "Chinese",
      "function_introduction": "提供字词拼写、释义、近义词反义词等内容，通过闯关游戏或词库练习提升词汇量"
    },
    {
      "title_1": "古诗与文言文",
      "img_1": "/images/heo/app-08-icon.jpeg",
      "subject": "Chinese",
      "function_introduction": "收录经典古诗文篇目，提供注释、赏析、朗诵及默写功能，辅助理解传统文化文本"
    },
    {
      "title_1": "看图写话",
      "img_1": "/images/heo/app-11-icon.jpeg",
      "subject": "Chinese",
      "function_introduction": "通过提供图片素材和写作引导，培养观察能力与语言组织能力，练习短篇叙事写作"
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '微信',
  HEO_SOCIAL_CARD_TITLE_2: 'ID：yuaiyoufang',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: '',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
