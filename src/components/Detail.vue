<template>
<div class="flex">
   <div class="left">
     <div>
       <Header></Header>
       <a href="http://localhost:8080/shop" class="back">＜＜back</a>
     </div>
     <div class="shop" v-for="(shop,index) in detaildata" :key="index">
      <div class="wrap2">
        <h2>{{shop.name}}</h2>
      </div>
      <a><img class="img" :src="shop.image"></a>
      <div class="wrap3">
        <p v-if="shop.area">＃{{shop.area.name}}</p>
        <p v-if="shop.genre">＃{{shop.genre.name}}</p>
      </div>
      <p class="detail">{{shop.detail}}</p>
    </div>
   </div>
   <div class="right">
     <div class="right">
        <div class="booking-container">
          <form>
            <input type="date" v-model="reservation_date"><br>
          
            <a>Time</a>
            <select name="reservation_time" v-model="reservation_time">
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
            </select><br>
            <a>Num.</a>
            <select name="reservation_number" v-model="reservation_number">
              <option value="1">1人</option>
              <option value="2">2人</option>
              <option value="3">3人</option>
              <option value="4">4人</option>
              <option value="5">5人</option>
              <option value="6">6人</option>
              <option value="7">7人</option>
              <option value="8">8人</option>
              <option value="9">9人</option>
              <option value="10">10人</option>
            </select>
          </form>
          <div class="booking-info">
            <div class="flex">
            <p class="name-item">Shop</p>
                <div class="shop" v-for="(shop,index) in detaildata" :key="index">
                  <p class="shop-name">：{{shop.name}}</p>
                </div>
            </div>
            <div class="flex">
              <p class="name-item">Date</p>
              <p class="booking-date">：{{reservation_date}}</p>
            </div>
            <div class="flex">
              <p class="name-item">Time</p>
              <p class="booking-time">：{{reservation_time}}</p>
            </div>
            <div class="flex">
              <p class="name-item">Number</p>
              <p class="number">：{{reservation_number}}人</p>
            </div>
          </div>
          <div class="shop" v-for="(shop,index) in detaildata" :key="index">
            <button @click="reservation(shop)">予約する</button>
          </div>
        </div>
      </div>
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
      reservation_date:"",
      reservation_time:"",
      reservation_number:"",
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
    await axios.get(
      'http://localhost:8001/api/v1/reservations'
    )
    .then((response)=>{
      console.log(response);
    })
  } ,
    components:{
    Header,
  },
  methods:{
    reservation(shop) {
      axios
      .post(
       'http://localhost:8001/api/v1/reservations',{
        user_id:this.$store.state.user.id,
        shop_id:shop.id,
        reservation_date:this.reservation_date,
        reservation_time:this.reservation_time,
        reservation_number:this.reservation_number
      })
    .then((response)=>{
      console.log("response")
      console.log(response);
      this.$router.replace("/thanksreserve");
    })
      
    }
  }
}
</script>


<style scoped>

.flex{
  display: flex;
}

.left{
  background-color: white;
  width: 50%;
  margin: 10%;
}
.right{
  background-color: darkolivegreen;
  width: 50%;
  margin: 15% 10% 20% 10%;
}
.wrap2{
  /* display: flex; */
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
  /* background-color:black; */
  color:black;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 80%;
  padding: 0%;
}
.detail{
  text-align: left;
}
</style>