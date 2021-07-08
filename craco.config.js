const CracoLessPlugin = require('craco-less');

//自定义antd主题
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // '@layout-sider-background-light': '#fff',
              // '@layout-trigger-background-light': '#fff',
              // '@layout-trigger-color-light': '@text-color',
              // '@primary-color': '#1DA57A',

              '@layout-body-background': '#f0f2f5',
              '@layout-header-background': '#6bb78b',
              '@layout-header-height': '64px',
              '@layout-header-padding': '0 50px',
              '@layout-header-color': '@text-color',

              '@layout-footer-padding': '24px 50px',
              '@layout-footer-background': '@layout-body-background',
              '@layout-sider-background': '#fff',
              '@layout-trigger-height': '48px',
              '@layout-trigger-background': '#3de2f6',
              '@layout-trigger-color': '#fff',
              '@layout-zero-trigger-width': '36px',
              '@layout-zero-trigger-height': '42px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
