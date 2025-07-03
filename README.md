# From

[repo](https://github.com/dishait/vue3-exports)

# vitesse-template

开箱即用的 `vite + vue3 + vitest + ts` 库模板，用来打包 `vue3` 的 `.vue` 组件与 `composition-api`

<br />

## 特性

### 开发时

- `typeScript`
- 构建工具 👉 `vite`
- 测试工具 👉 `vitest`
- 包管理工具 👉 `pnpm`
- 原子 `css` 引擎 👉 `unocss`
- `vue3`，支持 `sfc` 的 `setup` 语法糖

<br />

### 生产时

- 支持 `vue3` 的 `.vue` 组件
- 并行地打包 `js` 和打包类型声明
- 支持同时导出 `commonjs` 与 `esmodule` 两种规范
- 支持导出 `.vue` 组件也支持的完全 `dts` 类型声明

<br />
<br />

## 动机

开发 `vue3` 相关的 `npm` 库时，可以直接用该模板进行快速开发，而不需要重新构建繁杂的开发环境。

<br />
<br />

## 使用

### 初始化

更改模板中的 `package.json`，`LICENSE` 和 `README.md` 为自己的信息 😜

#### 注意

- 由于用到 `pnpm` 的 `workspace`，所以 `examples/vite/package.json` 也需要改 👇

```diff
{
  ...
  "devDependencies": {
-           "vue3-exports": "workspace:*",
+           "your-package-name": "workspace:*"
  }
    ...
}
```

- exports 打出来的 css, 需要额外的去注入

<br />

### 命令

```shell
pnpm i # 安装依赖

pnpm dev # 开发

pnpm build # 打包

pnpm build-js # 仅打包 js

pnpm build-types # 仅打包类型

pnpm release # 发布

pnpm play # 启动 example

pnpm play:build # 打包 example

pnpm play:preview # 预览 example

pnpm test # 单元测试

pnpm test:ui # 单元测试(ui)

pnpm test:update # 单元测试(持续更新)
```

<br />

### 导出

在 `src/exports` 里导出即可

```ts
// 导出 .vue 组件
export { default as Hello } from './components/Hello.vue'

// 导出 composition-api
export { useInc } from './composables/inc'
```

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/Simon-He95/vitesse-template/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit Simon-He95/vitesse-template my-vitesse-app
cd my-vitesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## License

[MIT](./LICENSE) License © 2025 [Simon He](https://github.com/Simon-He95)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

<span><div align="center">![sponsors](https://www.hejian.club/images/sponsors.jpg)</div></span>
