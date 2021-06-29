<template>
<div class="app">
 <div class="header">
    <Header></Header>
 </div>
  <div class="card">
<link href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet">
   <h1 class="title">Login</h1>
   <div class="form">
     <i class="fi-mail"></i><input type="email" placeholder="Email" class="input"><div class="underline"></div><br>
     <i class="fi-lock"></i><input type="password" placeholder="Password" class="input"><div class="underline"></div><br>
     <button class="button" @click="login">ログイン</button>
   </div>
 </div>
</div>
</template>

<script>
import Header from "../components/Header";
export default {
  components:{
    Header
  }

  
};
</script>

<style>

.card{
  box-shadow: 5px 5px 10px;
  border-radius: 10px;
}
.title{
  border-radius: 10px 10px 0 0;
  font-size: 20px;
  background-color: cornflowerblue;
  color: aliceblue;
}
.card{
  width: 40%;
  height: auto;
  margin: auto;
}
.input{
  margin-top: 5%;
  margin-bottom: 0%;
  border: none;
  outline: 0;
  border-bottom: 1px solid black;
}
.button{
  margin: 0% 0 10% 30%;
  background-color: cornflowerblue;
  border-radius: 5px;
  color: aliceblue;
  border: none;
  font-weight: 600;
}
.underline{
  transform-origin: center center;
  transform: scaleX(0);
  transition: transform 0.18s ease-out;
}
.input:focus + .underline{
  transform: scaleX(1);
}
</style>