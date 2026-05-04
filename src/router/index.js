import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdListView from '../views/Ads/AdListView.vue'
import AdView from '../views/Ads/AdView.vue'
import NewAdView from '../views/Ads/NewAdView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import RegistrationView from '../views/Auth/RegistrationView.vue'
import OrdersView from '../views/User/OrdersView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/registration', component: RegistrationView },
  { path: '/orders', component: OrdersView },
  { path: '/list', component: AdListView },
  { path: '/new', component: NewAdView },
  { path: '/ad/:id', component: AdView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router