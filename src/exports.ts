import Counter from './components/Counter.vue'

export { Counter }

export default Counter

declare module 'vue' {
  export interface GlobalComponents {
    Counter: typeof Counter
  }
}
