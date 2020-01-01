const path = require('path')

module.exports = {
  entry:{
    main:path.join(__dirname,'./src/index.js')
  },
  mode:"production",
  output:{
    path:__dirname,
    filename:"index.js"
  },
  node: {
    fs: 'empty'
  }
}