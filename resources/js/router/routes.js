import about from "../pages/about.vue"
import about1 from "../pages/about.1.vue"
import about2 from "../pages/about.2.vue"
import about3 from "../pages/about.3.vue"
import e404 from "../pages/404.vue"

export default [
  {
    path: '',
    component: about
  },
  {
    path: '/about',
    component: about1
  },
  {
    path: '/contact',
    component: about2
  },
  {
    path: '/tags',
    component: about3
  },
  { // Always leave this as last one
    path: '*',
    component: e404
  }
]
