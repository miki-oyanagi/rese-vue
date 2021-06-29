// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from "axios";
// import router from "../router/index";

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     user:"",
//   },
//   mutations: {
//     user(state,payload){
//       state.user =payload;
//     },
//   },
//   actions: {
//     async login({commit},{email,password}){
//       const responseLogin =await axios.post(
//         "http://localhost:8080/api/v1/users/registration",
//         {
//           email:email,
//           password:password,
//         }
//       );
//       const responseUser =await axios.get(
//         "http://localhost:8080/login",
//         {
//           params:{
//             email:email,
//           },
//         }
//       );
//       commit("user",responseLogin.data.auth);
//       commit("user",responseUser.data.data[0]);
//       router.replace("/login")
//     }

//   },
//   modules: {
//   }
// })
