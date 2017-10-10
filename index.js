const { join } = require('path');

module.exports = async function nuxtFontAwesome(moduleOptions) {
  const defaultOptions = {
    componentName: 'fa-icon',
    packs: [],
  };
  const options = Object.assign(defaultOptions, this.options.fontAwesome, moduleOptions);

  this.addPlugin({
    src: join(__dirname, 'plugin.js'),
    options,
  });
};
