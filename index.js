const { join } = require('path');

module.exports = async function nuxtFontAwesome(moduleOptions) {
  const defaultOptions = {
    componentName: 'fa-icon',
    packs: [],
    includeCss: true,
  };
  const options = Object.assign(defaultOptions, this.options.fontAwesome, moduleOptions);

  if (options.includeCss) {
    this.options.css.push('@fortawesome/fontawesome-svg-core/styles.css');
  }

  this.addPlugin({
    src: join(__dirname, 'plugin.js'),
    options,
  });
};
