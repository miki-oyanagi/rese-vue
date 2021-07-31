<template>
<div >
  <link href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet">
  <div class="header">
    <Header></Header>
  </div>
  <div class="wrap">
    <div class="shop" v-for="(shop,index) in shops" :key="index">
      <div class="inside">
        <div class="image">
          <a><img class="img" :src="shop.image"></a>
        </div>
        <div class="all">
          <div class="detail">
            <a>{{shop.name}}</a>
            <a v-if="shop.area">＃{{shop.area.name}}</a>
            <a v-if="shop.genre">＃{{shop.genre.name}}</a>
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
import axios from 'axios';
import Header from "../components/Header.vue"
export default {
  props:["id"],
  data(){
    return{
      shops:[{
       name:[],
      }],
    };
  },
  async created(){
     await axios.get("http://localhost:8001/api/v1/shops"
    )
    .then((response)=>{
      console.log(response);
      this.shops=response.data.data;
      console.log(this.shops);
    })},
    methods:{
      async gotodetail(id){
        this.$router.push({path: '/detail/'+id,params:{id:id}});
      }
    },
  components:{
    Header,
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