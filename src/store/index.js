import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=ybHAh2JsH0gOnXfs9XgK9p5bjlhueLbvbDL4d7Og',
  timeout: 10000
})

export default new Vuex.Store({
  state: {
   apod: []
  },
  mutations: {
   async setApod(state, apod){
    state.apod = apod
   }
  },
  actions: {
   async getApod({commit, dispatch}){
    try {
     let res = await _api.get('')
     console.log(res.data);
     commit('setApod', res.data)
    } catch (error) {
     console.error(error);
    }
   },
  },
  modules: {
  }
})
