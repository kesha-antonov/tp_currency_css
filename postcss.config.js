module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-conditionals'),
    require('postcss-simple-vars'),
    require('postcss-sass-each')({
      plugins: {
        afterEach: [ require('postcss-simple-vars') ]
      }
    })
  ]
}
