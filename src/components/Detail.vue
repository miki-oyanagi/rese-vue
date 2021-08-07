<template>
<div class="wrap">
 <div class="left">
   <div>
     <Header></Header>
   </div>
   <div class="wrap2">
     <a href="http://localhost:8080/" class="back">＜</a>
     <p>{{name}}</p>
   </div>
   <a><img class="img" :src="image"></a>
   <div class="wrap3">
     <p>＃{{area}}</p>
     <p>＃{{genre}}</p>
   </div>
   <p>{{detail}}</p>
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
      name:"",
      // area:"",
      // genre:"",
      // detail:"",
      // image:""
    };
  },
  async created(){
    const detailgetdata =await axios.get(
      'http://localhost:8001/api/v1/shops/'+this.id
    );
    const detaildata=detailgetdata.data
    this.name=detaildata.data[this.id].name;
    this.area=detaildata.data[this.id].area.name;
    this.genre=detaildata.data[this.id].genre.name;
    this.detail=detaildata.data[this.id].detail;
    this.image=detaildata.data[this.id].image;
  } ,
    components:{
    Header,
  }
}
</script>
<style scoped>
.wrap{
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