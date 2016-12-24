#
##如何开发一个属于自己的前端类库
  ```
    基于webpack进行资源构建
    使用es6语法进行开发
    将包输出为umd规范的文档
    使用mocha和chai进行测试
    使用eslint来进行代码检查
    基于npm scripts来集成开发命令
  ```    
##环境配置(基本开发环境)
```
    全局环境：node & npm
    命令行：terminal & shell
    版本管理：git
    编译器：注册github账号atom/webstorm/st3/vs
    浏览器：chrome
    注册npm账号
    ```
##创建项目的基本结构
    ```
    src 开发源代码
    lib编译后的资源
    test测试用例
    .gitignore 忽略提交
    LICENSE
    README.md
    package.json
    webpack.config.js
    .babelrc
    .eslint.js 初始化
    ```
##结合webpack跑通es6语法编译的过程
-webpack.config.js
```
npm install webpack webpack-dev-server --save-dev
```    
-babel及其相关preset , plugin , loader
```
npm install babel-loader babel-core babel-preset-es2015 babel-plugin-add-module-exports --save-dev
```

babel-preset-es2015--loose
babel-preset-stage-0
babel-preset-es2016
##umd
  -webpack.config.js的config里写
```
 library:libraryName,
 libraryTarget:'umd',
 umdNameDefine:true
```
##webpack几个小配置
-resolve
  -extension扩展名，方便
  -root添加默认搜索路径，但得是绝对路径，可以是数组和字符串
-devtool  
  -cheap-source-map

  ```
    "devtool":'cheap-source-map',
  ```

## 区分开发环境和生产环境
-sparrow.js(开发环境，未压缩校验，一些开发环境的配置和代码)
-sparrow.min.js(生产环境)
```
process.env.WEBPACK_ENV有系统兼容问题
yargs
```

##将用于生产环境的代码压缩
```
webpack.optimize.UglifyJsPlugin
```
-提供给生产环境和开发环境用的文件名需要区分

##eslint
```
eslint eslint-loader
```

##支持单元测试
```
npm install mocha chai
```

##发布到npm和github
