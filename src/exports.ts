import 'uno.css'
import './index.css'
import { defineAsyncComponent } from 'vue'

const Counter = defineAsyncComponent(() => import('./components/Counter.vue'))
export { Counter }
