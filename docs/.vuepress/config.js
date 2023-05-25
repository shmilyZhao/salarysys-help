// 配置导航栏logo(themeConfig.logo)
// 配置导航栏logo(themeConfig.logo)
module.exports = {
    // 网站的一些基本配置
    // base:配置部署站点的基础路径，后续再介绍
    base: '/salarysys-help/',
    title: '人资知识中台', // 网站的标题
    description: '描述汇集了人资系统常见问题和解决方案', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: [
    //   ['link', { rel: 'icon', href: 'logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    // host port在本地运行就不配置了
    themeConfig: {
    //   logo: 'logo.png',
      nav: [],
      // 禁用导航栏
      // navbar: false,
      // 设置自动生成侧边栏
      sidebar: 'auto',
        sidebar: [
            {
                title: '分组1 前端',
                collapsable: false,
                children: [
                '/m1/s1',
                '/m1/s2',
                ],
            },
            {
                title: '分组2 后端',
                collapsable: true,
                children: [
                '/m2/s1',
                ]
            },
            {
                title: '分组3 后端',
                collapsable: true,
                children: [
                '/m3/s1',
                ]
            }
            ],
        sidebarDepth: 2,
    }
  }