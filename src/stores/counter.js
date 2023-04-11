import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  
  // getters - computed
  const doubleCount = computed(() => count.value * 2)
  
  // actions - methods
  function increment() {
    count.value++
  }

  // Propriétés qui vont se retrouver 'importables'
  return { count, doubleCount, increment }
})
