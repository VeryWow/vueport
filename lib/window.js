import Vueport from './vueport.vue'

if (Vue || (window && window['Vue'])) {
  (Vue || window['Vue']).component('vue-simple-suggest', Vueport);
}

export default Vueport
