const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/**/*.test.js',
  output: './reports',
  helpers: {
    Puppeteer: {
      url: 'https://codecept.io/',
      show: false,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    Search: './tests/search.test.js'
  },
  name: 'actions'
}