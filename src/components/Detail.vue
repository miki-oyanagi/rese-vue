<template>
<div>
   <div class="left">
     <div>
       <Header></Header>
       <a href="http://localhost:8080/" class="back">></a>
     </div>
     <div class="shop" v-for="(shop,index) in detaildata" :key="index">
      <div class="wrap2">
        <p>{{shop.name}}</p>
      </div>
      <a><img class="img" :src="shop.image"></a>
      <div class="wrap3">
        <p v-if="shop.area">＃{{shop.area.name}}</p>
        <p v-if="shop.genre">＃{{shop.genre.name}}</p>
      </div>
      <p>{{shop.detail}}</p>
    </div>
   </div>
   <div class="right">
     <p>予約情報をかく</p>
   </div>
 
</div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue"
export default {
props:["id"],
  data(){
    return{
      detaildata:[{
      name:"",
      }],
    };
  },
  async created(){
    await axios.get(
      'http://localhost:8001/api/v1/shops/'+this.id
    )
    .then((response)=>{
      console.log(response);
      this.detaildata=response.data;
      console.log(this.detaildata);
    })
  } ,
    components:{
    Header,
  }
}
</script>
<style scoped>
.shop{
  display: flex;

}
.left{
  background-color: white;
  width: 50%;
}
.right{
  background-color: darkolivegreen;
  width: 50%;
}
.wrap2{
  display: flex;
  height: auto;
  margin-bottom: 10%;

}
.wrap2 p{
  margin: 0%;
  padding: 0%;
}
.wrap3{
  display: flex;
}
.img{
  width: 100%;
  height: auto;
}
.back{
  background-color:black;
  color:white;
  text-decoration: none;
  border-radius: 5px;
  margin: 0%;
  padding: 0%;
}
</style>