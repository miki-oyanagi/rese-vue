<template>
<div>
  <div class="header">
    <Header></Header>
    <h2>mypage</h2><br>
    
  </div>
  <div>
    <router-link to="/shop" class="shoplist">back to shoplist</router-link> 
    <h3 class="username" >ログインユーザー： {{user_name}}  </h3>
  </div>
  <div class="flex">
    <div class="reservation">
     <h2>予約情報</h2>
    <div class="reservations" v-for="(reservation,index) in reservations" :key="index">
      <p>Shop： {{reservation.shop.name}}</p><br>
      <p>Date： {{reservation.reservation_date}}</p><br>
      <p>Time：{{reservation.reservation_time}}</p><br>
      <p>Number：{{reservation.reservation_number}}人</p><br>
    </div>

    </div>
    <div class="favorite">
      <h2>お気に入り店舗</h2>
      <div class="shop" v-for="(shop,index) in shops" :key="index">
          <div class="image">
            <a><img class="img" :src="shop.shop.image"></a>
          </div>
          <div class="detail">
            <a>{{shop.shop.name}}</a>
            <a>＃{{shop.shop.area.name}}</a>
            <a>＃{{shop.shop.genre.name}}</a>
          </div>
          <button @click="gotodetail(shop)" class="button">詳しくみる</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import axios from 'axios';
// import Header from "../components/Header";
export default {
  props:["id"],
  data(){
    return{
      
      reservations:[{
        }],
      shops:[{
        
        }],
      likes:[{

      }],
      active:true,
      user_name:this.$store.state.user.user_name,
      };
      
    },
    async created(){
      await axios.post("http://localhost:8001/api/v1/mypage/reservations",{
        user_id:this.$store.state.user.id,
      }
    )
    .then((response)=>{
      console.log(response);
      this.reservations=response.data.data;
      console.log(this.reservations);
    }),
    

     axios.post("http://localhost:8001/api/v1/likes",{//いいね済のshop_id取得
       user_id:this.$store.state.user.id,
      })
      .then((response)=>{
        this.shops= response.data.data
        console.log(this.shops);
      })
    //   axios.post("http://localhost:8001/api/v1/getshops",{//いいねのshop_idを元に必要な情報を取得する
    //     id:this.shops.shop_id
    //   }
    // )
    // .then((response)=>{
    //   console.log(response);
    //   this.likes=response.data;
    //   console.log("this.likes");
    //   console.log(this.likes);
    // })

    },
    methods:{
        async gotodetail(shop){
        this.$router.push({path: '/detail/'+ shop.shop_id});
      },
        shoplist(){
       this.$router.replace('/shop')
       },
    }

}
</script>



<style scoped>
.username{
  margin-right: 15%;
 text-align: right;
}
.flex{
  display: flex;
}
.reservation{
  width: 50%;
  margin-left: 10%;
}

.favorite{
  width: 50%;
  margin-right: 10%;
}
.img{
  width: 40%;
  height: auto;
  border-radius: 10px 10px;

}
.reservations{
  background-color: cornflowerblue;
  width: 50%;
  margin: auto;
  border-radius: 10px 10px;
}

.shoplist{
  border: none;
  background-color: white;
  font-size: 20px;
  text-align: right;
  text-decoration: none;
}
</style>