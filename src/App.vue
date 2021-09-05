<template>
  <div id="app">
    <div id="nav">
      <Login></Login>
    </div>
    <router-view/>
  </div>
</template>



<script>
import  Login from "components/Login.vue"
export default {
   components:{
     Login
  },
}
</script>



<style>

</style>
