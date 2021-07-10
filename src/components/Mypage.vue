<template>
<div>
  <div class="header">
    <Header></Header>
    <h2>mypage</h2>
    <p class="username" > ログインユーザ名：{{$store.state.name}}  </p>
  </div>
  <div class="flex">
    <div class="reserve">

    </div>
    <div class="favorite">

    </div>
  </div>
</div>
</template>

<style scoped>

</style>

<script>
// import axios from 'axios';
//import Header from "../components/Header";
export default {
  data(){
    return{
      active:true,
      name:{
        get(){
          return this.$store.state.user
        },
      }
    }}}
</script>
