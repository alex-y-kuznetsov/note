module.exports = {
  css: {
    loaderOptions: {
      less: {
        additionalData: ' @import "~@/assets/styles/styles.less"; '
      }
    }
  },
  publicPath: '/note-build/'
}
