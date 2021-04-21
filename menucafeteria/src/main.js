/* 
Plan de trabajo:

TODO: Incluir BootstrapVue -> LISTO! (googleo boostrapvue, getstarted y copio lo de Using module bundlers)
TODO: Instalar Viufire --> LISTO! (FIRESTORE)(googleo Viufire, getstarted y copio)
TODO: CRUD para la cafeteria --> Haciendo
TODO:   Crear la base de datos en firebase --> LISTO
TODO:   Cada item: nombre, descripción, precio y fotografía --> LISTO
TODO:   Publicar en Firebase para usar en otros equipos

*/
/* deben quedar todos los import y Vue agrupados */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' /* Hojas de estilo de bootstrap */
import 'bootstrap-vue/dist/bootstrap-vue.css' /* Hojas de estilo de bootstrap */
Vue.use(firestorePlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
