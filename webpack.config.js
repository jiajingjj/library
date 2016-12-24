var path=require('path')
var webpack=require('webpack')
var mode=require('yargs').argv.mode
//plugin
var uglifyJsPlugin=webpack.optimize.UglifyJsPlugin
var libraryName='sparrow'
var plugins=[]
var filename=''

if(mode=='production'){//生产环境
  plugins.push(new uglifyJsPlugin({minimize:true}))
  filename=libraryName+'.min.js'
  //sparow.min.js
}else{//开发环境
  //sparrow.js
  filename=libraryName+'.js'
}

console.log(mode)

var config={
  entry: path.resolve(__dirname,'./src/index.js'),
  output:{
    path: path.resolve(__dirname,'./lib'),
    filename:filename,
    library:libraryName,
    libraryTarget:'umd',
    umdNameDefine:true
  },
  "devtool":'cheap-source-map',
  resolve:{
    extension:['','.js','.css','.json'],
    root:path.resolve('./src')
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel',
        exclude:/node_modules/
      },
      {
        test:/\.js$/,
        loader:'eslint',
        exclude:/node_modules/
      }
    ]
  },
  plugins:plugins
}
module.exports = config
