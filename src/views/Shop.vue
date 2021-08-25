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
            <button @click="gotodetail(shop)" class="button">詳しくみる</button>
            <div v-if="isActive(shop.id)">
              <button class="btn-warning"  @click.prevent="dislike()">いいね済<i class="fi-heart"></i></button>
           </div>
           <div v-else>
              <button class="btn-outline-warning" @click.prevent="like(shop)"><i class="fi-heart">いいね</i></button>
           </div>
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
      likes_shops:[{

      }]
    };
  },
  async created(){
     await axios.get("http://localhost:8001/api/v1/shops"
    )
    .then((response)=>{
      console.log(response);
      this.shops=response.data.data;
      console.log(this.shops);
    }),

      axios.post("http://localhost:8001/api/v1/likes",{
        user_id:this.$store.state.user.id,
      })
      .then((response)=>{
        this.likes_shops = response.data.data;
        // console.log("this.likes_shops")
        console.log(this.likes_shops);
        // this.$router.go({
        //   path: this.$router.currentRoute.path,
        //   force: true,
        // });
      })
        
    },
    methods:{
      async gotodetail(shop){
        this.$router.push({path: '/detail/'+ shop.id});
      },
      like(shop){
        axios
        .post("http://localhost:8001/api/v1/shops/" + shop.id + "/likes",{
          user_id:this.$store.state.user.id,
          shop_id:this.shop,
        })
        .then((response)=>{
          console.log(response);
        });
     },
     dislike(){
       axios
       .delete("http://localhost:8001/api/v1/likes",{
         data:{
           user_id:this.$store.state.user.id,
           shop_id:this.shop,
           }  
       })
       .then((response)=>{
         this.likes_shops2 =response.data;
         console.log("this.likes_shops2");
         console.log(this.likes_shops2);
        //  this.$router.go({
        //     path: this.$router.currentRoute.path,
        //     force: true,
        //  });
       })



     },
     isActive(shop_id){
       console.log("shop.id")
       console.log(shop_id)
       console.log("this.likes_shops")
       console.log(this.likes_shops)
       console.log(this.likes_shops.map(shop => shop.shop_id))
       let likes_shop = this.likes_shops.map(shop => shop.shop_id);

      //  console.log(likes_shop.includes(shop_id))
if(likes_shop.includes(shop_id)){
         return true;
}else{
         return false;
}
     }
    },
  components:{
    Header,
  },
}
</script>

<style scoped>
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
.btn-warning{
  color: brown;
  border: none;
}
.btn-outline-warning{
  border: none;
}


 @media screen and (max-width: 768px) { 

   .shop{
   width: 40%;
   }

}

</style>