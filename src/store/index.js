import Vue from 'vue'
import Vuex from 'vuex'
import participants from './modules/participants'
import expenses from './modules/expenses'
import breakeven from './modules/break-even'


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    participants,
    expenses,
    breakeven
  }
})
