const path = require('path')

const guide = require("./guide.js");

module.exports = {
  title: 'VaahUI',
  description: 'VaahUI.',
  themeConfig: {
    repo: 'https://github.com/webreinvent/vaahui',
    nav: [
      {
        text: "VaahUI",
        link: "/",
      },
      {
        text: "Guide",
        link: "/guide/",
      }
    ],
    sidebar:{
      '/guide/': guide.sidebar,
    }
    /*sidebar: [

      {
        text: 'Introduction',
        children: [
          { text: 'What is My Lib?', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        children: [
          { text: 'VhButton', link: '/components/vh-button' },
        ],
      }
    ],*/
  },
  vite: {
    resolve: {
      alias: {
        'vaahui': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue', /primevue\/.+/], // avoid error when using dependencies that also use Vue
    }
  }
}
