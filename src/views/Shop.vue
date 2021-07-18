<template>
<div >
  <link href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet">
  <div class="header">
    <Header></Header>
    <p class="username">{{this.$store.state.user}}</p>
  </div>
 <div class="wrap">
   <div class="shop">
     <div class="inside">
       <div class="image">
         <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg" alt="shopimage" class="img">
       </div>
       <div class="all">
         <!-- <a v-for="item in shop" :key="item">{{item.name}}</a><br> -->
         <div class="detail">
           <a>#エリア</a>
           <a>#ジャンル</a>
         </div>
         <div class="detail2">
           <button @click="gotodetail" class="button">詳しくみる</button>
           <i class="fi-heart"></i>
        </div>
       </div>
     </div>
   </div>
   <div class="shop">
     <div class="inside">
       <div class="image">
         <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg" alt="shopimage" class="img">
       </div>
       <div class="all">
         <a>お店の名前</a><br>
         <div class="detail">
           <a>#エリア</a>
           <a>#ジャンル</a>
         </div>
         <div class="detail2">
           <button @click="gotodetail" class="button">詳しくみる</button>
           <i class="fi-heart"></i>
        </div>
       </div>
     </div>
   </div>
   <div class="shop">
     <div class="inside">
       <div class="image">
         <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg" alt="shopimage" class="img">
       </div>
       <div class="all">
         <a>お店の名前</a><br>
         <div class="detail">
           <a>#エリア</a>
           <a>#ジャンル</a>
         </div>
         <div class="detail2">
           <button @click="gotodetail" class="button">詳しくみる</button>
           <i class="fi-heart"></i>
        </div>
       </div>
     </div>
   </div>
   <div class="shop">
     <div class="inside">
       <div class="image">
         <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg" alt="shopimage" class="img">
       </div>
       <div class="all">
         <a>お店の名前</a><br>
         <div class="detail">
           <a>#エリア</a>
           <a>#ジャンル</a>
         </div>
         <div class="detail2">
           <button @click="gotodetail" class="button">詳しくみる</button>
           <i class="fi-heart"></i>
        </div>
       </div>
     </div>
   </div>
 </div>
</div>


</template>

<script>
// import axios from 'axios';
import Header from "../components/Header.vue"
export default {
  components:{
    Header
  }
}
</script>

<style>
.header{
  margin-bottom: 5%;
}
.wrap{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.all{
  text-align: left;
  margin-left: 5% ;
}
.img{
  width: 100%;
  height: auto;
  border-radius:  10px 10px 0px 0px;
}
.shop{
  background-color: whitesmoke;
  width: 20%;
  height: auto;
  margin-left: 5%;
  box-shadow: 5px 5px 10px;
  border-radius: 10px 10px;
  margin-bottom: 3%;
}
.detail2
{
  width: 80%;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

}
.button{
  text-align: left;
  background-color: royalblue;
  color: aliceblue;
  
}

 @media screen and (max-width: 768px) { 

   .shop{
   width: 40%;
   }

}

</style>