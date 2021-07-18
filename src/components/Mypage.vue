<template>
<div>
  <div class="header">
    <Header></Header>
    <h2>mypage</h2>
    <p class="username" > ログインユーザ名：{{user_name}}  </p>
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
// import Header from "../components/Header";
export default {
  data(){
    return{
      active:true,
      user_name:this.$store.state.user.user_name,
      };
    }};
</script>
