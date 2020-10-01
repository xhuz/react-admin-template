# react-admin-template

由于现有的一些 react admin 项目都太过复杂，集成了一些我不太需要的功能，所以决定自己撸一个，全面面向 react hooks。
基于 antd 的 react 后台管理项目模板，使用 typescript 开发。本项目创意来自 vue-admin-template。
没有使用官方的脚手架工具，使用 webpack 打包项目。
只集成了基本功能，后续其他功能可以轻松扩展。给一些 react 中后台项目提供了开箱即用的模版工程

### 用法

```bash
git clone https://github.com/xhuz/react-admin-template.git

npm install

npm run dll

npm run dev
```

在 4000 端口开启一个开发服务器

### 功能

1. 实现静态路由，通过静态路由自动生成菜单，路由 lazy 加载，优化性能
2. 实现路由守卫，管理登陆状态，如果有权限的需求也可以自己进一步扩展
3. 集成 redux 状态管理，redux-thunk 用来执行异步操作
4. 全面面向 react hook 编程
5. 支持 css module，支持 css 和 sass，对 less 有需求可以自行配置 webpack
6. 集成 styled-jsx，支持 sass
7. 封装 axios 保证类型安全
8. 封装两个自定义钩子，useGetter 更方便的操作 store，useEffectDispatch 用于派发异步 Action
9. webpack hot reload 实现
10. 集成 antd，按需加载

### 目录介绍

```bash
├── build // webpack 配置
├── src
│ ├── api // 用于和服务端交互的方法
│ ├── components // 公共的组件
│ ├── environment // 配置多环境打包
│ ├── hooks // 自定义钩子
│ ├── icons // svg icon
│ ├── router // 静态路由配置和路由守卫
│ ├── store // redux
│ ├── styles // 全局样式和scss变量
│ ├── utils // 工具方法
│ ├── views // 放置视图
│ ├── index.html // 入口模版文件
│ ├── main.tsx // 打包的入口文件
│ ├── App.tsx // 整个app的入口
│ └── typing.d.ts // 定义全局类型
├── package-lock.json
├── package.json
├── tsconfig.build.json // 因为webpack配置也是用ts开发，提供给webpack使用的tsconfig
└── tsconfig.json // 项目的ts配置
```

### npm script

```
npm run dll //只用于开发环境，提前打包dll，提高开发时编译速度

npm run dev // 启动开发服务器

npm run build // 打包生产环境

npm run analyz // 用于分析打包出来的bundle性能

npm run format // prettier 格式化代码

npm run lint // eslint 检查代码
```
