import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    appt:''
  },
  getters:{
    list(s){
      return s.list
    },
    appt(s){
      return s.appt
    }   
  }
})
