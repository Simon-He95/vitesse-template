import type { App, Plugin } from 'vue'

import Counter from './components/Counter.vue'

export * from './utils/index'

const componentMap = {
  Counter,
}
export { Counter }

export const VueRendererMarkdown: Plugin = {
  install(app: App) {
    Object.entries(componentMap).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}
