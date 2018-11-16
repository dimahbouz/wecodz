// fetch('/api/user', {
//     credentials: 'same-origin',
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//     }
// })


import Vue from "vue"
import VueMaterial from "vue-material"
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import router from "./router"
import store from "./store"
import VueI18n from "vue-i18n"
import messages from "./i18n"
import app from "./components/app.vue"

Vue.use(VueMaterial)
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'en-us',
    fallbackLocale: 'en-us',
    messages
})

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: {
        app
    }
})