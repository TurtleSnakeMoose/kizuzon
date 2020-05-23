import Vue from 'vue'
import VueRouter from 'vue-router'
import Participants from '../components/Participants'
import Expenses from '../components/Expenses'
import BreakEven from '../components/BreakEven'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Participants',
    component: Participants
  },
  {
    path: '/Expenses',
    name: 'Expenses',
    component: Expenses
  },
  {
    path: '/BreakEven',
    name: 'BreakEven',
    component: BreakEven
  }
]

const router = new VueRouter({
  routes
})

export default router
