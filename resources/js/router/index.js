import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'history',
  routes
})

  /*
  // Inform Google Analytics
  if (typeof ga !== 'undefined') {
    ga('set', 'page', to.path)
    ga('send', 'pageview')
  }
  */

export default Router
