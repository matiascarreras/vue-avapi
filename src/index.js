import avapiMap from './map.js'
import avapiLse from './lse.js'

const install = function (Vue, opt = {}) {
  if (install.installed) return

  Vue.component(avapiMap.name, avapiMap)
  Vue.component(avapiLse.name, avapiLse)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  avapiMap,
  avapiLse,
  install
}
