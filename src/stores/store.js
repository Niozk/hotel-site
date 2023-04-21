import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const navList2Items = ref([
    {text: 'All Hotels', href: '#'},
    {text: 'Super Deals', href: '#'},
    {text: 'The Team', href: '#'},
    {text: 'Partners', href: '#'},
  ])

  return { navList2Items }
})
