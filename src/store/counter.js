import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count += 1
    },
  },
})

export const useAdd = defineStore({
  id: 'useAdd',
  state: () => ({
    info: '',
  }),
  getters: {
    getInfo: (state) => state.info,
  },
})
