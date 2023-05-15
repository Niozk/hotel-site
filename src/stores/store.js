import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

export const useStore = defineStore('store', () => {
  const navList2Items = ref([
    {text: 'All Hotels', href: '#', click: linkToAllHotels},
    {text: 'Super Deals', href: '#', click: ''},
    {text: 'The Team', href: '#', click: ''},
    {text: 'Partners', href: '#', click: ''}
  ])

  const languageVisible = ref(false)

  const languages = ref([
    {flag: 'fi fi-gb', language: 'English (UK)', selected: true},
    {flag: 'fi fi-us', language: 'English (US)', selected: false},
    {flag: 'fi fi-nl', language: 'Nederlands', selected: false},
    {flag: 'fi fi-de', language: 'Deutsch', selected: false},
    {flag: 'fi fi-fr', language: 'Français', selected: false},
    {flag: 'fi fi-es', language: 'Español', selected: false}
  ])

  function getCurrentLanguage() {
    const currentLanguage = ref('');
    languages.value.forEach(item => {
      if (item.selected) {
        currentLanguage.value = item.language;
      }
    });
    return currentLanguage.value;
  }

  const router = useRouter();

  function linkToAllHotels() {
    router.push('/hotels');
  }

  return { navList2Items, languageVisible, languages, getCurrentLanguage }
})
