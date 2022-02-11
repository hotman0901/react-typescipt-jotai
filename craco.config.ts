// 利用 craco.config.ts 中的配置，生成一个 tsconfig.json 文件
import path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};
