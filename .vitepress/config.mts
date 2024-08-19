import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "doc",
  description: "Programing document",
  base: '/doc/',
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
    }
  },
  head:[
    [
        "link",
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: "前端", link: "/docs/前端/前端构建工具/npm、yarn和pnpm的区别"
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '前端',
        items: [
          { text: '前端构建工具', link: '/docs/前端/前端构建工具/npm、yarn和pnpm的区别' }
        ]
      },
      {
        text: '编码',
        items: [
          { text: '编码', link: '/docs/编码/index' },          
          { text: '基本多文种平面（BMP）与辅助平面', link: '/docs/编码/基本多文种平面（BMP）与辅助平面' },
          { text: 'Unicode', link: '/docs/编码/Unicode' },
          { text: 'GB18030', link: '/docs/编码/GB18030' },
          { text: 'UTF8', link: '/docs/编码/UTF8' },
          { text: 'BASE64', link: '/docs/编码/BASE64' },
        ]
      },
      {
        text: 'File (文件)',
        items: [
          {
            text: '文件系统的数据结构',
            link: '/docs/file/文件系统的数据结构',
          },
          {
            text: 'inode',
            link: '/docs/file/inode',
            items: [
              {
                text: 'inode与文件',
                link: '/docs/file/inode与文件'
              },
              {
                text: '软链接',
                link: '/docs/file/软链接'
              },
              {
                text: '硬链接',
                link: '/docs/file/硬链接'
              }
            ]
          }
        ]
      },
      {
        text: '规范',
        items: [
          { text: 'JSON', link: '/docs/规范/JSON/JSON' }
        ]
      },
      {
        text: '图片',
        items: [
          { text: '像素、ppi、dpi', link: '/docs/图片/像素、ppi、dpi' }
        ]
      },
      {
        text: '协议',
        items: [
          { 
            text: '数据包', 
            link: '/docs/协议/数据包/http_data',
            items: [
              {
                text: 'http',
                link: '/docs/协议/数据包/http_data'
              }              
            ]
          },
          // 网络层
          {
            text: '网络层',
            link: '/docs/协议/网络层',
            items: [
              {
                text: 'IPv4',
                link: '/docs/协议/网络层/IPv4'
              }
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
