import Vue from 'vue';
import Vuex from 'vuex';
//import app from './modules/app';
//import user from './modules/user';
//import permission from './modules/permission';
//import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
 // modules: {
    //app,
    //user,
    //permission
  //},
  //getters
  state: {
	  count: 0,
	  adminleftnavnum:"1"
  },
  mutations: {
	  increment(state) {
		  state.count++
	  }
  } 
  
});

export default store
