import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, MinusIcon } from '@heroicons/vue/24/outline'

export const navigation =  [
  { name: 'index', to: '/' },
  { name: 'about', to: 'about', 
    subItems: [
      { name: 'about_theteam', to: 'about_theteam' },
      { name: 'about_company', to: 'about_company' }
  ]},
  // { name: 'products', to: 'products' },
  { name: 'news', to: 'news' },
  { name: 'contact', to: 'contact' },
  { name: 'test', to: 'test' },
]