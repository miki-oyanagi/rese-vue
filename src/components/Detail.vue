<template>
<div class="flex">
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
     <div class="right">
        <div class="booking-container">
          <form>
            <input type="date" v-model="bookingDate">
            <select name="bookingTime" v-model="bookingTime">
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
            </select>
            <select name="bookingNumber" v-model="bookingNumber">
              <option value="1" disabled>1人</option>
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
                  <p class="shop-name">{{shop.name}}</p>
                </div>
            </div>
            <div class="flex">
              <p class="name-item">Date</p>
              <p class="booking-date">{{bookingDate}}</p>
            </div>
            <div class="flex">
              <p class="name-item">Time</p>
              <p class="booking-time">{{bookingTime}}</p>
            </div>
            <div class="flex">
              <p class="name-item">Number</p>
              <p class="number">{{bookingNumber}}人</p>
            </div>
          </div>
          <button @click="booking()">予約する</button>
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
      bookingDate:"",
      bookingTime:"",
      bookingNumber:"",
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
    booking(shop) {
      axios
      .post(
       'http://localhost:8001/api/v1/' +shop.id+'/reservations',{
        user_id:this.$store.state.user.id,
        shop_id:this.shop.id,
        reservation_date:this.bookingDate,
        reservation_time:this.bookingTime,
        reservation_number:this.bookingNumber
      })
    .then((response)=>{
      console.log("response")
      console.log(response)
    })
        // this.$router.replace("/thanksreserve");
      // }
    }
  }
}
</script>


<style scoped>

.flex{
  display: flex;
}
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