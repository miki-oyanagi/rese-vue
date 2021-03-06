import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState()],
  state: {
    user:"",
    auth:"",
    // status:false
  },
  
  mutations: {
    auth(state, payload) {
      state.auth = payload.auth;
      state.user = payload.user;
    },
    user(state,payload){
      state.user = payload;
    },
    logout(state,payload){
      state.auth=payload;
    },
  },
  actions: {
    async login({commit},{email,password}){
      const responseLogin =await axios.post(
        "https://safe-coast-57138.herokuapp.com/api/v1/login",
        {
          email:email,
          password:password,
        }
      );
      const responseUser =await axios.get(
        "https://safe-coast-57138.herokuapp.com/api/v1/users/registration",
        {
          params:{
            email:email,
          },
        }
      );
      commit("auth", responseLogin.data);
      commit("user",responseUser.data.data[0]);
      router.replace("/shop");
    },
    
  },
});
