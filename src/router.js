import { createRouter, createWebHistory } from 'vue-router'

import MainCom from '@/components/MainCom.vue' //aka MainPage//
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: MainCom },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
