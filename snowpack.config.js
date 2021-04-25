const fs = require('fs');

const cert = fs.readFileSync('cert/server.crt');
const key = fs.readFileSync('cert/server.key');

module.exports = {
  mount: {
    public: '/',
    src: '/source',
  },
  plugins: [
    '@snowpack/plugin-typescript',
  ],
  devOptions: {
    open: 'safari',
    secure: { cert, key },
  },
  optimize: {
    // bundle: true,
    treeshake: true,
    minify: true,
    target: 'es2019'
  },
}
