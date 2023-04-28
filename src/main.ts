import { createApp } from 'vue'
import { createPinia } from 'pinia'

import MainApp from './main-app.vue'
import router from './router'

// unocss
import '@unocss/reset/tailwind.css'
import './assets/css/main.css'
import 'virtual:uno.css'
import 'uno.css'

// highlightjs
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

// global components
import Popper from '@/components/popper.vue'

import Notifications from '@kyvg/vue3-notification'
import Cleave from 'cleave.js'

// tippy
import { plugin as VueTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'

const app = createApp(MainApp)

app.directive('cleave', {
  mounted: (el, binding) => {
    el.cleave = new Cleave(el, binding.value || {})
  }
})

app.use(VueTippy)

app.use(createPinia())
app.use(router)
app.use(hljsVuePlugin)
app.use(Notifications)

// register global component
app.component('PPopper', Popper)

app.mount('#app')
